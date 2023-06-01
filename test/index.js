const { app, BrowserWindow, ipcMain } = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainWindow.loadFile(`${app.getAppPath()}/build/index.html`);

  ipcMain.on('emailAndPassword', (event, data) => {
    console.log(data);
    mainWindow.webContents.send('emailAndPassword', data); // Envoyer les données complètes
    
    
    // Effectuez les opérations souhaitées avec l'email et le mot de passe ici
  });
});
