// UI Manager - Handles all UI/DOM interactions and rendering

class UIManager {
    constructor(taskManager, storageManager) {
      this.taskManager = taskManager;
      this.storage = storageManager;
      
      // DOM Elements 
      this.elements = {
        // Task 
        taskList: document.getElementById('taskList'),
        taskCounter: document.getElementById('taskCounter'),
        pagination: document.getElementById('pagination'),
        
        // Task 
        addTaskBtn: document.getElementById('addTaskBtn'),
        taskForm: document.getElementById('taskForm'),
        taskModal: document.getElementById('taskModal'),
        taskModalTitle: document.getElementById('taskModalTitle'),
        modalOverlay: document.getElementById('modalOverlay'),
        cancelTaskBtn: document.getElementById('cancelTaskBtn'),
        submitTaskBtn: document.getElementById('submitTaskBtn'),
        
        // Task 
        taskId: document.getElementById('taskId'),
        taskTitle: document.getElementById('taskTitle'),
        taskTitleError: document.getElementById('taskTitleError'),
        taskDescription: document.getElementById('taskDescription'),
        taskCategory: document.getElementById('taskCategory'),
        taskPriority: document.getElementById('taskPriority'),
        taskDueDate: document.getElementById('taskDueDate'),
        
        // Categories
        categoryList: document.getElementById('categoryList'),
        addCategoryBtn: document.getElementById('addCategoryBtn'),
        categoryModal: document.getElementById('categoryModal'),
        categoryModalOverlay: document.getElementById('categoryModalOverlay'),
        cancelCategoryBtn: document.getElementById('cancelCategoryBtn'),
        categoryForm: document.getElementById('categoryForm'),
        categoryName: document.getElementById('categoryName'),
        categoryNameError: document.getElementById('categoryNameError'),
        categoryIcon: document.getElementById('categoryIcon'),
        
        // istatistikler
        taskStatistics: document.getElementById('taskStatistics'),
        
        // notlar
        notesList: document.getElementById('notesList'),
        newNote: document.getElementById('newNote'),
        addNoteBtn: document.getElementById('addNoteBtn'),
        
        // yaklasan son teslim
        upcomingDeadlines: document.getElementById('upcomingDeadlines'),
        
        // ara ve filtrele
        taskSearch: document.getElementById('taskSearch'),
        taskFilter: document.getElementById('taskFilter'),
        
        // UI 
        darkModeToggle: document.getElementById('darkModeToggle'),
        userDropdown: document.getElementById('userDropdown'),
        userMenu: document.getElementById('userMenu'),
        mobileMenuButton: document.getElementById('mobileMenuButton'),
        mobileMenu: document.getElementById('mobileMenu'),
        
        // Toast
        toast: document.getElementById('toast'),
        toastMessage: document.getElementById('toastMessage')
      };
      
    
      this.pagination = {
        currentPage: 1,
        itemsPerPage: 5,
        totalPages: 1
      };
      

      this.filter = {
        search: '',
        category: 'all',
        status: 'all'
      };
    }
    
    /**
     * karanlık mod local storage
     */
    initializeDarkMode() {
      if (localStorage.getItem('darkMode') === 'enabled' || 
          (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('darkMode'))) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }
    
