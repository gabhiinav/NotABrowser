const { app, BrowserWindow } = require("electron");

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      // Enable use of the <webview> tag in your HTML
      webviewTag: true,
      // Depending on your needs, you might adjust these:
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Load the index.html of the app.
  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

// On macOS, re-create a window when the dock icon is clicked and no windows are open.
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// Quit when all windows are closed (except on macOS).
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
