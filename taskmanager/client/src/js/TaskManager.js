
class TaskManager {
    constructor(storageManager) {
      this.storage = storageManager;
    }
    
    /**
     * Get all tasks
     * @returns {Array} Array of task objects
     */
    getAllTasks() {
      return this.storage.getTasks();
    }
    
    /**
     * Get all categories
     * @returns {Array} Array of category objects
     */
    getAllCategories() {
      return this.storage.getCategories();
    }
    
    /**
     * Get all notes
     * @returns {Array} Array of note objects
     */
    getAllNotes() {
      return this.storage.getNotes();
    }
    
    /**
     * Get task by ID
     * @param {Number} id Task ID
     * @returns {Object|null} Task object or null if not found
     */
    getTaskById(id) {
      const tasks = this.getAllTasks();
      return tasks.find(task => task.id === id) || null;
    }
    
    /**
     * Create a new task
     * @param {Object} taskData Task data object
     * @returns {Object} Created task object
     */
    createTask(taskData) {
      const tasks = this.getAllTasks();
      
      if (!taskData.title.trim()) {
        throw new Error('Task title is required');
      }
      
      const newTask = {
        id: Date.now(),
        title: taskData.title.trim(),
        description: taskData.description.trim(),
        category: taskData.category,
        priority: taskData.priority,
        dueDate: taskData.dueDate || new Date().toISOString().split('T')[0],
        completed: false,
        createdAt: new Date().toISOString()
      };
      
      tasks.push(newTask);
      this.storage.saveTasks(tasks);
      
      return newTask;
    }
    
    /**
     * Update an existing task
     * @param {Number} id Task ID
     * @param {Object} taskData Updated task data
     * @returns {Object} Updated task object
     */
    updateTask(id, taskData) {
      const tasks = this.getAllTasks();
      const index = tasks.findIndex(task => task.id === id);
      
      if (index === -1) {
        throw new Error('Task not found');
      }
      
      if (!taskData.title.trim()) {
        throw new Error('Task title is required');
      }
      
      tasks[index] = {
        ...tasks[index],
        title: taskData.title.trim(),
        description: taskData.description.trim(),
        category: taskData.category,
        priority: taskData.priority,
        dueDate: taskData.dueDate,
        updatedAt: new Date().toISOString()
      };
      
      this.storage.saveTasks(tasks);
      
      return tasks[index];
    }
    
    /**
     * Delete a task
     * @param {Number} id Task ID
     * @returns {Boolean} Success status
     */
    deleteTask(id) {
      const tasks = this.getAllTasks();
      const filteredTasks = tasks.filter(task => task.id !== id);
      
      if (filteredTasks.length === tasks.length) {
        throw new Error('Task not found');
      }
      
      this.storage.saveTasks(filteredTasks);
      
      return true;
    }
    
    /**
     * Toggle task completion status
     * @param {Number} id Task ID
     * @returns {Object} Updated task object
     */
    toggleTaskCompletion(id) {
      const tasks = this.getAllTasks();
      const index = tasks.findIndex(task => task.id === id);
      
      if (index === -1) {
        throw new Error('Task not found');
      }
      
      tasks[index].completed = !tasks[index].completed;
      this.storage.saveTasks(tasks);
      
      return tasks[index];
    }
    
    /**
     * Create a new category
     * @param {Object} categoryData Category data object
     * @returns {Object} Created category object
     */
    createCategory(categoryData) {
      const categories = this.getAllCategories();
      
      if (!categoryData.name.trim()) {
        throw new Error('Category name is required');
      }
      
      if (categories.some(cat => cat.name.toLowerCase() === categoryData.name.toLowerCase())) {
        throw new Error('Category already exists');
      }
      
      const newCategory = {
        id: Date.now(),
        name: categoryData.name.trim(),
        icon: categoryData.icon || 'ri-folder-line',
        createdAt: new Date().toISOString()
      };
      
      categories.push(newCategory);
      this.storage.saveCategories(categories);
      
      return newCategory;
    }
    
    /**
     * Delete a category
     * @param {Number} id Category ID
     * @returns {Boolean} Success status
     */
    deleteCategory(id) {
      const categories = this.getAllCategories();
      const filteredCategories = categories.filter(category => category.id !== id);
      
      if (filteredCategories.length === categories.length) {
        throw new Error('Category not found');
      }
      
      this.storage.saveCategories(filteredCategories);
      
      const tasks = this.getAllTasks();
      const category = categories.find(cat => cat.id === id);
      
      if (category) {
        const updatedTasks = tasks.map(task => {
          if (task.category === category.name.toLowerCase()) {
            return { ...task, category: 'work' };
          }
          return task;
        });
        
        this.storage.saveTasks(updatedTasks);
      }
      
      return true;
    }
    
    /**
     * Create a new note
     * @param {String} text Note text
     * @returns {Object} Created note object
     */
    createNote(text) {
      if (!text.trim()) {
        throw new Error('Note text is required');
      }
      
      const notes = this.getAllNotes();
      
      const newNote = {
        id: Date.now(),
        text: text.trim(),
        date: new Date().toISOString().split('T')[0],
        createdAt: new Date().toISOString()
      };
      
      notes.unshift(newNote);
      this.storage.saveNotes(notes);
      
      return newNote;
    }
    
    /**
     * Delete a note
     * @param {Number} id Note ID
     * @returns {Boolean} Success status
     */
    deleteNote(id) {
      const notes = this.getAllNotes();
      const filteredNotes = notes.filter(note => note.id !== id);
      
      if (filteredNotes.length === notes.length) {
        throw new Error('Note not found');
      }
      
      this.storage.saveNotes(filteredNotes);
      
      return true;
    }
    
    /**
     * Filter tasks based on criteria
     * @param {Object} criteria Filter criteria
     * @returns {Array} Filtered tasks
     */
    filterTasks(criteria) {
      let tasks = this.getAllTasks();
      
      // aramaya göre filtreleme
      if (criteria.search) {
        const searchLower = criteria.search.toLowerCase();
        tasks = tasks.filter(task => 
          task.title.toLowerCase().includes(searchLower) || 
          task.description.toLowerCase().includes(searchLower)
        );
      }
      
      // kategoriye göre filtreleme
      if (criteria.category && criteria.category !== 'all') {
        tasks = tasks.filter(task => task.category === criteria.category);
      }
      
      if (criteria.status === 'completed') {
        tasks = tasks.filter(task => task.completed);
      } else if (criteria.status === 'pending') {
        tasks = tasks.filter(task => !task.completed);
      }
      
      // teslim tarihine göre sırala
      tasks.sort((a, b) => {
        // tamamlananlar sona gider
        if (a.completed && !b.completed) return 1;
        if (!a.completed && b.completed) return -1;
        
        return new Date(a.dueDate) - new Date(b.dueDate);
      });
      
      return tasks;
    }
    
    /**
     * Get upcoming tasks (due within the next 7 days)
     * @returns {Array} Upcoming tasks
     */
    getUpcomingTasks() {
      const tasks = this.getAllTasks();
      const now = new Date();
      const sevenDaysLater = new Date(now);
      sevenDaysLater.setDate(now.getDate() + 7);
      
      const upcomingTasks = tasks.filter(task => {
        if (task.completed) return false;
        
        const dueDate = new Date(task.dueDate);
        return dueDate >= now && dueDate <= sevenDaysLater;
      });
      
      upcomingTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
      
      return upcomingTasks;
    }
    
    /**
     * Get task statistics
     * @returns {Object} Statistics about tasks
     */
    getTaskStatistics() {
      const tasks = this.getAllTasks();
      const total = tasks.length;
      const completed = tasks.filter(task => task.completed).length;
      const inProgress = tasks.filter(task => !task.completed).length;
      
      const completedPercentage = total > 0 ? Math.round((completed / total) * 100) : 0;
      const inProgressPercentage = total > 0 ? Math.round((inProgress / total) * 100) : 0;
      
      return {
        total,
        completed,
        inProgress,
        completedPercentage,
        inProgressPercentage
      };
    }
    
    /**
     * Get counts of tasks by category
     * @returns {Object} Object with category names as keys and counts as values
     */
    getTasksCountByCategory() {
      const tasks = this.getAllTasks();
      const categoryCounts = { all: tasks.length };
      
      categoryCounts.work = tasks.filter(task => task.category === 'work').length;
      categoryCounts.personal = tasks.filter(task => task.category === 'personal').length;
      categoryCounts.shopping = tasks.filter(task => task.category === 'shopping').length;
      
      // kategori ekle
      const categories = this.getAllCategories();
      categories.forEach(category => {
        const categoryName = category.name.toLowerCase();
        if (!categoryCounts[categoryName]) {
          categoryCounts[categoryName] = tasks.filter(task => task.category === categoryName).length;
        }
      });
      
      return categoryCounts;
    }
  }