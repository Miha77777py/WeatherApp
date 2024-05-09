const {app, BrowserWindow} = require("electron");
const path = require("path")

const createWindow = () => {
    const win = new BrowserWindow({
        width: 700,
        height: 500,
        icon: path.join(__dirname, "FE/img/icon.ico")
    });
    win.setMenuBarVisibility(false);
    win.setResizable(false);
    win.setTitle("Weather");
    win.loadFile(__dirname + "/FE/index.html");
};

app.whenReady().then(() => createWindow());
app.on("window-all-closed", () => app.quit());