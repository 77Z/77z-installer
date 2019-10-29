const {app, BrowserWindow} = require("electron");

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        frame: false,
        backgroundColor: '#222222',
        resizable: true,
        alwaysOnTop: false,
        darkTheme: true
    });
    mainWindow.loadURL(`file://${__dirname}/dom/index.html`);
    mainWindow.on("closed", function() {
        mainWindow = null;
    });
}

app.on("ready", createWindow);

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function() {
    if (mainWindow === null) {
        createWindow();
    }
});