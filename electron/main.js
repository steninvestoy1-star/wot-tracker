const { app, BrowserWindow, nativeImage, dialog } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

let mainWindow = null;
let splashWindow = null;
let nextServerProcess = null;

const isDev = !app.isPackaged;
const port = 3000;
const host = '127.0.0.1';

function getAppIcon() {
  const iconPath = isDev
    ? path.join(__dirname, '..', 'build', 'icon.png')
    : path.join(process.resourcesPath, 'app.asar', 'build', 'icon.png');

  return nativeImage.createFromPath(iconPath);
}

function createSplashWindow() {
  splashWindow = new BrowserWindow({
    width: 520,
    height: 320,
    frame: false,
    resizable: false,
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
}

function startStandaloneServer() {
  const serverPath = path.join(process.resourcesPath, 'standalone', 'server.js');

  nextServerProcess = spawn(process.execPath, [serverPath], {
    cwd: path.join(process.resourcesPath, 'standalone'),
    env: {
      ...process.env,
      ELECTRON_RUN_AS_NODE: '1',
      NODE_ENV: 'production',
      PORT: String(port),
      HOSTNAME: host,
    },
    stdio: 'inherit',
    windowsHide: true,
  });

  nextServerProcess.on('close', () => {
    nextServerProcess = null;
  });
}

async function waitForServer(url, timeoutMs = 45000) {
  const start = Date.now();

  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok || response.status === 404) {
        return;
      }
    } catch (_) {}

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error(`Server did not start in time: ${url}`);
}

app.whenReady().then(async () => {
  createSplashWindow();

  if (!isDev) {
    startStandaloneServer();
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
});

app.on('before-quit', () => {
  if (nextServerProcess) {
    nextServerProcess.kill();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
