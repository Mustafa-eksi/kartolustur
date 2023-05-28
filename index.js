const {app, BrowserWindow, ipcMain} = require("electron");
const url = require("url");
const path = require("path");
const fs = require("fs");

let Window;
app.on('ready', ()=>{
    Window = new BrowserWindow({
        height:600,
        width:800,
        webPreferences: {
            nodeIntegration:true,
            contextIsolation:false,
            enableRemoteModule:true
        }
    });
    Window.loadURL(
        url.format({
            pathname:path.join(__dirname, "index.html"),
            protocol:"file:",
            slashes:true
    }));
    // burada resmi oku frontende gönder
})