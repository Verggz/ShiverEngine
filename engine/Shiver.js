let {app, BrowserWindow, screen} = require('electron');
let ElectronInterface = require('./electron/main.electron');

class ShiverEngine{
    constructor(){
        //default height and width
        this.width = 1280;
        this.height = 720;
    }

    Initialize(){
        
        this.win = new BrowserWindow({
            width:this.width, 
            height:this.height,
            webPreferences:{
                nodeIntegration:true,
            },
            
        });
        
        this.win.loadFile(__dirname + '/index.html');
    }

    LoadContent(){
        var origin = this;

        //app.whenReady().then(this.Initialize());
        app.on('ready', () =>{
            const { width, height } = screen.getPrimaryDisplay().workAreaSize;
            origin.width = width;
            origin.height = height;
            this.Initialize();
            this.win.maximize();
        });
    }

    Run(){
        this.LoadContent();
    }

    Update(){
        
    }
}

module.exports = new ShiverEngine();