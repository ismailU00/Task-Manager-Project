
document.addEventListener('DOMContentLoaded', function() {
    console.log('Auth.js initialized');
  
    const pageContent = {
      dashboard: {
        title: 'Dashboard',
        content: 'main-content' 
      },
      projects: {
        title: 'Projects',
        content: `
          <div class="bg-white dark-bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
            <h2 class="text-2xl font-semibold mb-4">Projelerim</h2>
            
            <div class="flex justify-between items-center mb-6">
              <div class="flex space-x-2">
                <button class="px-3 py-1 bg-primary-light text-primary rounded-md">All Projects</button>
                <button class="px-3 py-1 bg-gray-100 dark-bg-gray-700 text-gray-600 dark-text-gray-300 rounded-md">Active</button>
                <button class="px-3 py-1 bg-gray-100 dark-bg-gray-700 text-gray-600 dark-text-gray-300 rounded-md">Completed</button>
              </div>
              <button class="bg-primary hover-bg-blue-600 text-white py-2 px-4 rounded-md flex items-center">
                <i class="ri-add-line mr-1"></i>
                Add Project
              </button>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <!-- Project Card 1 -->
              <div class="bg-gray-50 dark-bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark-border-gray-700 hover-shadow-md">
                <div class="flex justify-between items-start mb-3">
                  <h3 class="font-semibold text-lg">Website Tasarımı</h3>
                  <span class="text-xs bg-green-100 text-green-800 dark-bg-green-900/20 dark-text-green-100 py-1 px-2 rounded-full">Active</span>
                </div>
                <p class="text-gray-600 dark-text-gray-300 text-sm mb-4">Şirket web sitesini yeni markalama yönergeleriyle yeniden tasarlama</p>
                <div class="flex justify-between items-center text-sm">
                  <div>
                    <span class="text-gray-500 dark-text-gray-400">Tasks: 8/12</span>
                  </div>
                  <div class="flex space-x-2">
                    <button class="p-1 text-gray-500 hover-text-primary"><i class="ri-eye-line"></i></button>
                    <button class="p-1 text-gray-500 hover-text-primary"><i class="ri-pencil-line"></i></button>
                  </div>
                </div>
              </div>
              
              <!-- Project Card 2 -->
              <div class="bg-gray-50 dark-bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark-border-gray-700 hover-shadow-md">
                <div class="flex justify-between items-start mb-3">
                  <h3 class="font-semibold text-lg">Mobil Oyun Programlama</h3>
                  <span class="text-xs bg-blue-100 text-blue-800 dark-bg-blue-900/20 dark-text-blue-100 py-1 px-2 rounded-full">In Progress</span>
                </div>
                <p class="text-gray-600 dark-text-gray-300 text-sm mb-4">Kendi Fikrim İle Mobil Uygulama Geliştirme</p>
                <div class="flex justify-between items-center text-sm">
                  <div>
                    <span class="text-gray-500 dark-text-gray-400">Tasks: 4/20</span>
                  </div>
                  <div class="flex space-x-2">
                    <button class="p-1 text-gray-500 hover-text-primary"><i class="ri-eye-line"></i></button>
                    <button class="p-1 text-gray-500 hover-text-primary"><i class="ri-pencil-line"></i></button>
                  </div>
                </div>
              </div>
              
              <!-- Project Card 3 -->
              <div class="bg-gray-50 dark-bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark-border-gray-700 hover-shadow-md">
                <div class="flex justify-between items-start mb-3">
                  <h3 class="font-semibold text-lg">Proje Planlaması</h3>
                  <span class="text-xs bg-purple-100 text-purple-800 dark-bg-purple-900/20 dark-text-purple-100 py-1 px-2 rounded-full">Planning</span>
                </div>
                <p class="text-gray-600 dark-text-gray-300 text-sm mb-4">Yaptığımız Porjenin Plan Aşamaları</p>
                <div class="flex justify-between items-center text-sm">
                  <div>
                    <span class="text-gray-500 dark-text-gray-400">Tasks: 2/15</span>
                  </div>
                  <div class="flex space-x-2">
                    <button class="p-1 text-gray-500 hover-text-primary"><i class="ri-eye-line"></i></button>
                    <button class="p-1 text-gray-500 hover-text-primary"><i class="ri-pencil-line"></i></button>
                  </div>
                </div>
              </div>
              
              <!-- Project Card 4 -->
              <div class="bg-gray-50 dark-bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark-border-gray-700 hover-shadow-md">
                <div class="flex justify-between items-start mb-3">
                  <h3 class="font-semibold text-lg">Pazarlama Stratejisi</h3>
                  <span class="text-xs bg-gray-100 text-gray-800 dark-bg-gray-700 dark-text-gray-300 py-1 px-2 rounded-full">Completed</span>
                </div>
                <p class="text-gray-600 dark-text-gray-300 text-sm mb-4">Pazarlama Stratejisi Geliştirme Aşamaları İçin Planlama</p>
                <div class="flex justify-between items-center text-sm">
                  <div>
                    <span class="text-gray-500 dark-text-gray-400">Tasks: 10/10</span>
                  </div>
                  <div class="flex space-x-2">
                    <button class="p-1 text-gray-500 hover-text-primary"><i class="ri-eye-line"></i></button>
                    <button class="p-1 text-gray-500 hover-text-primary"><i class="ri-pencil-line"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      },
      calendar: {
        title: 'Calendar',
        content: `
          <div class="bg-white dark-bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-2xl font-semibold">Calendar</h2>
              <div class="flex space-x-2">
                <button class="bg-gray-100 dark-bg-gray-700 hover-bg-gray-200 dark-hover-bg-gray-600 text-gray-700 dark-text-gray-300 px-3 py-1 rounded-md text-sm">Today</button>
                <div class="flex">
                  <button class="bg-gray-100 dark-bg-gray-700 hover-bg-gray-200 dark-hover-bg-gray-600 text-gray-700 dark-text-gray-300 px-3 py-1 rounded-l-md text-sm"><i class="ri-arrow-left-s-line"></i></button>
                  <button class="bg-gray-100 dark-bg-gray-700 hover-bg-gray-200 dark-hover-bg-gray-600 text-gray-700 dark-text-gray-300 px-3 py-1 rounded-r-md text-sm"><i class="ri-arrow-right-s-line"></i></button>
                </div>
                <select class="bg-gray-100 dark-bg-gray-700 text-gray-700 dark-text-gray-300 px-3 py-1 rounded-md text-sm border-0">
                  <option>Month</option>
                  <option>Week</option>
                  <option>Day</option>
                </select>
              </div>
            </div>
            
            <div class="mb-4 text-center">
              <h3 class="text-xl font-medium">May 2023</h3>
            </div>
            
            <!-- Calendar Grid -->
            <div class="grid grid-cols-7 gap-2 mb-4">
              <!-- Days of week -->
              <div class="text-gray-500 dark-text-gray-400 text-sm font-medium text-center py-2">Sun</div>
              <div class="text-gray-500 dark-text-gray-400 text-sm font-medium text-center py-2">Mon</div>
              <div class="text-gray-500 dark-text-gray-400 text-sm font-medium text-center py-2">Tue</div>
              <div class="text-gray-500 dark-text-gray-400 text-sm font-medium text-center py-2">Wed</div>
              <div class="text-gray-500 dark-text-gray-400 text-sm font-medium text-center py-2">Thu</div>
              <div class="text-gray-500 dark-text-gray-400 text-sm font-medium text-center py-2">Fri</div>
              <div class="text-gray-500 dark-text-gray-400 text-sm font-medium text-center py-2">Sat</div>
              
              <!-- Calendar days -->
              <!-- Previous month -->
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right text-gray-400">30</div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right text-gray-400">31</div>
              
              <!-- Current month -->
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">
                <div class="mb-1">1</div>
                <div class="text-xs bg-blue-100 text-blue-800 dark-bg-blue-900/20 dark-text-blue-100 p-1 rounded text-left mb-1">Project Meeting</div>
              </div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">2</div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">3</div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">4</div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">5</div>
              
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">6</div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">7</div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">8</div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">9</div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">10</div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">
                <div class="mb-1">11</div>
                <div class="text-xs bg-red-100 text-red-800 dark-bg-red-900/20 dark-text-red-100 p-1 rounded text-left mb-1">Deadline</div>
              </div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">12</div>
              
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">13</div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">14</div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">
                <div class="mb-1">15</div>
                <div class="text-xs bg-purple-100 text-purple-800 dark-bg-purple-900/20 dark-text-purple-100 p-1 rounded text-left mb-1">Team Review</div>
              </div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">16</div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">17</div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">18</div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">19</div>
              
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">20</div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">21</div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">22</div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">
                <div class="mb-1">23</div>
                <div class="text-xs bg-green-100 text-green-800 dark-bg-green-900/20 dark-text-green-100 p-1 rounded text-left mb-1">Client Call</div>
              </div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">24</div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">25</div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">26</div>
              
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">27</div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">28</div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">29</div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">30</div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right">31</div>
              
              <!-- Next month -->
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right text-gray-400">1</div>
              <div class="border dark-border-gray-700 rounded-md p-2 min-h-[100px] text-right text-gray-400">2</div>
            </div>
            
            <div class="mt-6">
              <h3 class="text-lg font-medium mb-3">Yaklaşan İşler</h3>
              <div class="space-y-3">
                <div class="bg-gray-50 dark-bg-gray-700/50 p-3 rounded-md border border-gray-200 dark-border-gray-700 flex items-start">
                  <div class="w-2 h-10 bg-blue-500 rounded mr-3 mt-1"></div>
                  <div class="flex-grow">
                    <h4 class="font-medium">Proje Toplantısı</h4>
                    <p class="text-sm text-gray-600 dark-text-gray-300">May 1, 10:00  - 11:30 </p>
                  </div>
                  <div class="flex space-x-2">
                    <button class="p-1 text-gray-500 hover-text-primary"><i class="ri-edit-line"></i></button>
                    <button class="p-1 text-gray-500 hover-text-red-500"><i class="ri-delete-bin-line"></i></button>
                  </div>
                </div>
                
                <div class="bg-gray-50 dark-bg-gray-700/50 p-3 rounded-md border border-gray-200 dark-border-gray-700 flex items-start">
                  <div class="w-2 h-10 bg-red-500 rounded mr-3 mt-1"></div>
                  <div class="flex-grow">
                    <h4 class="font-medium">Proje Son Teslim Tarihi</h4>
                    <p class="text-sm text-gray-600 dark-text-gray-300">May 11, </p>
                  </div>
                  <div class="flex space-x-2">
                    <button class="p-1 text-gray-500 hover-text-primary"><i class="ri-edit-line"></i></button>
                    <button class="p-1 text-gray-500 hover-text-red-500"><i class="ri-delete-bin-line"></i></button>
                  </div>
                </div>
                
                <div class="bg-gray-50 dark-bg-gray-700/50 p-3 rounded-md border border-gray-200 dark-border-gray-700 flex items-start">
                  <div class="w-2 h-10 bg-purple-500 rounded mr-3 mt-1"></div>
                  <div class="flex-grow">
                    <h4 class="font-medium">Takım Toplantısı</h4>
                    <p class="text-sm text-gray-600 dark-text-gray-300">May 15, 2:00 PM - 3:00 PM</p>
                  </div>
                  <div class="flex space-x-2">
                    <button class="p-1 text-gray-500 hover-text-primary"><i class="ri-edit-line"></i></button>
                    <button class="p-1 text-gray-500 hover-text-red-500"><i class="ri-delete-bin-line"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      },
      reports: {
        title: 'Reports',
        content: `
          <div class="bg-white dark-bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-2xl font-semibold">Rapolar Ve İstatistikler</h2>
              <div class="flex space-x-2">
                <select class="bg-gray-100 dark-bg-gray-700 text-gray-700 dark-text-gray-300 px-3 py-1 rounded-md text-sm border-0">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                  <option>Last Year</option>
                </select>
                <button class="bg-primary hover-bg-blue-600 text-white px-3 py-1 rounded-md text-sm">Export</button>
              </div>
            </div>
            
            <!-- Overview Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div class="bg-gray-50 dark-bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark-border-gray-700">
                <div class="flex justify-between items-center mb-2">
                  <h3 class="text-sm text-gray-500 dark-text-gray-400">Tüm Görevler</h3>
                  <i class="ri-todo-line text-primary"></i>
                </div>
                <p class="text-2xl font-semibold">187</p>
                <p class="text-xs text-green-600 mt-1">
                  <i class="ri-arrow-up-line"></i> 12% Geçen Aya Göre
                </p>
              </div>
              
              <div class="bg-gray-50 dark-bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark-border-gray-700">
                <div class="flex justify-between items-center mb-2">
                  <h3 class="text-sm text-gray-500 dark-text-gray-400">Tamamlanmış Görevler</h3>
                  <i class="ri-check-double-line text-green-500"></i>
                </div>
                <p class="text-2xl font-semibold">142</p>
                <p class="text-xs text-green-600 mt-1">
                  <i class="ri-arrow-up-line"></i> 8% Geçen Aya Göre
                </p>
              </div>
              
              <div class="bg-gray-50 dark-bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark-border-gray-700">
                <div class="flex justify-between items-center mb-2">
                  <h3 class="text-sm text-gray-500 dark-text-gray-400">Beklemede Olan Görevler</h3>
                  <i class="ri-time-line text-yellow-500"></i>
                </div>
                <p class="text-2xl font-semibold">45</p>
                <p class="text-xs text-red-600 mt-1">
                  <i class="ri-arrow-up-line"></i> 5% Geçen Aya Göre
                </p>
              </div>
              
              <div class="bg-gray-50 dark-bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark-border-gray-700">
                <div class="flex justify-between items-center mb-2">
                  <h3 class="text-sm text-gray-500 dark-text-gray-400">Tamamlanma Oranı</h3>
                  <i class="ri-bar-chart-line text-blue-500"></i>
                </div>
                <p class="text-2xl font-semibold">76%</p>
                <p class="text-xs text-green-600 mt-1">
                  <i class="ri-arrow-up-line"></i> 3% Geçen Aya Göre
                </p>
              </div>
            </div>
            
            <!-- Task Completion Chart -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div class="bg-gray-50 dark-bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark-border-gray-700">
                <h3 class="text-lg font-medium mb-4">Görev Tamamlama</h3>
                <!-- Chart would go here in a real app -->
                <div class="h-64 flex items-center justify-center">
                  <div class="w-full">
                    <div class="flex justify-between mb-2">
                      <span class="text-sm text-gray-500 dark-text-gray-400">Mon</span>
                      <span class="text-sm text-gray-500 dark-text-gray-400">Tue</span>
                      <span class="text-sm text-gray-500 dark-text-gray-400">Wed</span>
                      <span class="text-sm text-gray-500 dark-text-gray-400">Thu</span>
                      <span class="text-sm text-gray-500 dark-text-gray-400">Fri</span>
                      <span class="text-sm text-gray-500 dark-text-gray-400">Sat</span>
                      <span class="text-sm text-gray-500 dark-text-gray-400">Sun</span>
                    </div>
                    <div class="h-40 flex items-end">
                      <div class="w-1/7 h-[60%] bg-primary mx-1 rounded-t"></div>
                      <div class="w-1/7 h-[85%] bg-primary mx-1 rounded-t"></div>
                      <div class="w-1/7 h-[40%] bg-primary mx-1 rounded-t"></div>
                      <div class="w-1/7 h-[70%] bg-primary mx-1 rounded-t"></div>
                      <div class="w-1/7 h-[90%] bg-primary mx-1 rounded-t"></div>
                      <div class="w-1/7 h-[30%] bg-primary mx-1 rounded-t"></div>
                      <div class="w-1/7 h-[50%] bg-primary mx-1 rounded-t"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Task Distribution By Category -->
              <div class="bg-gray-50 dark-bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark-border-gray-700">
                <h3 class="text-lg font-medium mb-4">Kategorilere Göre Görevler</h3>
                <!-- Pie chart would go here in a real app -->
                <div class="h-64 flex flex-col justify-center">
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center">
                      <div class="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span class="text-sm">İş</span>
                    </div>
                    <div class="flex items-center">
                      <span class="text-sm font-medium">45%</span>
                      <div class="w-24 h-2 bg-gray-200 dark-bg-gray-600 rounded-full ml-2">
                        <div class="h-full bg-blue-500 rounded-full" style="width: 45%"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center">
                      <div class="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                      <span class="text-sm">Kişisel</span>
                    </div>
                    <div class="flex items-center">
                      <span class="text-sm font-medium">30%</span>
                      <div class="w-24 h-2 bg-gray-200 dark-bg-gray-600 rounded-full ml-2">
                        <div class="h-full bg-purple-500 rounded-full" style="width: 30%"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center">
                      <div class="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span class="text-sm">Alışveriş</span>
                    </div>
                    <div class="flex items-center">
                      <span class="text-sm font-medium">15%</span>
                      <div class="w-24 h-2 bg-gray-200 dark-bg-gray-600 rounded-full ml-2">
                        <div class="h-full bg-green-500 rounded-full" style="width: 15%"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <div class="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <span class="text-sm">Diğerleri</span>
                    </div>
                    <div class="flex items-center">
                      <span class="text-sm font-medium">10%</span>
                      <div class="w-24 h-2 bg-gray-200 dark-bg-gray-600 rounded-full ml-2">
                        <div class="h-full bg-yellow-500 rounded-full" style="width: 10%"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Recent Activity -->
            <div class="bg-gray-50 dark-bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark-border-gray-700">
              <h3 class="text-lg font-medium mb-4">Geçmiş Aktiviteler</h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="w-8 h-8 rounded-full bg-blue-100 dark-bg-blue-900/20 flex items-center justify-center text-blue-500 mr-3">
                    <i class="ri-add-line"></i>
                  </div>
                  <div class="flex-grow">
                    <p class="text-sm mb-1">Yeni Bir Görev Oluşturdun <span class="font-medium"></span></p>
                    <p class="text-xs text-gray-500 dark-text-gray-400">Bugün, 10:30 </p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="w-8 h-8 rounded-full bg-green-100 dark-bg-green-900/20 flex items-center justify-center text-green-500 mr-3">
                    <i class="ri-check-line"></i>
                  </div>
                  <div class="flex-grow">
                    <p class="text-sm mb-1">Bir Görev Tamamladın <span class="font-medium"></span></p>
                    <p class="text-xs text-gray-500 dark-text-gray-400">Dün, 3:45 </p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="w-8 h-8 rounded-full bg-yellow-100 dark-bg-yellow-900/20 flex items-center justify-center text-yellow-500 mr-3">
                    <i class="ri-edit-line"></i>
                  </div>
                  <div class="flex-grow">
                    <p class="text-sm mb-1">Görevi Güncelledin <span class="font-medium"></span></p>
                    <p class="text-xs text-gray-500 dark-text-gray-400">Dün, 1:20 </p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="w-8 h-8 rounded-full bg-red-100 dark-bg-red-900/20 flex items-center justify-center text-red-500 mr-3">
                    <i class="ri-delete-bin-line"></i>
                  </div>
                  <div class="flex-grow">
                    <p class="text-sm mb-1">Bir Görev Sildin <span class="font-medium"></span></p>
                    <p class="text-xs text-gray-500 dark-text-gray-400">May 12, 9:15 </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      }
    };
  
    const authElements = {
      loginBtn: document.getElementById('loginBtn'),
      signupBtn: document.getElementById('signupBtn'),
      mobileLoginBtn: document.getElementById('mobileLoginBtn'),
      mobileSignupBtn: document.getElementById('mobileSignupBtn'),
      logoutBtn: document.getElementById('logoutBtn'),
      
      authButtons: document.getElementById('authButtons'),
      userDropdown: document.getElementById('userDropdown'),
      userInitials: document.getElementById('userInitials'),
      
      loginModal: document.getElementById('loginModal'),
      loginModalOverlay: document.getElementById('loginModalOverlay'),
      loginForm: document.getElementById('loginForm'),
      loginEmail: document.getElementById('loginEmail'),
      loginPassword: document.getElementById('loginPassword'),
      loginEmailError: document.getElementById('loginEmailError'),
      loginPasswordError: document.getElementById('loginPasswordError'),
      switchToSignup: document.getElementById('switchToSignup'),
      
      signupModal: document.getElementById('signupModal'),
      signupModalOverlay: document.getElementById('signupModalOverlay'),
      signupForm: document.getElementById('signupForm'),
      signupName: document.getElementById('signupName'),
      signupEmail: document.getElementById('signupEmail'),
      signupPassword: document.getElementById('signupPassword'),
      signupConfirmPassword: document.getElementById('signupConfirmPassword'),
      agreeTerms: document.getElementById('agreeTerms'),
      signupNameError: document.getElementById('signupNameError'),
      signupEmailError: document.getElementById('signupEmailError'),
      signupPasswordError: document.getElementById('signupPasswordError'),
      signupConfirmPasswordError: document.getElementById('signupConfirmPasswordError'),
      agreeTermsError: document.getElementById('agreeTermsError'),
      switchToLogin: document.getElementById('switchToLogin'),
      
      navLinks: document.querySelectorAll('.nav-link, .nav-link-mobile'),
      
      mainContent: document.querySelector('main'),
      
      closeModalBtns: document.querySelectorAll('.close-modal')
    };
    
    initializeAuth();
    

    function initializeAuth() {
      console.log('Initializing auth module...');
      
      checkAuthState();
      
      setupAuthEventListeners();
    }
    

    function checkAuthState() {
      const userData = localStorage.getItem('taskManager_user');
      
      if (userData) {
        const user = JSON.parse(userData);
        
        showLoggedInUI(user);
      } else {
        showLoggedOutUI();
      }
    }
    
    
    function setupAuthEventListeners() {
      if (authElements.loginBtn) {
        authElements.loginBtn.addEventListener('click', () => {
          openModal(authElements.loginModal);
        });
      }
      
      if (authElements.mobileLoginBtn) {
        authElements.mobileLoginBtn.addEventListener('click', () => {
          openModal(authElements.loginModal);
        });
      }
      
      if (authElements.signupBtn) {
        authElements.signupBtn.addEventListener('click', () => {
          openModal(authElements.signupModal);
        });
      }
      
      if (authElements.mobileSignupBtn) {
        authElements.mobileSignupBtn.addEventListener('click', () => {
          openModal(authElements.signupModal);
        });
      }
      
      if (authElements.logoutBtn) {
        authElements.logoutBtn.addEventListener('click', (e) => {
          e.preventDefault();
          logout();
        });
      }
      
      if (authElements.switchToSignup) {
        authElements.switchToSignup.addEventListener('click', () => {
          closeModal(authElements.loginModal);
          openModal(authElements.signupModal);
        });
      }
      
      if (authElements.switchToLogin) {
        authElements.switchToLogin.addEventListener('click', () => {
          closeModal(authElements.signupModal);
          openModal(authElements.loginModal);
        });
      }
      
      authElements.closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          closeModal(authElements.loginModal);
          closeModal(authElements.signupModal);
        });
      });
      
      if (authElements.loginModalOverlay) {
        authElements.loginModalOverlay.addEventListener('click', () => {
          closeModal(authElements.loginModal);
        });
      }
      
      if (authElements.signupModalOverlay) {
        authElements.signupModalOverlay.addEventListener('click', () => {
          closeModal(authElements.signupModal);
        });
      }
      
      if (authElements.loginForm) {
        authElements.loginForm.addEventListener('submit', (e) => {
          e.preventDefault();
          handleLogin();
        });
      }
      
      if (authElements.signupForm) {
        authElements.signupForm.addEventListener('submit', (e) => {
          e.preventDefault();
          handleSignup();
        });
      }
      
      authElements.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const page = link.getAttribute('data-page');
          
          document.querySelectorAll('.nav-link, .nav-link-mobile').forEach(l => {
            l.classList.remove('active');
          });
          
          document.querySelectorAll(`[data-page="${page}"]`).forEach(l => {
            l.classList.add('active');
          });
          
          const mobileMenu = document.getElementById('mobileMenu');
          if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
          }
          
          showPage(page);
        });
      });
      
      const defaultActivePage = document.querySelector('.nav-link.active');
      if (defaultActivePage) {
        const page = defaultActivePage.getAttribute('data-page');
        showPage(page);
      }
    }
    
    /**
     * Show the specified page content
     * @param {string} page - The page identifier
     */
    function showPage(page) {
      const pageData = pageContent[page];
      
      if (!pageData) {
        showPage('dashboard');
        return;
      }
      
      const currentContent = authElements.mainContent.innerHTML;
      
      if (page === 'dashboard') {
        const mainContentElement = document.getElementById('main-content');
        
        if (!mainContentElement && currentContent !== pageData.content) {
          window.location.reload();
        }
        
        return;
      }
      
      authElements.mainContent.innerHTML = pageData.content;
    }
    
    function handleLogin() {
      const email = authElements.loginEmail.value.trim();
      const password = authElements.loginPassword.value;
      let isValid = true;
      
      authElements.loginEmailError.classList.add('hidden');
      authElements.loginPasswordError.classList.add('hidden');
      
      if (!email || !isValidEmail(email)) {
        authElements.loginEmailError.classList.remove('hidden');
        isValid = false;
      }
      
      if (!password) {
        authElements.loginPasswordError.classList.remove('hidden');
        isValid = false;
      }
      
      if (!isValid) return;
      
      simulateLogin(email, password);
    }
    
   
    function handleSignup() {
      const name = authElements.signupName.value.trim();
      const email = authElements.signupEmail.value.trim();
      const password = authElements.signupPassword.value;
      const confirmPassword = authElements.signupConfirmPassword.value;
      const agreeTerms = authElements.agreeTerms.checked;
      let isValid = true;
      
      authElements.signupNameError.classList.add('hidden');
      authElements.signupEmailError.classList.add('hidden');
      authElements.signupPasswordError.classList.add('hidden');
      authElements.signupConfirmPasswordError.classList.add('hidden');
      authElements.agreeTermsError.classList.add('hidden');
      
      if (!name) {
        authElements.signupNameError.classList.remove('hidden');
        isValid = false;
      }
      
      if (!email || !isValidEmail(email)) {
        authElements.signupEmailError.classList.remove('hidden');
        isValid = false;
      }
      
      if (!password || password.length < 8) {
        authElements.signupPasswordError.classList.remove('hidden');
        isValid = false;
      }
      
      if (password !== confirmPassword) {
        authElements.signupConfirmPasswordError.classList.remove('hidden');
        isValid = false;
      }
      
      if (!agreeTerms) {
        authElements.agreeTermsError.classList.remove('hidden');
        isValid = false;
      }
      
      if (!isValid) return;
      
      simulateSignup(name, email, password);
    }
    
    function simulateLogin(email, password) {
      
      const userData = localStorage.getItem('taskManager_user');
      
      if (!userData) {
        const user = {
          id: Date.now(),
          name: 'Demo User',
          email: email,
          password: password,
          createdAt: new Date().toISOString()
        };
        
        localStorage.setItem('taskManager_user', JSON.stringify(user));
        
        showToast('Başarıyla Giriş Yapıldı!', 'success');
        
        closeModal(authElements.loginModal);
        
        showLoggedInUI(user);
        return;
      }
      
      const user = JSON.parse(userData);
      
      if (user.email === email) {
        if (user.password !== password) {
          user.password = password;
          localStorage.setItem('taskManager_user', JSON.stringify(user));
        }
        
        showToast('Başarıyla Giriş Yapıldı!', 'success');
        closeModal(authElements.loginModal);
        showLoggedInUI(user);
        return;
      }
      
      showToast('Email not found. Please sign up.', 'error');
      setTimeout(() => {
        closeModal(authElements.loginModal);
        openModal(authElements.signupModal);
      }, 1000);
    }

    function simulateSignup(name, email, password) {
     
      const user = {
        id: Date.now(),
        name,
        email,
        password, 
        createdAt: new Date().toISOString()
      };
      
      localStorage.setItem('taskManager_user', JSON.stringify(user));
      
      showToast('Account created successfully!', 'success');
      
      closeModal(authElements.signupModal);
      
      showLoggedInUI(user);
    }
    
    function logout() {
      localStorage.removeItem('taskManager_user');
      
      showLoggedOutUI();
      
      showToast('Başarıyla Çıkış Yapıldı', 'success');
    }
    
    function showLoggedInUI(user) {
      console.log('Showing logged in UI for user:', user.name);
      
      if (authElements.authButtons) {
        authElements.authButtons.classList.add('hidden');
      }
      
      if (authElements.userDropdown) {
        authElements.userDropdown.classList.remove('hidden');
      }
      
      if (authElements.userInitials) {
        const nameParts = user.name.split(' ');
        let initials = '';
        
        if (nameParts.length >= 2) {
          initials = nameParts[0].charAt(0) + nameParts[1].charAt(0);
        } else {
          initials = user.name.substring(0, 2);
        }
        
        authElements.userInitials.textContent = initials.toUpperCase();
      }
      
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    }
    

    function showLoggedOutUI() {
      console.log('Showing logged out UI');
      
      if (authElements.authButtons) {
        authElements.authButtons.classList.remove('hidden');
      }
      
      if (authElements.userDropdown) {
        authElements.userDropdown.classList.add('hidden');
      }
    }

    function openModal(modal) {
      if (modal) {
        modal.classList.remove('hidden');
      }
    }
    

    function closeModal(modal) {
      if (modal) {
        modal.classList.add('hidden');
      }
    }
    

    function showToast(message, type = 'success') {
      const toast = document.getElementById('toast');
      const toastMessage = document.getElementById('toastMessage');
      
      if (toast && toastMessage) {
        toastMessage.textContent = message;
        
        toast.className = `fixed bottom-4 right-4 ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white px-4 py-2 rounded-md shadow-lg z-50 fade-in`;
        
        toast.classList.remove('hidden');
        
        setTimeout(() => {
          toast.classList.add('hidden');
        }, 3000);
      }
    }
    
   
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });