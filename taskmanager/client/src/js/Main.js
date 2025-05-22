
document.addEventListener('DOMContentLoaded', function() {
    const storage = new StorageManager();
    const taskManager = new TaskManager(storage);
    const uiManager = new UIManager(taskManager, storage);
    
    initializeApp(taskManager, uiManager, storage);
    
    console.log('Task Manager application initialized successfully');
  });
  
  function initializeApp(taskManager, uiManager, storage) {
    // data ekleme local storage
    storage.initialize();
    
    // karanlık mod local storage
    uiManager.initializeDarkMode();
    
    uiManager.setupEventListeners();
    
    uiManager.renderAll();
  }