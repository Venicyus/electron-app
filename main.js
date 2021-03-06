const { app, BrowserWindow } = require('electron');
const path = require("path");
const url = require("url");

let win;

app.on('ready', () => {
    win = new BrowserWindow({
        width: 1280,
        height: 800,
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadURL(
        url.format({
            pathname: path.join(__dirname, `/public/index.html`),
            protocol: "file:",
            slashes: true
        })
    );

    // win.webContents.openDevTools();

    win.setMenu(null);

    win.on('closed', () => { win = null });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});