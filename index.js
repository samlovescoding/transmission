const { app, BrowserWindow } = require('electron')

let mainWindow

app.on('ready', ()=>{

    console.log("Starting electron BrowserWindow.")

    mainWindow = new BrowserWindow({
        show: false,
        webPreferences:{
            nodeIntegration: true
        }
    })

    mainWindow.loadFile(`${__dirname}/public/index.html`)

    mainWindow.once('ready-to-show', () => {
        console.log("Showing BrowserWindow.")
        mainWindow.show()
    })

})

console.log("Starting transmission app.")