    /**
     *   event listeners
     */
    setupEventListeners() {
      // karanlık mod
      this.elements.darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        if (document.body.classList.contains('dark')) {
          localStorage.setItem('darkMode', 'enabled');
        } else {
          localStorage.setItem('darkMode', 'disabled');
        }
      });
      

      this.elements.userDropdown.addEventListener('click', () => {
        this.elements.userMenu.classList.toggle('hidden');
      });
      

      document.addEventListener('click', (event) => {
        if (!this.elements.userDropdown.contains(event.target)) {
          this.elements.userMenu.classList.add('hidden');
        }
      });
      
      // Mobile menu
      this.elements.mobileMenuButton.addEventListener('click', () => {
        this.elements.mobileMenu.classList.toggle('hidden');
      });
      
      // Task 
      this.elements.addTaskBtn.addEventListener('click', () => {
        this.openTaskModal();
      });
      
      this.elements.modalOverlay.addEventListener('click', () => {
        this.closeTaskModal();
      });
      
      this.elements.cancelTaskBtn.addEventListener('click', () => {
        this.closeTaskModal();
      });
      
      // Category 
      this.elements.addCategoryBtn.addEventListener('click', () => {
        this.openCategoryModal();
      });
      
      this.elements.categoryModalOverlay.addEventListener('click', () => {
        this.closeCategoryModal();
      });
      
      this.elements.cancelCategoryBtn.addEventListener('click', () => {
        this.closeCategoryModal();
      });
      

      this.elements.taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleTaskFormSubmit();
      });
      

      this.elements.categoryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleCategoryFormSubmit();
      });
      
      // not ekle
      this.elements.addNoteBtn.addEventListener('click', () => {
        this.handleAddNote();
      });
      
      // ara ve filtrele
      this.elements.taskSearch.addEventListener('input', (e) => {
        this.filter.search = e.target.value;
        this.renderTasks();
      });
      
      this.elements.taskFilter.addEventListener('change', (e) => {
        this.filter.status = e.target.value;
        this.renderTasks();
      });
      
      // düzenleme silme
      this.elements.taskList.addEventListener('click', (e) => {
        const target = e.target;
        
        // checkbox tık
        if (target.classList.contains('task-checkbox')) {
          const taskId = parseInt(target.getAttribute('data-id'));
          this.toggleTaskCompletion(taskId);
        }
        
        // buton tıklama
        if (target.classList.contains('edit-task-btn') || 
            (target.parentElement && target.parentElement.classList.contains('edit-task-btn'))) {
          const taskContainer = target.closest('.task-container');
          const taskId = parseInt(taskContainer.getAttribute('data-id'));
          this.editTask(taskId);
        }
        
        // silme butonu tıklama
        if (target.classList.contains('delete-task-btn') || 
            (target.parentElement && target.parentElement.classList.contains('delete-task-btn'))) {
          const taskContainer = target.closest('.task-container');
          const taskId = parseInt(taskContainer.getAttribute('data-id'));
          this.deleteTask(taskId);
        }
      });
      
      // kategory ls
      this.elements.categoryList.addEventListener('click', (e) => {
        // kategori seçme
        const categoryLink = e.target.closest('a');
        if (categoryLink) {
          e.preventDefault();
          const category = categoryLink.getAttribute('data-category');
          
          // kategori dzenleme
          this.filter.category = category;
          
          const allCategories = this.elements.categoryList.querySelectorAll('a');
          allCategories.forEach(cat => {
            cat.classList.remove('bg-blue-50', 'dark-bg-blue-900/20', 'text-primary');
            cat.classList.add('hover-bg-gray-50', 'dark-hover-bg-gray-700');
          });
          
          categoryLink.classList.add('bg-blue-50', 'dark-bg-blue-900/20', 'text-primary');
          categoryLink.classList.remove('hover-bg-gray-50', 'dark-hover-bg-gray-700');
          
          // render tasks
          this.renderTasks();
        }
        

        const deleteBtn = e.target.closest('.delete-category-btn');
        if (deleteBtn) {
          const categoryId = parseInt(deleteBtn.getAttribute('data-category-id'));
          this.deleteCategory(categoryId);
        }
      });
      

      this.elements.notesList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-note-btn') || 
            (e.target.parentElement && e.target.parentElement.classList.contains('delete-note-btn'))) {
          const noteElement = e.target.closest('.note-item');
          const noteId = parseInt(noteElement.getAttribute('data-id'));
          this.deleteNote(noteId);
        }
      });
    }
    

    renderAll() {
      this.renderCategories();
      this.renderTasks();
      this.renderTaskStatistics();
      this.renderUpcomingDeadlines();
      this.renderNotes();
    }
    

    renderTasks() {
      // filtrelenmiş görevleri getirme
      const filteredTasks = this.taskManager.filterTasks(this.filter);
      
      this.updatePagination(filteredTasks);
      
      // güncel görevler
      const startIndex = (this.pagination.currentPage - 1) * this.pagination.itemsPerPage;
      const endIndex = startIndex + this.pagination.itemsPerPage;
      const currentPageTasks = filteredTasks.slice(startIndex, endIndex);
      
      // görev listesi silme
      this.elements.taskList.innerHTML = '';
      
      // görev sayacı güncelleme
      this.elements.taskCounter.textContent = `Gösterilen ${Math.min(currentPageTasks.length, this.pagination.itemsPerPage)} / ${filteredTasks.length} `;
      
      // görevleri güncelleme
      if (currentPageTasks.length === 0) {
        this.elements.taskList.innerHTML = `
          <div class="text-center py-8 text-gray-500 dark-text-gray-400">
            <i class="ri-inbox-line text-4xl mb-2"></i>
            <p>Görev Yok.</p>
          </div>
        `;
      } else {
        currentPageTasks.forEach(task => {
          const taskElement = this.createTaskElement(task);
          this.elements.taskList.appendChild(taskElement);
        });
      }
    }
    
    /**
     * @param {Object} task Task object
     * @returns {HTMLElement} Task DOM element
     */
    createTaskElement(task) {
      // görev container
      const taskContainer = document.createElement('div');
      taskContainer.className = `task-container bg-gray-50 dark-bg-gray-700/50 p-4 rounded-md border border-gray-100 dark-border-gray-700 hover-shadow-md slide-down ${task.completed ? 'task-complete' : ''}`;
      taskContainer.setAttribute('data-id', task.id);
      
      // son tarih
      const dueDate = new Date(task.dueDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      let formattedDueDate = task.dueDate;
      
      if (dueDate.toDateString() === today.toDateString()) {
        formattedDueDate = 'Today';
      } else if (dueDate.toDateString() === tomorrow.toDateString()) {
        formattedDueDate = 'Tomorrow';
      } else {
        const options = { month: 'short', day: 'numeric' };
        formattedDueDate = dueDate.toLocaleDateString('en-US', options);
      }
      
      const categoryClass = `category-${task.category}`;
      
      const priorityClass = `priority-${task.priority}`;
      
      taskContainer.innerHTML = `
        <div class="flex items-start">
          <input type="checkbox" ${task.completed ? 'checked' : ''} class="task-checkbox mt-1 h-5 w-5 rounded border-gray-300 text-primary focus-ring-primary" data-id="${task.id}">
          <div class="ml-3 flex-grow">
            <h3 class="font-medium text-gray-900 dark-text-gray-100">${task.title}</h3>
            <p class="text-gray-600 dark-text-gray-400 text-sm">${task.description}</p>
            <div class="flex flex-wrap mt-2 gap-2">
              <span class="text-xs ${categoryClass} py-1 px-2 rounded">${task.category.charAt(0).toUpperCase() + task.category.slice(1)}</span>
              <span class="text-xs ${priorityClass} py-1 px-2 rounded">${task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority</span>
            </div>
          </div>
          <div class="flex flex-col items-end justify-between">
            <div class="text-xs text-gray-500 dark-text-gray-400">Due: ${formattedDueDate}</div>
            <div class="flex space-x-1 mt-2">
              <button class="p-1 hover-text-primary edit-task-btn" title="Edit">
                <i class="ri-pencil-line"></i>
              </button>
              <button class="p-1 hover-text-red-500 delete-task-btn" title="Delete">
                <i class="ri-delete-bin-line"></i>
              </button>
            </div>
          </div>
        </div>
      `;
      
      return taskContainer;
    }
    
    /**
     * Update pagination controls
     * @param {Array} tasks Filtered tasks array
     */
    updatePagination(tasks) {
      const totalTasks = tasks.length;
      this.pagination.totalPages = Math.ceil(totalTasks / this.pagination.itemsPerPage);
      
      if (this.pagination.currentPage > this.pagination.totalPages) {
        this.pagination.currentPage = Math.max(1, this.pagination.totalPages);
      }
      
      this.elements.pagination.innerHTML = '';
      
      if (this.pagination.totalPages <= 1) {
        return;
      }
      
      const prevButton = document.createElement('button');
      prevButton.className = `px-3 py-1 rounded border dark-border-gray-700 hover-bg-gray-100 dark-hover-bg-gray-700 ${this.pagination.currentPage === 1 ? 'disabled:opacity-50 disabled:cursor-not-allowed' : ''}`;
      prevButton.textContent = 'Previous';
      prevButton.disabled = this.pagination.currentPage === 1;
      prevButton.addEventListener('click', () => {
        if (this.pagination.currentPage > 1) {
          this.pagination.currentPage--;
          this.renderTasks();
        }
      });
      this.elements.pagination.appendChild(prevButton);
      
      const startPage = Math.max(1, this.pagination.currentPage - 2);
      const endPage = Math.min(this.pagination.totalPages, startPage + 4);
      
      for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button');
        
        if (i === this.pagination.currentPage) {
          pageButton.className = 'px-3 py-1 rounded bg-primary text-white hover-bg-blue-600';
        } else {
          pageButton.className = 'px-3 py-1 rounded border dark-border-gray-700 hover-bg-gray-100 dark-hover-bg-gray-700';
        }
        
        pageButton.textContent = i.toString();
        pageButton.addEventListener('click', () => {
          this.pagination.currentPage = i;
          this.renderTasks();
        });
        this.elements.pagination.appendChild(pageButton);
      }
      

      const nextButton = document.createElement('button');
      nextButton.className = `px-3 py-1 rounded border dark-border-gray-700 hover-bg-gray-100 dark-hover-bg-gray-700 ${this.pagination.currentPage === this.pagination.totalPages ? 'disabled:opacity-50 disabled:cursor-not-allowed' : ''}`;
      nextButton.textContent = 'Next';
      nextButton.disabled = this.pagination.currentPage === this.pagination.totalPages;
      nextButton.addEventListener('click', () => {
        if (this.pagination.currentPage < this.pagination.totalPages) {
          this.pagination.currentPage++;
          this.renderTasks();
        }
      });
      this.elements.pagination.appendChild(nextButton);
    }
    

    renderCategories() {
      // kategori ve görev sayısı
      const categories = this.taskManager.getAllCategories();
      const categoryCounts = this.taskManager.getTasksCountByCategory();
      
      // kategori sil
      this.elements.categoryList.innerHTML = '';
      
      const allTasksItem = document.createElement('li');
      const isAllActive = this.filter.category === 'all';
      allTasksItem.innerHTML = `
        <a href="#" class="flex items-center justify-between py-2 px-3 rounded-md ${isAllActive ? 'bg-blue-50 dark-bg-blue-900/20 text-primary' : 'hover-bg-gray-50 dark-hover-bg-gray-700'}" data-category="all">
          <div class="flex items-center">
            <i class="ri-list-check-2 mr-2"></i>
            <span>Tüm Görevler</span>
          </div>
          <span class="bg-gray-100 dark-bg-gray-700 text-gray-800 dark-text-gray-300 rounded-full text-xs py-1 px-2">${categoryCounts.all}</span>
        </a>
      `;
      this.elements.categoryList.appendChild(allTasksItem);
      
      const defaultCategories = [
        { name: 'İş', value: 'iş', icon: 'ri-briefcase-line' },
        { name: 'Kişisel', value: 'kişisel', icon: 'ri-user-line' },
        { name: 'Alışveriş', value: 'alışveriş', icon: 'ri-shopping-cart-line' }
      ];
      
      defaultCategories.forEach(cat => {
        const count = categoryCounts[cat.value] || 0;
        const isActive = this.filter.category === cat.value;
        
        const categoryItem = document.createElement('li');
        categoryItem.innerHTML = `
          <a href="#" class="flex items-center justify-between py-2 px-3 rounded-md ${isActive ? 'bg-blue-50 dark-bg-blue-900/20 text-primary' : 'hover-bg-gray-50 dark-hover-bg-gray-700'}" data-category="${cat.value}">
            <div class="flex items-center">
              <i class="${cat.icon} mr-2"></i>
              <span>${cat.name}</span>
            </div>
            <span class="bg-gray-100 dark-bg-gray-700 text-gray-800 dark-text-gray-300 rounded-full text-xs py-1 px-2">${count}</span>
          </a>
        `;
        this.elements.categoryList.appendChild(categoryItem);
      });
      
      // kategori ekle
      categories.forEach(category => {
        const categoryValue = category.name.toLowerCase();
        const count = categoryCounts[categoryValue] || 0;
        const isActive = this.filter.category === categoryValue;
        
        const categoryItem = document.createElement('li');
        categoryItem.innerHTML = `
          <div class="flex items-center justify-between py-2 px-3 rounded-md ${isActive ? 'bg-blue-50 dark-bg-blue-900/20 text-primary' : 'hover-bg-gray-50 dark-hover-bg-gray-700'}">
            <a href="#" class="flex-1 flex items-center mr-2" data-category="${categoryValue}">
              <i class="${category.icon} mr-2"></i>
              <span>${category.name}</span>
            </a>
            <div class="flex items-center">
              <span class="bg-gray-100 dark-bg-gray-700 text-gray-800 dark-text-gray-300 rounded-full text-xs py-1 px-2 mr-2">${count}</span>
              <button class="delete-category-btn text-gray-400 hover:text-red-500" data-category-id="${category.id}">
                <i class="ri-delete-bin-line"></i>
              </button>
            </div>
          </div>
        `;
        this.elements.categoryList.appendChild(categoryItem);
      });
    }
    
    /**
     * görev istatistigi guncelleme
     */
    renderTaskStatistics() {
      const stats = this.taskManager.getTaskStatistics();
      
      this.elements.taskStatistics.innerHTML = `
        <div>
          <h4 class="text-sm font-medium text-gray-500 dark-text-gray-400">Total Tasks</h4>
          <p class="text-2xl font-semibold">${stats.total}</p>
        </div>
        
        <div>
          <h4 class="text-sm font-medium text-gray-500 dark-text-gray-400">Completed</h4>
          <div class="flex items-center">
            <div class="flex-grow bg-gray-200 dark-bg-gray-700 h-2 rounded-full mr-2">
              <div class="bg-green-500 h-2 rounded-full" style="width: ${stats.completedPercentage}%"></div>
            </div>
            <span class="text-sm">${stats.completed} (${stats.completedPercentage}%)</span>
          </div>
        </div>
        
        <div>
          <h4 class="text-sm font-medium text-gray-500 dark-text-gray-400">In Progress</h4>
          <div class="flex items-center">
            <div class="flex-grow bg-gray-200 dark-bg-gray-700 h-2 rounded-full mr-2">
              <div class="bg-blue-500 h-2 rounded-full" style="width: ${stats.inProgressPercentage}%"></div>
            </div>
            <span class="text-sm">${stats.inProgress} (${stats.inProgressPercentage}%)</span>
          </div>
        </div>
      `;
    }
    
    /**
     * yaklasan tarih güncelleme
     */
    renderUpcomingDeadlines() {
      const upcomingTasks = this.taskManager.getUpcomingTasks();
      
      if (upcomingTasks.length === 0) {
        this.elements.upcomingDeadlines.innerHTML = `
          <li class="text-center py-4 text-gray-500 dark-text-gray-400">
            <p>Yaklaşan Son Teslim Tarihi Yok.</p>
          </li>
        `;
        return;
      }
      
      this.elements.upcomingDeadlines.innerHTML = '';
      
      upcomingTasks.forEach(task => {
        const dueDate = new Date(task.dueDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        let formattedDueDate = task.dueDate;
        let badgeClass = 'bg-blue-100 text-blue-800 dark-bg-blue-900/20 dark-text-blue-100';
        
        if (dueDate.toDateString() === today.toDateString()) {
          formattedDueDate = 'Today';
          badgeClass = 'bg-red-100 text-red-800 dark-bg-red-900/20 dark-text-red-100';
        } else if (dueDate.toDateString() === tomorrow.toDateString()) {
          formattedDueDate = 'Tomorrow';
          badgeClass = 'bg-yellow-100 text-yellow-800 dark-bg-yellow-900/20 dark-text-yellow-100';
        } else {
          const options = { month: 'short', day: 'numeric' };
          formattedDueDate = dueDate.toLocaleDateString('en-US', options);
        }
        
        const deadlineItem = document.createElement('li');
        deadlineItem.className = 'flex justify-between items-center p-3 bg-gray-50 dark-bg-gray-700/30 rounded-md';
        deadlineItem.innerHTML = `
          <div>
            <h4 class="font-medium">${task.title}</h4>
            <div class="text-xs mt-1">
              <span class="category-${task.category} py-1 px-2 rounded">${task.category.charAt(0).toUpperCase() + task.category.slice(1)}</span>
            </div>
          </div>
          <span class="text-xs ${badgeClass} py-1 px-2 rounded-full">
            ${formattedDueDate}
          </span>
        `;
        
        this.elements.upcomingDeadlines.appendChild(deadlineItem);
      });
    }
    
    /**
     * not listesi güncelleme
     */
    renderNotes() {
      const notes = this.taskManager.getAllNotes();
      
      if (notes.length === 0) {
        this.elements.notesList.innerHTML = `
          <div class="text-center py-4 text-gray-500 dark-text-gray-400">
            <p>Henüz Görev Yok.</p>
          </div>
        `;
        return;
      }
      
      this.elements.notesList.innerHTML = '';
      
      notes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note-item bg-gray-50 dark-bg-gray-700/30 p-3 rounded-md';
        noteElement.setAttribute('data-id', note.id);
        
        noteElement.innerHTML = `
          <div class="flex justify-between">
            <div class="text-xs text-gray-500 dark-text-gray-400">${note.date}</div>
            <button class="delete-note-btn text-gray-400 hover-text-red-500">
              <i class="ri-close-line"></i>
            </button>
          </div>
          <p class="mt-1 text-sm">${note.text}</p>
        `;
        
        this.elements.notesList.appendChild(noteElement);
      });
    }
    

    openTaskModal() {
      this.elements.taskForm.reset();
      this.elements.taskId.value = '';
      this.elements.taskTitleError.classList.add('hidden');
      
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      this.elements.taskDueDate.value = tomorrow.toISOString().split('T')[0];
      
      this.elements.taskModalTitle.textContent = 'Yeni Görev Ekle';
      this.elements.submitTaskBtn.textContent = 'Görev Ekle';
      
      this.populateCategoryDropdown();
      
      this.elements.taskModal.classList.remove('hidden');
    }
    

    populateCategoryDropdown() {
      const dropdown = this.elements.taskCategory;
      const customCategories = this.taskManager.getAllCategories();
      
      // iş kişisel tutma default
      while (dropdown.options.length > 3) {
        dropdown.remove(3);
      }
      
      // kategori ekleme
      customCategories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.name.toLowerCase();
        option.textContent = category.name;
        dropdown.appendChild(option);
      });
    }
    
    closeTaskModal() {
      this.elements.taskModal.classList.add('hidden');
    }
    
    /**
     * Open the category modal
     */
    openCategoryModal() {
      this.elements.categoryForm.reset();
      this.elements.categoryNameError.classList.add('hidden');
      
      // Show modal
      this.elements.categoryModal.classList.remove('hidden');
    }
    
   
    closeCategoryModal() {
      this.elements.categoryModal.classList.add('hidden');
    }
    
   
    handleTaskFormSubmit() {
      const taskId = this.elements.taskId.value;
      const title = this.elements.taskTitle.value.trim();
      const description = this.elements.taskDescription.value.trim();
      const category = this.elements.taskCategory.value;
      const priority = this.elements.taskPriority.value;
      const dueDate = this.elements.taskDueDate.value;
      
      if (!title) {
        this.elements.taskTitleError.classList.remove('hidden');
        return;
      }
      
      const taskData = {
        title,
        description,
        category,
        priority,
        dueDate
      };
      
      try {
        if (taskId) {
          // Update existing task
          this.taskManager.updateTask(parseInt(taskId), taskData);
          this.showToast('Görev Başarıyla Güncellendi', 'success');
        } else {
          // Create new task
          this.taskManager.createTask(taskData);
          this.showToast('Görev Başarıyla Eklendi', 'success');
        }
        
        this.closeTaskModal();
        this.renderAll();
      } catch (error) {
        this.showToast(error.message, 'error');
      }
    }
    
    /**
     * Handle category form submission
     */
    handleCategoryFormSubmit() {
      const name = this.elements.categoryName.value.trim();
      const icon = this.elements.categoryIcon.value;
      
      if (!name) {
        this.elements.categoryNameError.classList.remove('hidden');
        return;
      }
      
      const categoryData = {
        name,
        icon
      };
      
      try {
        this.taskManager.createCategory(categoryData);
        this.showToast('Kategori Başarıyla Eklendi', 'success');
        
        this.closeCategoryModal();
        this.renderCategories();
      } catch (error) {
        this.showToast(error.message, 'error');
      }
    }
    
    /**
     * Handle add note
     */
    handleAddNote() {
      const text = this.elements.newNote.value.trim();
      
      if (!text) {
        this.showToast('Note text is required', 'error');
        return;
      }
      
      try {
        this.taskManager.createNote(text);
        this.showToast('Note added successfully', 'success');
        
        this.elements.newNote.value = '';
        this.renderNotes();
      } catch (error) {
        this.showToast(error.message, 'error');
      }
    }
    
    /**
     * Toggle task completion
     * @param {Number} taskId Task ID
     */
    toggleTaskCompletion(taskId) {
      try {
        const updatedTask = this.taskManager.toggleTaskCompletion(taskId);
        
        const taskElement = document.querySelector(`.task-container[data-id="${taskId}"]`);
        if (taskElement) {
          if (updatedTask.completed) {
            taskElement.classList.add('task-complete');
          } else {
            taskElement.classList.remove('task-complete');
          }
        }
        
        this.renderTaskStatistics();
        this.renderUpcomingDeadlines();
      } catch (error) {
        this.showToast(error.message, 'error');
      }
    }
    
    /**
     * Edit a task
     * @param {Number} taskId Task ID
     */
    editTask(taskId) {
      const task = this.taskManager.getTaskById(taskId);
      
      if (!task) {
        this.showToast('Task not found', 'error');
        return;
      }
      
      this.populateCategoryDropdown();
      
      this.elements.taskId.value = task.id;
      this.elements.taskTitle.value = task.title;
      this.elements.taskDescription.value = task.description;
      this.elements.taskCategory.value = task.category;
      this.elements.taskPriority.value = task.priority;
      this.elements.taskDueDate.value = task.dueDate;
      
      this.elements.taskModalTitle.textContent = 'Edit Task';
      this.elements.submitTaskBtn.textContent = 'Update Task';
      
      this.elements.taskModal.classList.remove('hidden');
    }
    
    /**
     * Delete a task
     * @param {Number} taskId Task ID
     */
    deleteTask(taskId) {
      if (confirm('Bu Görevi Silmek İstediğinizden Emin Misiniz?')) {
        try {
          this.taskManager.deleteTask(taskId);
          this.showToast('Görev Başarıyla Silindi', 'success');
          
          // Refresh UI
          this.renderAll();
        } catch (error) {
          this.showToast(error.message, 'error');
        }
      }
    }
    
    /**
     * Delete a note
     * @param {Number} noteId Note ID
     */
    deleteNote(noteId) {
      if (confirm('Are you sure you want to delete this note?')) {
        try {
          this.taskManager.deleteNote(noteId);
          this.showToast('Note deleted successfully', 'success');
          
          this.renderNotes();
        } catch (error) {
          this.showToast(error.message, 'error');
        }
      }
    }
    
    /**
     * Delete a category
     * @param {Number} categoryId Category ID
     */
    deleteCategory(categoryId) {
      if (confirm('Are you sure you want to delete this category? Tasks in this category will be reassigned to the "Work" category.')) {
        try {
          this.taskManager.deleteCategory(categoryId);
          this.showToast('Category deleted successfully', 'success');
          
          const categories = this.taskManager.getAllCategories();
          const deletedCategory = categories.find(cat => cat.id === categoryId);
          if (deletedCategory && this.filter.category === deletedCategory.name.toLowerCase()) {
            this.filter.category = 'all';
          }
          

          this.renderAll();
          this.populateCategoryDropdown();
        } catch (error) {
          this.showToast(error.message, 'error');
        }
      }
    }
    
    /**
     * Show toast notification
     * @param {String} message Toast message
     * @param {String} type Toast type ('success' or 'error')
     */
    showToast(message, type = 'success') {
      this.elements.toast.className = `fixed bottom-4 right-4 ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white px-4 py-2 rounded-md shadow-lg z-50 fade-in`;
      this.elements.toastMessage.textContent = message;
      this.elements.toast.classList.remove('hidden');
      
      setTimeout(() => {
        this.elements.toast.classList.add('hidden');
      }, 3000);
    }
  }