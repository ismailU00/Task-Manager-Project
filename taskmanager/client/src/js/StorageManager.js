
class StorageManager {
  constructor() {
    this.storageKeys = {
      tasks: 'taskManager_tasks',
      categories: 'taskManager_categories',
      notes: 'taskManager_notes',
      darkMode: 'darkMode'
    };
    
    this.initialData = {
      tasks: [
        {
          id: 1,
          title: "Complete project proposal",
          description: "Finish writing the executive summary and budget sections",
          category: "work",
          priority: "high",
          dueDate: this.getDateString(1), 
          completed: false,
          createdAt: new Date().toISOString()
        },
        {
          id: 2,
          title: "Call insurance agent",
          description: "Discuss renewal options for home insurance",
          category: "personal",
          priority: "medium",
          dueDate: this.getDateString(2), 
          completed: true,
          createdAt: new Date().toISOString()
        },
        {
          id: 3,
          title: "Review team's code changes",
          description: "Complete code review for the new feature branch",
          category: "work",
          priority: "medium",
          dueDate: this.getDateString(7),
          completed: false,
          createdAt: new Date().toISOString()
        },
        {
          id: 4,
          title: "Buy groceries",
          description: "Milk, eggs, bread, fruits, and vegetables",
          category: "shopping",
          priority: "low",
          dueDate: this.getDateString(0), 
          completed: false,
          createdAt: new Date().toISOString()
        }
      ],
      categories: [], 
      notes: [
        {
          id: 1,
          text: "Remember to schedule team meeting for project kickoff next week",
          date: this.getDateString(-1), 
          createdAt: new Date().toISOString()
        },
        {
          id: 2,
          text: "Call Linda about the client presentation materials",
          date: this.getDateString(-2), 
          createdAt: new Date().toISOString()
        }
      ]
    };
  }
  

  initialize() {
    if (!localStorage.getItem(this.storageKeys.tasks)) {
      localStorage.setItem(this.storageKeys.tasks, JSON.stringify(this.initialData.tasks));
    }
    
    if (!localStorage.getItem(this.storageKeys.categories)) {
      localStorage.setItem(this.storageKeys.categories, JSON.stringify(this.initialData.categories));
    }
    
    if (!localStorage.getItem(this.storageKeys.notes)) {
      localStorage.setItem(this.storageKeys.notes, JSON.stringify(this.initialData.notes));
    }
  }
  
  /**
   * Get tasks from localStorage
   * @returns {Array} Array of task objects
   */
  getTasks() {
    const tasks = localStorage.getItem(this.storageKeys.tasks);
    return tasks ? JSON.parse(tasks) : [];
  }
  
  /**
   * Save tasks to localStorage
   * @param {Array} tasks Array of task objects
   */
  saveTasks(tasks) {
    localStorage.setItem(this.storageKeys.tasks, JSON.stringify(tasks));
  }
  
  /**
   * Get categories from localStorage
   * @returns {Array} Array of category objects
   */
  getCategories() {
    const categories = localStorage.getItem(this.storageKeys.categories);
    return categories ? JSON.parse(categories) : [];
  }
  
  /**
   * Save categories to localStorage
   * @param {Array} categories Array of category objects
   */
  saveCategories(categories) {
    localStorage.setItem(this.storageKeys.categories, JSON.stringify(categories));
  }
  
  /**
   * Get notes from localStorage
   * @returns {Array} Array of note objects
   */
  getNotes() {
    const notes = localStorage.getItem(this.storageKeys.notes);
    return notes ? JSON.parse(notes) : [];
  }
  
  /**
   * Save notes to localStorage
   * @param {Array} notes Array of note objects
   */
  saveNotes(notes) {
    localStorage.setItem(this.storageKeys.notes, JSON.stringify(notes));
  }
  
  /**
   * Get dark mode setting from localStorage
   * @returns {Boolean} Dark mode enabled status
   */
  getDarkMode() {
    return localStorage.getItem(this.storageKeys.darkMode) === 'enabled';
  }
  
  /**
   * Save dark mode setting to localStorage
   * @param {Boolean} enabled Dark mode enabled status
   */
  saveDarkMode(enabled) {
    localStorage.setItem(this.storageKeys.darkMode, enabled ? 'enabled' : 'disabled');
  }
  
  /**
   * Helper method to get a date string for a relative day
   * @param {Number} dayOffset Number of days from today (can be negative)
   * @returns {String} Date string in YYYY-MM-DD format
   */
  getDateString(dayOffset) {
    const date = new Date();
    date.setDate(date.getDate() + dayOffset);
    return date.toISOString().split('T')[0];
  }
  
  /**
   * task manager silme
   */
  clearAll() {
    localStorage.removeItem(this.storageKeys.tasks);
    localStorage.removeItem(this.storageKeys.categories);
    localStorage.removeItem(this.storageKeys.notes);
    // karanlık modu silmeme
  }
}