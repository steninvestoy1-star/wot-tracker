const fs = require('fs');
const path = require('path');

const root = process.cwd();
const runtimeRoot = path.join(root, 'release-runtime', 'standalone');

function rm(target) {
  fs.rmSync(target, { recursive: true, force: true });
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function copy(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    copyDir(src, dest);
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

rm(path.join(root, 'release-runtime'));
copy(path.join(root, '.next', 'standalone'), runtimeRoot);
copy(path.join(root, '.next', 'static'), path.join(runtimeRoot, '.next', 'static'));
copy(path.join(root, 'public'), path.join(runtimeRoot, 'public'));

for (const required of [
  path.join(runtimeRoot, 'server.js'),
  path.join(runtimeRoot, 'package.json'),
  path.join(runtimeRoot, 'node_modules')
]) {
  if (!fs.existsSync(required)) {
    console.error(`Missing runtime asset: ${required}`);
    process.exit(1);
  }
}

console.log('Prepared standalone runtime:', runtimeRoot);
