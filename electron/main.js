const { app, BrowserWindow, nativeImage, dialog } = require('electron');
const path = require('path');
const { fork } = require('child_process');

let mainWindow = null;
let splashWindow = null;
let nextServerProcess = null;

const isDev = !app.isPackaged;
const port = 3000;
const host = '127.0.0.1';

function getAppIcon() {
  const pngPath = path.join(__dirname, '..', 'build', 'icon.png');
  return nativeImage.createFromPath(pngPath);
}

function createSplashWindow() {
  splashWindow = new BrowserWindow({
    width: 520,
    height: 320,
    frame: false,
    transparent: false,
    resizable: false,
    movable: true,
    center: true,
    show: true,
    backgroundColor: '#09090b',
    icon: getAppIcon(),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  splashWindow.loadFile(path.join(__dirname, 'splash.html'));
}

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 960,
    minWidth: 1160,
    minHeight: 760,
    backgroundColor: '#09090b',
    autoHideMenuBar: true,
    show: false,
    icon: getAppIcon(),
    title: 'WoT Tracker',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.loadURL(`http://${host}:${port}`);

  mainWindow.once('ready-to-show', () => {
    if (splashWindow && !splashWindow.isDestroyed()) {
      splashWindow.close();
    }

    mainWindow.show();
  });

  mainWindow.webContents.on('did-fail-load', async () => {
    if (splashWindow && !splashWindow.isDestroyed()) {
      splashWindow.close();
    }

    await dialog.showMessageBox({
      type: 'error',
      title: 'WoT Tracker',
      message: 'Rakenduse sisemine server ei käivitunud.',
      detail: 'Sulge rakendus ja käivita see uuesti. Kui probleem kordub, buildi uus installer sellest parandatud paketist.',
    });
  });
}

function startNextServer() {
  const serverPath = path.join(__dirname, 'next-server.js');

  nextServerProcess = fork(serverPath, [], {
    cwd: path.join(__dirname, '..'),
    env: {
      ...process.env,
      NODE_ENV: 'production',
      PORT: String(port),
      HOSTNAME: host,
    },
    stdio: 'inherit',
  });

  nextServerProcess.on('close', () => {
    nextServerProcess = null;
  });
}

async function waitForServer(url, timeoutMs = 45000) {
  const start = Date.now();

  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(url, { method: 'GET' });
      if (response.ok || response.status === 404) {
        return;
      }
    } catch (_) {}

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error(`Next server did not start in time: ${url}`);
}

app.whenReady().then(async () => {
  createSplashWindow();

  if (!isDev) {
    startNextServer();
  }

  try {
    await waitForServer(`http://${host}:${port}`);
    createMainWindow();
  } catch (error) {
    if (splashWindow && !splashWindow.isDestroyed()) {
      splashWindow.close();
    }

    await dialog.showMessageBox({
      type: 'error',
      title: 'WoT Tracker',
      message: 'Rakendust ei õnnestunud käivitada.',
      detail: error instanceof Error ? error.message : 'Unknown startup error',
    });

    app.quit();
  }

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('before-quit', () => {
  if (nextServerProcess) {
    nextServerProcess.kill();
  }
});
