const {app, BrowserWindow} = require("electron")
const path = require("path")

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 300
    });

    // mainWindow.loadFile("index.html")
    
    mainWindow.loadURL("http://localhost:5173/")
    .catch((error) => {
        error.message = "can't load server URL, opening static"
        console.log(error.code)
        mainWindow.loadFile("index.html")
    })
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if(process.platform !== "darwin") app.quit()
})

app.on("activate", () => {
    if(mainWindow === null) createWindow()
})