<!DOCTYPE html>
<html lang="en" class="h-full bg-slate-50">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Incident Reporting - Guidance Office</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <!-- Inter Font -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            50: '#eef2ff',
                            100: '#e0e7ff',
                            500: '#6366f1',
                            600: '#4f46e5',
                            700: '#4338ca',
                            800: '#3730a3',
                            900: '#312e81',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* Custom styling for signature modal & responsive components */
        canvas.sig-canvas {
            touch-action: none;
            cursor: crosshair;
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(0,0,0,0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(0,0,0,0.2);
            border-radius: 9999px;
        }
        @media print {
            .no-print { display: none !important; }
            .print-only { display: block !important; }
            body { background: white !important; color: black !important; }
        }
        .print-only { display: none; }
    </style>
</head>
<body class="h-full font-sans antialiased text-slate-800 dark:text-slate-100 bg-slate-50 dark:bg-slate-900 transition-colors duration-200">
    <div id="app" class="min-h-screen flex flex-col md:flex-row">

        <!-- SIDEBAR NAVIGATION -->
        <aside id="sidebar" class="w-full md:w-64 bg-slate-900 text-slate-300 flex-shrink-0 flex flex-col border-r border-slate-800 no-print">
            <!-- Sidebar Header / Branding -->
            <div class="p-5 border-b border-slate-800 flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <div class="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>
                    <div>
                        <h1 class="font-bold text-xs tracking-wider uppercase text-slate-100">Student Incidents</h1>
                        <p class="text-[11px] text-slate-400 font-medium tracking-wide">GUIDANCE OFFICE</p>
                    </div>
                </div>
                <button id="mobileMenuBtn" class="md:hidden text-slate-400 hover:text-white p-2">
                    <i class="fa-solid fa-bars text-lg"></i>
                </button>
            </div>

            <!-- Navigation Links -->
            <nav id="navMenu" class="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar hidden md:block">
                <!-- Overview -->
                <div>
                    <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-3">Overview</span>
                    <div class="mt-2 space-y-1">
                        <button onclick="switchView('dashboard')" data-nav="dashboard" class="nav-btn w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-slate-300 hover:bg-slate-800 hover:text-white">
                            <i class="fa-solid fa-chart-pie w-5 text-indigo-400"></i>
                            <span>Dashboard</span>
                        </button>
                    </div>
                </div>

                <!-- Case Management -->
                <div>
                    <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-3">Case Management</span>
                    <div class="mt-2 space-y-1">
                        <button onclick="switchView('record-incident')" data-nav="record-incident" class="nav-btn w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-slate-300 hover:bg-slate-800 hover:text-white">
                            <i class="fa-solid fa-file-circle-plus w-5 text-indigo-400"></i>
                            <span>Record an Incident</span>
                        </button>
                        <button onclick="switchView('incident-records')" data-nav="incident-records" class="nav-btn w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-slate-300 hover:bg-slate-800 hover:text-white">
                            <i class="fa-solid fa-folder-open w-5 text-indigo-400"></i>
                            <span>Incident Records</span>
                        </button>
                    </div>
                </div>

                <!-- Student Records -->
                <div>
                    <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-3">Student Records</span>
                    <div class="mt-2 space-y-1">
                        <button onclick="switchView('students')" data-nav="students" class="nav-btn w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-slate-300 hover:bg-slate-800 hover:text-white">
                            <i class="fa-solid fa-users w-5 text-indigo-400"></i>
                            <span>Students</span>
                        </button>
                    </div>
                </div>

                <!-- Insights -->
                <div>
                    <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-3">Insights</span>
                    <div class="mt-2 space-y-1">
                        <button onclick="switchView('reports')" data-nav="reports" class="nav-btn w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-slate-300 hover:bg-slate-800 hover:text-white">
                            <i class="fa-solid fa-chart-column w-5 text-indigo-400"></i>
                            <span>Reports & Analytics</span>
                        </button>
                    </div>
                </div>

                <!-- Administration -->
                <div>
                    <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-3">Administration</span>
                    <div class="mt-2 space-y-1">
                        <button onclick="switchView('user-management')" data-nav="user-management" class="nav-btn w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-slate-300 hover:bg-slate-800 hover:text-white">
                            <i class="fa-solid fa-user-gear w-5 text-indigo-400"></i>
                            <span>User Management</span>
                        </button>
                        <button onclick="switchView('settings')" data-nav="settings" class="nav-btn w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-slate-300 hover:bg-slate-800 hover:text-white">
                            <i class="fa-solid fa-sliders w-5 text-indigo-400"></i>
                            <span>Settings</span>
                        </button>
                    </div>
                </div>
            </nav>

            <!-- User Footer Profile -->
            <div class="p-4 border-t border-slate-800 flex items-center space-x-3">
                <div class="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white text-xs">
                    H
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-semibold text-slate-200 truncate" id="sidebarUserName">Heman</p>
                    <p class="text-[11px] text-slate-500 truncate" id="sidebarUserRole">Guidance Counselor</p>
                </div>
            </div>
        </aside>

        <!-- MAIN CONTAINER -->
        <main class="flex-1 flex flex-col min-w-0 bg-slate-50 dark:bg-slate-900 overflow-y-auto">

            <!-- TOP HEADER BAR -->
            <header class="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 py-4 flex items-center justify-between no-print sticky top-0 z-10 shadow-xs">
                <div>
                    <h2 class="text-xs font-bold text-slate-400 uppercase tracking-wider">Student Incident Reporting</h2>
                    <p class="text-xs font-medium text-slate-700 dark:text-slate-300" id="currentDateDisplay">Saturday, November 7, 2026</p>
                </div>

                <div class="flex items-center space-x-3">
                    <button onclick="switchView('record-incident')" class="hidden sm:flex items-center space-x-2 bg-indigo-900 hover:bg-indigo-950 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-sm transition-all">
                        <i class="fa-solid fa-plus"></i>
                        <span>Record an incident</span>
                        <i class="fa-solid fa-arrow-right text-[10px]"></i>
                    </button>
                    <button id="notifyBtn" onclick="toggleNotifications()" class="relative p-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700">
                        <i class="fa-regular fa-bell text-base"></i>
                        <span id="notifyBadge" class="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full"></span>
                    </button>
                    <button id="themeToggleBtn" onclick="toggleTheme()" class="p-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700">
                        <i class="fa-regular fa-moon text-base dark:hidden"></i>
                        <i class="fa-regular fa-sun text-base hidden dark:block"></i>
                    </button>
                    <div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-700 dark:text-slate-200 text-xs border border-slate-300 dark:border-slate-600">
                        H
                    </div>
                </div>
            </header>

            <!-- VIEW WRAPPER -->
            <div id="mainContent" class="p-4 sm:p-6 lg:p-8 flex-1 max-w-7xl w-full mx-auto space-y-6">

                <!-- 1. DASHBOARD VIEW -->
                <section id="view-dashboard" class="view-section space-y-6">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <span class="text-xs font-bold text-slate-400 uppercase tracking-wide">GOOD EVENING, HEMAN</span>
                            <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Incident overview</h1>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Monitor student discipline cases across departments, review recent reports and track how each case is progressing.</p>
                        </div>
                        <button onclick="switchView('record-incident')" class="self-start sm:self-auto flex items-center space-x-2 bg-indigo-900 hover:bg-indigo-950 text-white px-5 py-2.5 rounded-xl text-xs font-semibold shadow-sm transition-all">
                            <span>Record an incident</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>

                    <!-- Department Filter Tabs -->
                    <div class="flex items-center space-x-1 border-b border-slate-200 dark:border-slate-700 overflow-x-auto pb-1 custom-scrollbar">
                        <button onclick="filterDashboardDept('All')" class="dash-dept-btn border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-semibold px-4 py-2 text-xs whitespace-nowrap">All departments</button>
                        <button onclick="filterDashboardDept('Preschool')" class="dash-dept-btn border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium px-4 py-2 text-xs whitespace-nowrap">Preschool</button>
                        <button onclick="filterDashboardDept('Primary')" class="dash-dept-btn border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium px-4 py-2 text-xs whitespace-nowrap">Primary</button>
                        <button onclick="filterDashboardDept('Secondary')" class="dash-dept-btn border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium px-4 py-2 text-xs whitespace-nowrap">Secondary</button>
                        <button onclick="filterDashboardDept('Junior High School')" class="dash-dept-btn border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium px-4 py-2 text-xs whitespace-nowrap">Junior High School</button>
                    </div>

                    <!-- Key Metric Cards -->
                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        <div class="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs">
                            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Students</span>
                            <div class="mt-2 flex items-baseline justify-between">
                                <span class="text-2xl font-bold text-slate-900 dark:text-white" id="statStudents">5</span>
                            </div>
                            <p class="text-[11px] text-slate-400 mt-1">Enrolled student records</p>
                        </div>
                        <div class="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs">
                            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Total Reports</span>
                            <div class="mt-2 flex items-baseline justify-between">
                                <span class="text-2xl font-bold text-slate-900 dark:text-white" id="statTotal">4</span>
                            </div>
                            <p class="text-[11px] text-slate-400 mt-1">All recorded incidents</p>
                        </div>
                        <div class="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs">
                            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Open Cases</span>
                            <div class="mt-2 flex items-baseline justify-between">
                                <span class="text-2xl font-bold text-slate-900 dark:text-white" id="statOpen">4</span>
                            </div>
                            <p class="text-[11px] text-slate-400 mt-1">Awaiting action</p>
                        </div>
                        <div class="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs">
                            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Under Investigation</span>
                            <div class="mt-2 flex items-baseline justify-between">
                                <span class="text-2xl font-bold text-slate-900 dark:text-white" id="statInvestigation">0</span>
                            </div>
                            <p class="text-[11px] text-slate-400 mt-1">Being reviewed</p>
                        </div>
                        <div class="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs">
                            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Resolved</span>
                            <div class="mt-2 flex items-baseline justify-between">
                                <span class="text-2xl font-bold text-slate-900 dark:text-white" id="statResolved">0</span>
                            </div>
                            <p class="text-[11px] text-slate-400 mt-1">Action completed</p>
                        </div>
                        <div class="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs">
                            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Closed</span>
                            <div class="mt-2 flex items-baseline justify-between">
                                <span class="text-2xl font-bold text-slate-900 dark:text-white" id="statClosed">0</span>
                            </div>
                            <p class="text-[11px] text-slate-400 mt-1">Archived cases</p>
                        </div>
                    </div>

                    <!-- High-alert incidents alert block -->
                    <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-xs space-y-4">
                        <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3">
                            <div class="flex items-center space-x-2">
                                <div class="w-7 h-7 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-600 flex items-center justify-center text-xs font-bold">
                                    <i class="fa-solid fa-triangle-exclamation"></i>
                                </div>
                                <div>
                                    <h3 class="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">High-alert incidents</h3>
                                    <p class="text-[11px] text-slate-400">Emergency cases where the family should be emailed · guidance counselor only</p>
                                </div>
                            </div>
                            <span class="text-[10px] font-bold text-rose-600 bg-rose-50 dark:bg-rose-900/30 dark:text-rose-400 px-2.5 py-1 rounded-full uppercase tracking-wider" id="highAlertBadgeCount">0 TO NOTIFY</span>
                        </div>
                        <div id="highAlertList" class="space-y-2">
                            <!-- Populated dynamically -->
                        </div>
                    </div>

                    <!-- Charts Grid -->
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <!-- Incident Trend Chart -->
                        <div class="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-xs">
                            <div class="mb-4">
                                <h3 class="text-sm font-bold text-slate-900 dark:text-white">Incident trend</h3>
                                <p class="text-[11px] text-slate-400">Recorded cases over the last six months</p>
                            </div>
                            <div class="h-64">
                                <canvas id="dashTrendChart"></canvas>
                            </div>
                        </div>

                        <!-- Severity Distribution Chart -->
                        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-xs flex flex-col justify-between">
                            <div>
                                <h3 class="text-sm font-bold text-slate-900 dark:text-white">Severity distribution</h3>
                                <p class="text-[11px] text-slate-400 mb-4">How serious the recorded cases are</p>
                                <div class="h-48 relative flex items-center justify-center">
                                    <canvas id="dashSeverityChart"></canvas>
                                </div>
                            </div>
                            <div id="severityLegend" class="space-y-1.5 pt-4 text-xs">
                                <!-- Dynamic severity legend -->
                            </div>
                        </div>
                    </div>

                    <!-- Lower Section: Category Distribution & Recent Reports -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-xs">
                            <div class="mb-4">
                                <h3 class="text-sm font-bold text-slate-900 dark:text-white">Category distribution</h3>
                                <p class="text-[11px] text-slate-400">Most frequent incident categories</p>
                            </div>
                            <div class="h-56">
                                <canvas id="dashCategoryChart"></canvas>
                            </div>
                        </div>

                        <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-xs flex flex-col">
                            <div class="flex items-center justify-between mb-4">
                                <div>
                                    <h3 class="text-sm font-bold text-slate-900 dark:text-white">Recent incident reports</h3>
                                    <p class="text-[11px] text-slate-400">Latest cases filed by teachers</p>
                                </div>
                                <button onclick="switchView('incident-records')" class="text-xs font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400">View all</button>
                            </div>
                            <div id="recentReportsList" class="space-y-3 flex-1 overflow-y-auto max-h-64 pr-1 custom-scrollbar">
                                <!-- Dynamically populated -->
                            </div>
                        </div>
                    </div>
                </section>


                <!-- 2. RECORD AN INCIDENT FORM VIEW -->
                <section id="view-record-incident" class="view-section hidden space-y-6">
                    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-4">
                        <div>
                            <button onclick="switchView('dashboard')" class="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center space-x-1 mb-1">
                                <i class="fa-solid fa-arrow-left"></i>
                                <span>Back to incident records</span>
                            </button>
                            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">NEW CASE</span>
                            <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Record an incident</h1>
                            <p class="text-xs text-slate-500 dark:text-slate-400">File a student incident report. A unique case number is generated automatically when you submit.</p>
                        </div>
                    </div>

                    <form id="recordIncidentForm" onsubmit="handleIncidentSubmit(event)" class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        
                        <!-- Left Main Input Form (2 cols) -->
                        <div class="lg:col-span-2 space-y-6">
                            
                            <!-- Student Selection Card -->
                            <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-xs space-y-3">
                                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Student</label>
                                <p class="text-xs text-slate-400">Select the learner involved in this incident.</p>
                                
                                <div class="relative">
                                    <i class="fa-solid fa-magnifying-glass absolute left-3 top-3 text-slate-400 text-xs"></i>
                                    <input type="text" id="studentSearchInput" placeholder="Search student by name or student ID..." onkeyup="filterStudentSelector()" class="w-full pl-9 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 outline-none">
                                </div>

                                <div id="studentSelectList" class="max-h-48 overflow-y-auto space-y-1.5 pr-1 custom-scrollbar border border-slate-100 dark:border-slate-700 rounded-lg p-2">
                                    <!-- Populated dynamically -->
                                </div>
                                <input type="hidden" id="selectedStudentId" required>
                            </div>

                            <!-- Incident Details Card -->
                            <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-xs space-y-4">
                                <h3 class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Incident details</h3>
                                <p class="text-xs text-slate-400">Record what happened, where and how serious it was.</p>

                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label class="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">INCIDENT DATE</label>
                                        <input type="date" id="incDate" required class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 outline-none">
                                    </div>
                                    <div>
                                        <label class="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">INCIDENT TIME</label>
                                        <input type="time" id="incTime" required class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 outline-none">
                                    </div>
                                    <div>
                                        <label class="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">LOCATION</label>
                                        <input type="text" id="incLocation" placeholder="e.g. Science Laboratory, 2nd floor" required class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 outline-none">
                                    </div>
                                    <div>
                                        <label class="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">CATEGORY</label>
                                        <select id="incCategory" onchange="updateFormSummary()" required class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 outline-none">
                                            <!-- Dynamically populated categories -->
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">SEVERITY</label>
                                        <select id="incSeverity" onchange="updateFormSummary()" required class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 outline-none">
                                            <option value="Low">Low</option>
                                            <option value="Medium">Medium</option>
                                            <option value="High">High</option>
                                            <option value="Critical">Critical</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">CASE STATUS</label>
                                        <select id="incStatus" required class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 outline-none">
                                            <option value="Open">Open</option>
                                            <option value="Under Investigation">Under Investigation</option>
                                            <option value="Resolved">Resolved</option>
                                            <option value="Closed">Closed</option>
                                        </select>
                                        <p class="text-[10px] text-slate-400 mt-1">Only the guidance counselor can change the case status.</p>
                                    </div>
                                </div>

                                <div>
                                    <label class="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">INCIDENT DESCRIPTION</label>
                                    <textarea id="incDescription" rows="3" placeholder="During the lunch break, the student..." required class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 outline-none"></textarea>
                                    <p class="text-[10px] text-slate-400 mt-1">Describe what happened, in order, using factual language.</p>
                                </div>

                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label class="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">PERSONS INVOLVED</label>
                                        <input type="text" id="incPersons" placeholder="Students, staff or others directly involved" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 outline-none">
                                    </div>
                                    <div>
                                        <label class="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">WITNESSES</label>
                                        <input type="text" id="incWitnesses" placeholder="Names of witnesses" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 outline-none">
                                    </div>
                                    <div>
                                        <label class="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">ACTION TAKEN</label>
                                        <input type="text" id="incActionTaken" placeholder="Immediate action, referral or sanction" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 outline-none">
                                    </div>
                                    <div>
                                        <label class="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">ADDITIONAL REMARKS</label>
                                        <input type="text" id="incRemarks" placeholder="Notes for the guidance office" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 outline-none">
                                    </div>
                                </div>
                            </div>

                            <!-- Supporting Documents Card -->
                            <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-xs space-y-3">
                                <h3 class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Supporting documents</h3>
                                <p class="text-xs text-slate-400">Attach demerit forms, statements, or photographs.</p>

                                <div class="flex items-center space-x-3">
                                    <label class="cursor-pointer bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 px-3 py-2 rounded-lg text-xs font-medium flex items-center space-x-2 transition-all">
                                        <i class="fa-solid fa-paperclip"></i>
                                        <span>Attach demerit form or document</span>
                                        <input type="file" id="fileUploader" onchange="handleFileUpload(event)" class="hidden" multiple>
                                    </label>
                                    <span class="text-[10px] text-slate-400">PDF, Word, Excel, PNG or JPG - up to 5MB each. Files stored privately.</span>
                                </div>
                                <div id="attachedFilesList" class="space-y-2 pt-2">
                                    <!-- List of uploaded documents -->
                                </div>
                            </div>

                            <!-- Electronic Signatures Card -->
                            <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-xs space-y-4">
                                <div>
                                    <h3 class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Electronic signatures</h3>
                                    <p class="text-xs text-slate-400">Signatories may sign now or later. A signature is only marked as signed once an actual signature is captured.</p>
                                </div>

                                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <!-- Class Adviser Card -->
                                    <div class="border border-slate-200 dark:border-slate-700 rounded-lg p-3 flex flex-col justify-between space-y-3">
                                        <div class="flex items-center justify-between">
                                            <div>
                                                <p class="text-xs font-bold text-slate-800 dark:text-slate-200">CLASS ADVISER / TEACHER</p>
                                                <p class="text-[10px] text-slate-400" id="sigAdviserStatusText">Awaiting signature</p>
                                            </div>
                                            <span id="badgeSigAdviser" class="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">Pending</span>
                                        </div>
                                        <div id="sigPreviewAdviser" class="h-16 border border-dashed border-slate-200 dark:border-slate-700 rounded flex items-center justify-center bg-slate-50 dark:bg-slate-900/50">
                                            <span class="text-[11px] text-slate-400">No signature</span>
                                        </div>
                                        <button type="button" onclick="openSignatureModal('adviser')" class="w-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 py-1.5 rounded text-xs font-medium flex items-center justify-center space-x-1">
                                            <i class="fa-solid fa-pen-nib text-[11px]"></i>
                                            <span>Add signature</span>
                                        </button>
                                    </div>

                                    <!-- Parent / Guardian Card -->
                                    <div class="border border-slate-200 dark:border-slate-700 rounded-lg p-3 flex flex-col justify-between space-y-3">
                                        <div class="flex items-center justify-between">
                                            <div>
                                                <p class="text-xs font-bold text-slate-800 dark:text-slate-200">PARENT OR GUARDIAN</p>
                                                <p class="text-[10px] text-slate-400" id="sigParentStatusText">Awaiting signature</p>
                                            </div>
                                            <span id="badgeSigParent" class="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">Pending</span>
                                        </div>
                                        <div id="sigPreviewParent" class="h-16 border border-dashed border-slate-200 dark:border-slate-700 rounded flex items-center justify-center bg-slate-50 dark:bg-slate-900/50">
                                            <span class="text-[11px] text-slate-400">No signature</span>
                                        </div>
                                        <button type="button" onclick="openSignatureModal('parent')" class="w-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 py-1.5 rounded text-xs font-medium flex items-center justify-center space-x-1">
                                            <i class="fa-solid fa-pen-nib text-[11px]"></i>
                                            <span>Add signature</span>
                                        </button>
                                    </div>

                                    <!-- School Principal Card -->
                                    <div class="border border-slate-200 dark:border-slate-700 rounded-lg p-3 flex flex-col justify-between space-y-3">
                                        <div class="flex items-center justify-between">
                                            <div>
                                                <p class="text-xs font-bold text-slate-800 dark:text-slate-200">SCHOOL PRINCIPAL</p>
                                                <p class="text-[10px] text-slate-400" id="sigPrincipalStatusText">Awaiting signature</p>
                                            </div>
                                            <span id="badgeSigPrincipal" class="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">Pending</span>
                                        </div>
                                        <div id="sigPreviewPrincipal" class="h-16 border border-dashed border-slate-200 dark:border-slate-700 rounded flex items-center justify-center bg-slate-50 dark:bg-slate-900/50">
                                            <span class="text-[11px] text-slate-400">No signature</span>
                                        </div>
                                        <button type="button" onclick="openSignatureModal('principal')" class="w-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 py-1.5 rounded text-xs font-medium flex items-center justify-center space-x-1">
                                            <i class="fa-solid fa-pen-nib text-[11px]"></i>
                                            <span>Add signature</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Right Submit Live Summary Box (1 col) -->
                        <div class="space-y-6">
                            <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-xs space-y-4 sticky top-24">
                                <h3 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Submit report</h3>
                                <p class="text-[11px] text-slate-400 leading-relaxed">
                                    The case is filed under your name and locked into the student's incident history. Status changes are recorded in the case timeline.
                                </p>

                                <div class="border-t border-b border-slate-100 dark:border-slate-700 py-3 space-y-2 text-xs">
                                    <div class="flex justify-between">
                                        <span class="text-slate-400">Student</span>
                                        <span id="sumStudentName" class="font-semibold text-slate-700 dark:text-slate-200">Not selected</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-slate-400">Category</span>
                                        <span id="sumCategory" class="font-semibold text-slate-700 dark:text-slate-200">—</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-slate-400">Severity</span>
                                        <span id="sumSeverity" class="font-semibold text-slate-700 dark:text-slate-200">Low</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-slate-400">Documents</span>
                                        <span id="sumDocuments" class="font-semibold text-slate-700 dark:text-slate-200">0</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-slate-400">Signatures</span>
                                        <span id="sumSignatures" class="font-semibold text-slate-700 dark:text-slate-200">0 of 3</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-slate-400">Reported by</span>
                                        <span id="sumReportedBy" class="font-semibold text-slate-700 dark:text-slate-200">Heman</span>
                                    </div>
                                </div>

                                <button type="submit" class="w-full bg-indigo-900 hover:bg-indigo-950 text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 shadow-md transition-all">
                                    <i class="fa-solid fa-paper-plane"></i>
                                    <span>Submit incident report</span>
                                </button>

                                <p class="text-[10px] text-slate-400 text-center flex items-center justify-center space-x-1">
                                    <i class="fa-solid fa-lock text-[9px]"></i>
                                    <span>Confidential - visible only to the guidance office and authorized teachers.</span>
                                </p>
                            </div>
                        </div>
                    </form>
                </section>


                <!-- 3. INCIDENT RECORDS VIEW -->
                <section id="view-incident-records" class="view-section hidden space-y-6">
                    <div>
                        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">CASE TRACKING</span>
                        <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Incident records</h1>
                        <p class="text-xs text-slate-500 dark:text-slate-400">Search and filter every field case. Filtering only narrows the view — existing records are never changed or removed.</p>
                    </div>

                    <!-- Filter Bar -->
                    <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 shadow-xs space-y-4">
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            <div>
                                <label class="block text-[10px] font-bold text-slate-400 uppercase mb-1">SEARCH</label>
                                <div class="relative">
                                    <i class="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-slate-400 text-xs"></i>
                                    <input type="text" id="recSearchInput" onkeyup="applyIncidentFilters()" placeholder="Student name or case number" class="w-full pl-8 pr-3 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 outline-none">
                                </div>
                            </div>
                            <div>
                                <label class="block text-[10px] font-bold text-slate-400 uppercase mb-1">DEPARTMENT</label>
                                <select id="recDeptFilter" onchange="applyIncidentFilters()" class="w-full px-3 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 outline-none">
                                    <option value="All">All departments</option>
                                    <option value="Preschool">Preschool</option>
                                    <option value="Primary">Primary</option>
                                    <option value="Secondary">Secondary</option>
                                    <option value="Junior High School">Junior High School</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-[10px] font-bold text-slate-400 uppercase mb-1">CATEGORY</label>
                                <select id="recCategoryFilter" onchange="applyIncidentFilters()" class="w-full px-3 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 outline-none">
                                    <option value="All">All categories</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-[10px] font-bold text-slate-400 uppercase mb-1">SEVERITY</label>
                                <select id="recSeverityFilter" onchange="applyIncidentFilters()" class="w-full px-3 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 outline-none">
                                    <option value="All">All severities</option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                    <option value="Critical">Critical</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-[10px] font-bold text-slate-400 uppercase mb-1">STATUS</label>
                                <select id="recStatusFilter" onchange="applyIncidentFilters()" class="w-full px-3 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 outline-none">
                                    <option value="All">All statuses</option>
                                    <option value="Open">Open</option>
                                    <option value="Under Investigation">Under Investigation</option>
                                    <option value="Resolved">Resolved</option>
                                    <option value="Closed">Closed</option>
                                </select>
                            </div>
                            <div class="flex items-end justify-between">
                                <button onclick="resetIncidentFilters()" class="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center space-x-1 py-2">
                                    <i class="fa-solid fa-rotate-left text-[11px]"></i>
                                    <span>Clear filters</span>
                                </button>
                                <span class="text-xs text-slate-400 font-medium" id="recordCountLabel">0 cases shown</span>
                            </div>
                        </div>
                    </div>

                    <!-- Records Table -->
                    <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xs">
                        <div class="overflow-x-auto">
                            <table class="w-full text-left text-xs">
                                <thead class="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 text-slate-400 uppercase font-bold text-[10px] tracking-wider">
                                    <tr>
                                        <th class="py-3 px-4">Case no.</th>
                                        <th class="py-3 px-4">Student</th>
                                        <th class="py-3 px-4">Department</th>
                                        <th class="py-3 px-4">Incident date</th>
                                        <th class="py-3 px-4">Category</th>
                                        <th class="py-3 px-4">Severity</th>
                                        <th class="py-3 px-4">Status</th>
                                        <th class="py-3 px-4">Reported by</th>
                                        <th class="py-3 px-4 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="incidentRecordsTableBody" class="divide-y divide-slate-100 dark:divide-slate-700">
                                    <!-- Dynamic rows -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>


                <!-- 4. STUDENTS DIRECTORY VIEW -->
                <section id="view-students" class="view-section hidden space-y-6">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">STUDENT DIRECTORY</span>
                            <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Enrolled students</h1>
                            <p class="text-xs text-slate-500 dark:text-slate-400">Manage student profiles, view individual incident histories and guardian contact details.</p>
                        </div>
                        <button onclick="openAddStudentModal()" class="self-start sm:self-auto bg-indigo-900 hover:bg-indigo-950 text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-2 transition-all">
                            <i class="fa-solid fa-plus"></i>
                            <span>Add new student</span>
                        </button>
                    </div>

                    <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xs">
                        <div class="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                            <div class="relative w-full sm:w-72">
                                <i class="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-slate-400 text-xs"></i>
                                <input type="text" id="studentDirSearch" onkeyup="renderStudentDirectory()" placeholder="Search students..." class="w-full pl-8 pr-3 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs focus:ring-2 focus:ring-indigo-500 outline-none">
                            </div>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left text-xs">
                                <thead class="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 text-slate-400 uppercase font-bold text-[10px] tracking-wider">
                                    <tr>
                                        <th class="py-3 px-4">Student Name</th>
                                        <th class="py-3 px-4">Student ID</th>
                                        <th class="py-3 px-4">Department</th>
                                        <th class="py-3 px-4">Grade / Section</th>
                                        <th class="py-3 px-4">Parent Email</th>
                                        <th class="py-3 px-4 text-center">Incidents</th>
                                        <th class="py-3 px-4 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="studentDirectoryTableBody" class="divide-y divide-slate-100 dark:divide-slate-700">
                                    <!-- Dynamic rows -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>


                <!-- 5. REPORTS & ANALYTICS VIEW -->
                <section id="view-reports" class="view-section hidden space-y-6">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">INSIGHTS</span>
                            <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Reports & analytics</h1>
                            <p class="text-xs text-slate-500 dark:text-slate-400">Summaries of incidents by department, category, severity, status and date. Export the data or print report.</p>
                        </div>
                        <div class="flex items-center space-x-2">
                            <button onclick="window.print()" class="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 px-3 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5">
                                <i class="fa-solid fa-print"></i>
                                <span>Print</span>
                            </button>
                            <button onclick="exportSummaryCSV()" class="bg-indigo-900 hover:bg-indigo-950 text-white px-3 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 shadow-sm">
                                <i class="fa-solid fa-file-csv"></i>
                                <span>Summary CSV</span>
                            </button>
                            <button onclick="exportCasesCSV()" class="bg-indigo-900 hover:bg-indigo-950 text-white px-3 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 shadow-sm">
                                <i class="fa-solid fa-file-csv"></i>
                                <span>Cases CSV</span>
                            </button>
                        </div>
                    </div>

                    <!-- Department Tabs & Date Filter -->
                    <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 shadow-xs space-y-4">
                        <div class="flex items-center space-x-1 border-b border-slate-100 dark:border-slate-700 overflow-x-auto pb-1 custom-scrollbar">
                            <button onclick="filterAnalyticsDept('All')" class="analytics-dept-btn border-b-2 border-indigo-600 text-indigo-600 font-semibold px-4 py-2 text-xs whitespace-nowrap">All departments</button>
                            <button onclick="filterAnalyticsDept('Preschool')" class="analytics-dept-btn border-b-2 border-transparent text-slate-500 font-medium px-4 py-2 text-xs whitespace-nowrap">Preschool</button>
                            <button onclick="filterAnalyticsDept('Primary')" class="analytics-dept-btn border-b-2 border-transparent text-slate-500 font-medium px-4 py-2 text-xs whitespace-nowrap">Primary</button>
                            <button onclick="filterAnalyticsDept('Secondary')" class="analytics-dept-btn border-b-2 border-transparent text-slate-500 font-medium px-4 py-2 text-xs whitespace-nowrap">Secondary</button>
                            <button onclick="filterAnalyticsDept('Junior High School')" class="analytics-dept-btn border-b-2 border-transparent text-slate-500 font-medium px-4 py-2 text-xs whitespace-nowrap">Junior High School</button>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-[10px] font-bold text-slate-400 uppercase mb-1">FROM</label>
                                <input type="date" id="analyticsFromDate" value="2026-01-01" onchange="renderAnalyticsView()" class="w-full px-3 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs outline-none">
                            </div>
                            <div>
                                <label class="block text-[10px] font-bold text-slate-400 uppercase mb-1">TO</label>
                                <input type="date" id="analyticsToDate" value="2026-11-07" onchange="renderAnalyticsView()" class="w-full px-3 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs outline-none">
                            </div>
                        </div>
                    </div>

                    <!-- Analytics Stats Grid -->
                    <div class="grid grid-cols-2 sm:grid-cols-5 gap-4">
                        <div class="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                            <span class="text-[10px] font-bold text-slate-400 uppercase">TOTAL CASES</span>
                            <p class="text-2xl font-bold text-slate-900 dark:text-white mt-1" id="anTotal">4</p>
                        </div>
                        <div class="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                            <span class="text-[10px] font-bold text-slate-400 uppercase">OPEN</span>
                            <p class="text-2xl font-bold text-slate-900 dark:text-white mt-1" id="anOpen">4</p>
                        </div>
                        <div class="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                            <span class="text-[10px] font-bold text-slate-400 uppercase">UNDER INVESTIGATION</span>
                            <p class="text-2xl font-bold text-slate-900 dark:text-white mt-1" id="anInvest">0</p>
                        </div>
                        <div class="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                            <span class="text-[10px] font-bold text-slate-400 uppercase">RESOLVED</span>
                            <p class="text-2xl font-bold text-slate-900 dark:text-white mt-1" id="anResolved">0</p>
                        </div>
                        <div class="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                            <span class="text-[10px] font-bold text-slate-400 uppercase">CLOSED</span>
                            <p class="text-2xl font-bold text-slate-900 dark:text-white mt-1" id="anClosed">0</p>
                        </div>
                    </div>

                    <!-- Analytics Detailed Charts -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div class="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                            <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-2">Cases by category</h3>
                            <div class="h-64">
                                <canvas id="anCategoryChart"></canvas>
                            </div>
                        </div>
                        <div class="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                            <h3 class="text-sm font-bold text-slate-900 dark:text-white mb-2">Cases by severity</h3>
                            <div class="h-64 flex items-center justify-center">
                                <canvas id="anSeverityChart"></canvas>
                            </div>
                        </div>
                    </div>
                </section>


                <!-- 6. USER MANAGEMENT VIEW -->
                <section id="view-user-management" class="view-section hidden space-y-6">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">ADMINISTRATION</span>
                            <h1 class="text-2xl font-bold text-slate-900 dark:text-white">User management</h1>
                            <p class="text-xs text-slate-500 dark:text-slate-400">Create teacher accounts, assign departments and control who can access student records.</p>
                        </div>
                        <button onclick="openAddTeacherModal()" class="self-start sm:self-auto bg-indigo-900 hover:bg-indigo-950 text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-2 transition-all">
                            <i class="fa-solid fa-user-plus"></i>
                            <span>Add teacher</span>
                        </button>
                    </div>

                    <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xs">
                        <div class="p-4 border-b border-slate-200 dark:border-slate-700">
                            <h3 class="text-xs font-bold text-slate-800 dark:text-slate-200">Teacher accounts</h3>
                            <p class="text-[11px] text-slate-400">Deactivating an account blocks the teacher's access the next time they load the system.</p>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left text-xs">
                                <thead class="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 text-slate-400 uppercase font-bold text-[10px] tracking-wider">
                                    <tr>
                                        <th class="py-3 px-4">Teacher</th>
                                        <th class="py-3 px-4">Department</th>
                                        <th class="py-3 px-4">Position</th>
                                        <th class="py-3 px-4">Access</th>
                                        <th class="py-3 px-4 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="teacherAccountsTableBody" class="divide-y divide-slate-100 dark:divide-slate-700">
                                    <!-- Dynamic rows -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>


                <!-- 7. SETTINGS VIEW -->
                <section id="view-settings" class="view-section hidden space-y-6">
                    <div>
                        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">ADMINISTRATION</span>
                        <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Settings</h1>
                        <p class="text-xs text-slate-500 dark:text-slate-400">School details used on printed reports, incident categories and your account preferences.</p>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <!-- Left 2 Cols: School Profile & Categories -->
                        <div class="lg:col-span-2 space-y-6">
                            
                            <!-- School Profile Form -->
                            <form id="schoolProfileForm" onsubmit="saveSchoolProfile(event)" class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-xs space-y-4">
                                <h3 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">School profile</h3>
                                <p class="text-[11px] text-slate-400">These details appear on every printable incident report.</p>

                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div class="sm:col-span-2">
                                        <label class="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">SCHOOL NAME</label>
                                        <input type="text" id="setSchoolName" value="REPUBLIC OF THE PHILIPPINES - DEPARTMENT OF EDUCATION" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs outline-none">
                                    </div>
                                    <div class="sm:col-span-2">
                                        <label class="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">SCHOOL ADDRESS</label>
                                        <input type="text" id="setSchoolAddress" value="Guidance & Student Affairs Division" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs outline-none">
                                    </div>
                                    <div>
                                        <label class="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">OFFICE NAME</label>
                                        <input type="text" id="setOfficeName" value="GUIDANCE OFFICE" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs outline-none">
                                    </div>
                                    <div>
                                        <label class="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">ACADEMIC YEAR</label>
                                        <input type="text" id="setAcademicYear" value="2026-2027" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs outline-none">
                                    </div>
                                    <div>
                                        <label class="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">PRINCIPAL</label>
                                        <input type="text" id="setPrincipal" value="Fred" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs outline-none">
                                    </div>
                                    <div>
                                        <label class="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">GUIDANCE COUNSELOR</label>
                                        <input type="text" id="setCounselor" value="Heman" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs outline-none">
                                    </div>
                                </div>

                                <button type="submit" class="bg-indigo-900 hover:bg-indigo-950 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-xs">
                                    Save school profile
                                </button>
                            </form>

                            <!-- Incident Categories Manager -->
                            <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-xs space-y-4">
                                <h3 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Incident categories</h3>
                                <p class="text-[11px] text-slate-400">Categories available when filing a report, each with a default severity.</p>

                                <div class="flex items-center space-x-2">
                                    <input type="text" id="newCategoryName" placeholder="New category, e.g. Bullying" class="flex-1 px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs outline-none">
                                    <select id="newCategorySeverity" class="px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs outline-none">
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                        <option value="Critical">Critical</option>
                                    </select>
                                    <button onclick="addCategorySetting()" class="bg-indigo-900 hover:bg-indigo-950 text-white px-4 py-2 rounded-lg text-xs font-semibold flex items-center space-x-1">
                                        <i class="fa-solid fa-plus text-[10px]"></i>
                                        <span>Add</span>
                                    </button>
                                </div>

                                <div id="settingsCategoryList" class="space-y-2 pt-2">
                                    <!-- Dynamic categories list -->
                                </div>
                            </div>
                        </div>

                        <!-- Right 1 Col: Appearance Theme & Account Info -->
                        <div class="space-y-6">
                            <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-xs space-y-4">
                                <h3 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Appearance</h3>
                                <p class="text-[11px] text-slate-400">Choose how the workspace looks on this device.</p>

                                <div class="grid grid-cols-2 gap-3">
                                    <button onclick="setTheme('light')" class="p-3 rounded-xl border border-slate-200 dark:border-slate-700 text-center space-y-2 hover:bg-slate-50 dark:hover:bg-slate-700">
                                        <i class="fa-solid fa-sun text-amber-500 text-lg"></i>
                                        <p class="text-xs font-semibold text-slate-700 dark:text-slate-200">Light</p>
                                    </button>
                                    <button onclick="setTheme('dark')" class="p-3 rounded-xl border border-slate-200 dark:border-slate-700 text-center space-y-2 hover:bg-slate-50 dark:hover:bg-slate-700">
                                        <i class="fa-solid fa-moon text-indigo-400 text-lg"></i>
                                        <p class="text-xs font-semibold text-slate-700 dark:text-slate-200">Dark</p>
                                    </button>
                                </div>
                            </div>

                            <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-xs space-y-3">
                                <h3 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">Your account</h3>
                                <div class="space-y-2 text-xs">
                                    <div class="flex justify-between">
                                        <span class="text-slate-400">Name</span>
                                        <span class="font-semibold text-slate-700 dark:text-slate-200">Heman</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-slate-400">Email</span>
                                        <span class="font-semibold text-slate-700 dark:text-slate-200">hemangoringonzalez@gmail.com</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-slate-400">Role</span>
                                        <span class="font-semibold text-slate-700 dark:text-slate-200">Guidance counselor (admin)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </div>

    <!-- MODAL: CASE DETAIL & PRINT REPORT VIEW -->
    <div id="caseDetailModal" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 hidden no-print">
        <div class="bg-white dark:bg-slate-800 w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            <!-- Modal Header -->
            <div class="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div>
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider" id="cdCaseNo">CASE IR-2026-0002</span>
                    <h2 class="text-lg font-bold text-slate-900 dark:text-white" id="cdStudentName">Kayla H</h2>
                </div>
                <div class="flex items-center space-x-2">
                    <button onclick="printCaseDetailReport()" class="bg-indigo-900 hover:bg-indigo-950 text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5">
                        <i class="fa-solid fa-print"></i>
                        <span>Print report</span>
                    </button>
                    <button onclick="closeCaseDetailModal()" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 text-lg">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>

            <!-- Modal Content -->
            <div class="p-6 overflow-y-auto space-y-6 custom-scrollbar flex-1 text-xs">
                <!-- Case Info Badges -->
                <div class="flex flex-wrap items-center gap-2 pb-2">
                    <span id="cdSeverityBadge" class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase">LOW</span>
                    <span id="cdStatusBadge" class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase">OPEN</span>
                    <span class="text-slate-400" id="cdCategoryMeta">Disruptive Behavior · Nov 4, 2026</span>
                </div>

                <!-- Case Narrative -->
                <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl space-y-3 border border-slate-100 dark:border-slate-700">
                    <h4 class="font-bold text-slate-800 dark:text-slate-200 uppercase text-[11px] tracking-wider">Incident Narrative</h4>
                    <p class="text-slate-700 dark:text-slate-300 whitespace-pre-line" id="cdDescription">—</p>

                    <div class="grid grid-cols-2 gap-4 pt-2 border-t border-slate-200 dark:border-slate-700">
                        <div>
                            <span class="text-[10px] text-slate-400 font-bold uppercase block">PERSONS INVOLVED</span>
                            <p class="font-medium text-slate-700 dark:text-slate-300" id="cdPersons">—</p>
                        </div>
                        <div>
                            <span class="text-[10px] text-slate-400 font-bold uppercase block">WITNESSES</span>
                            <p class="font-medium text-slate-700 dark:text-slate-300" id="cdWitnesses">—</p>
                        </div>
                        <div>
                            <span class="text-[10px] text-slate-400 font-bold uppercase block">ACTION TAKEN</span>
                            <p class="font-medium text-slate-700 dark:text-slate-300" id="cdActionTaken">—</p>
                        </div>
                        <div>
                            <span class="text-[10px] text-slate-400 font-bold uppercase block">ADDITIONAL REMARKS</span>
                            <p class="font-medium text-slate-700 dark:text-slate-300" id="cdRemarks">—</p>
                        </div>
                    </div>
                </div>

                <!-- Parent Notification Box -->
                <div class="border border-slate-200 dark:border-slate-700 rounded-xl p-4 space-y-3">
                    <div class="flex items-center justify-between">
                        <div>
                            <h4 class="font-bold text-slate-800 dark:text-slate-200 uppercase text-[11px] tracking-wider">Parent Notification</h4>
                            <p class="text-[10px] text-slate-400">Guidance counselor only - used for emergency and high-alert cases.</p>
                        </div>
                        <button onclick="resendParentEmail()" class="bg-indigo-900 hover:bg-indigo-950 text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1">
                            <i class="fa-solid fa-paper-plane text-[10px]"></i>
                            <span>Resend email to parents</span>
                        </button>
                    </div>
                    <div id="cdNotificationHistory" class="text-[11px] text-slate-500 space-y-1">
                        <!-- Populated dynamically -->
                    </div>
                </div>

                <!-- Signatures View -->
                <div>
                    <h4 class="font-bold text-slate-800 dark:text-slate-200 uppercase text-[11px] tracking-wider mb-2">Electronic Signatures</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3" id="cdSignaturesGrid">
                        <!-- Populated dynamically -->
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- MODAL: DIGITAL SIGNATURE CANVAS DRAW -->
    <div id="signatureModal" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 hidden no-print">
        <div class="bg-white dark:bg-slate-800 w-full max-w-md rounded-2xl shadow-2xl p-5 space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-3">
                <h3 class="text-sm font-bold text-slate-900 dark:text-white" id="sigModalTitle">Draw Electronic Signature</h3>
                <button type="button" onclick="closeSignatureModal()" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>
            </div>

            <div>
                <label class="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">SIGNER'S FULL NAME</label>
                <input type="text" id="sigSignerNameInput" placeholder="Full name" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs outline-none">
            </div>

            <div>
                <label class="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">SIGNATURE PAD</label>
                <div id="canvasContainer" class="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-900">
                    <canvas id="sigCanvas" class="sig-canvas w-full h-40 block"></canvas>
                </div>
                <p class="text-[10px] text-slate-400 mt-1">Use your mouse or touch screen to draw your signature inside the box.</p>
            </div>

            <div class="flex items-center justify-between pt-2">
                <button type="button" onclick="clearSignatureCanvas()" class="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center space-x-1">
                    <i class="fa-solid fa-eraser"></i>
                    <span>Clear</span>
                </button>
                <div class="flex space-x-2">
                    <button type="button" onclick="closeSignatureModal()" class="px-3 py-2 rounded-lg text-xs font-semibold text-slate-500 hover:text-slate-700">
                        Cancel
                    </button>
                    <button type="button" onclick="saveSignatureModal()" class="bg-indigo-900 hover:bg-indigo-950 text-white px-4 py-2 rounded-lg text-xs font-bold shadow-sm">
                        Save signature
                    </button>
                </div>
            </div>
        </div>
    </div>


    <!-- MODAL: ADD STUDENT -->
    <div id="addStudentModal" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 hidden no-print">
        <form onsubmit="saveNewStudent(event)" class="bg-white dark:bg-slate-800 w-full max-w-md rounded-2xl shadow-2xl p-5 space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-3">
                <h3 class="text-sm font-bold text-slate-900 dark:text-white">Add New Student</h3>
                <button type="button" onclick="closeAddStudentModal()" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>
            </div>

            <div class="space-y-3 text-xs">
                <div>
                    <label class="block font-semibold text-slate-600 dark:text-slate-400 mb-1">FULL NAME</label>
                    <input type="text" id="newStudName" required placeholder="e.g. Kayla H" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg outline-none">
                </div>
                <div>
                    <label class="block font-semibold text-slate-600 dark:text-slate-400 mb-1">STUDENT ID</label>
                    <input type="text" id="newStudId" required placeholder="e.g. 2026-03" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg outline-none">
                </div>
                <div>
                    <label class="block font-semibold text-slate-600 dark:text-slate-400 mb-1">DEPARTMENT</label>
                    <select id="newStudDept" required class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg outline-none">
                        <option value="Preschool">Preschool</option>
                        <option value="Primary">Primary</option>
                        <option value="Secondary">Secondary</option>
                        <option value="Junior High School">Junior High School</option>
                    </select>
                </div>
                <div>
                    <label class="block font-semibold text-slate-600 dark:text-slate-400 mb-1">GRADE / SECTION</label>
                    <input type="text" id="newStudGrade" required placeholder="e.g. Grade 11 Courage" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg outline-none">
                </div>
                <div>
                    <label class="block font-semibold text-slate-600 dark:text-slate-400 mb-1">PARENT / GUARDIAN EMAIL</label>
                    <input type="email" id="newStudEmail" required placeholder="parent@example.com" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg outline-none">
                </div>
            </div>

            <div class="flex justify-end space-x-2 pt-2">
                <button type="button" onclick="closeAddStudentModal()" class="px-3 py-2 rounded-lg text-xs font-semibold text-slate-500">Cancel</button>
                <button type="submit" class="bg-indigo-900 hover:bg-indigo-950 text-white px-4 py-2 rounded-lg text-xs font-bold">Save Student</button>
            </div>
        </form>
    </div>


    <!-- MODAL: ADD TEACHER -->
    <div id="addTeacherModal" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 hidden no-print">
        <form onsubmit="saveNewTeacher(event)" class="bg-white dark:bg-slate-800 w-full max-w-md rounded-2xl shadow-2xl p-5 space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-3">
                <h3 class="text-sm font-bold text-slate-900 dark:text-white">Add New Teacher Account</h3>
                <button type="button" onclick="closeAddTeacherModal()" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>
            </div>

            <div class="space-y-3 text-xs">
                <div>
                    <label class="block font-semibold text-slate-600 dark:text-slate-400 mb-1">TEACHER NAME</label>
                    <input type="text" id="newTeachName" required placeholder="e.g. Mr. Heman" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg outline-none">
                </div>
                <div>
                    <label class="block font-semibold text-slate-600 dark:text-slate-400 mb-1">EMAIL</label>
                    <input type="email" id="newTeachEmail" required placeholder="teacher@school.edu" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg outline-none">
                </div>
                <div>
                    <label class="block font-semibold text-slate-600 dark:text-slate-400 mb-1">DEPARTMENT</label>
                    <select id="newTeachDept" required class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg outline-none">
                        <option value="All Departments">All Departments</option>
                        <option value="Preschool">Preschool</option>
                        <option value="Primary">Primary</option>
                        <option value="Secondary">Secondary</option>
                        <option value="Junior High School">Junior High School</option>
                    </select>
                </div>
                <div>
                    <label class="block font-semibold text-slate-600 dark:text-slate-400 mb-1">POSITION</label>
                    <input type="text" id="newTeachPos" required placeholder="Subject Teacher / Adviser" class="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg outline-none">
                </div>
            </div>

            <div class="flex justify-end space-x-2 pt-2">
                <button type="button" onclick="closeAddTeacherModal()" class="px-3 py-2 rounded-lg text-xs font-semibold text-slate-500">Cancel</button>
                <button type="submit" class="bg-indigo-900 hover:bg-indigo-950 text-white px-4 py-2 rounded-lg text-xs font-bold">Add Account</button>
            </div>
        </form>
    </div>


    <!-- PRINT TEMPLATE (Hidden on screen, active on print window) -->
    <div id="printTemplate" class="print-only p-8 space-y-6 text-black bg-white">
        <div class="text-center border-b pb-4">
            <div class="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center font-bold text-2xl mx-auto mb-2">S</div>
            <h1 class="text-xs tracking-wider uppercase font-bold" id="printSchoolName">REPUBLIC OF THE PHILIPPINES · DEPARTMENT OF EDUCATION</h1>
            <h2 class="text-base font-bold uppercase mt-2">STUDENT INCIDENT REPORT</h2>
            <div class="flex justify-between items-center text-xs mt-4">
                <span>OFFICE: GUIDANCE OFFICE</span>
                <span class="font-mono font-bold" id="printCaseNo">CASE NO: IR-2026-0002</span>
            </div>
        </div>

        <!-- Section 1 -->
        <div class="space-y-2">
            <h3 class="font-bold border-b text-xs uppercase">I. STUDENT INFORMATION</h3>
            <div class="grid grid-cols-2 gap-4 text-xs">
                <div><strong>STUDENT NAME:</strong> <span id="printStudName"></span></div>
                <div><strong>STUDENT ID:</strong> <span id="printStudId"></span></div>
                <div><strong>DEPARTMENT:</strong> <span id="printStudDept"></span></div>
                <div><strong>GRADE / LEVEL:</strong> <span id="printStudGrade"></span></div>
                <div><strong>REPORTED BY:</strong> <span id="printReportedBy">Heman</span></div>
            </div>
        </div>

        <!-- Section 2 -->
        <div class="space-y-2">
            <h3 class="font-bold border-b text-xs uppercase">II. INCIDENT DETAILS</h3>
            <div class="grid grid-cols-2 gap-4 text-xs">
                <div><strong>DATE OF INCIDENT:</strong> <span id="printIncDate"></span></div>
                <div><strong>TIME:</strong> <span id="printIncTime"></span></div>
                <div><strong>LOCATION:</strong> <span id="printIncLoc"></span></div>
                <div><strong>CATEGORY:</strong> <span id="printIncCat"></span></div>
                <div><strong>SEVERITY:</strong> <span id="printIncSev"></span></div>
                <div><strong>CASE STATUS:</strong> <span id="printIncStatus"></span></div>
            </div>
        </div>

        <!-- Section 3 -->
        <div class="space-y-2">
            <h3 class="font-bold border-b text-xs uppercase">III. INCIDENT DESCRIPTION & REMARKS</h3>
            <div class="text-xs space-y-2">
                <p><strong>NARRATIVE:</strong></p>
                <p id="printIncDesc" class="p-2 border rounded italic"></p>
                <p><strong>ACTION TAKEN:</strong> <span id="printIncAction"></span></p>
                <p><strong>REMARKS:</strong> <span id="printIncRemarks"></span></p>
            </div>
        </div>

        <!-- Section 4 Signatures -->
        <div class="pt-8 space-y-2">
            <h3 class="font-bold border-b text-xs uppercase">IV. ELECTRONIC SIGNATURES</h3>
            <div class="grid grid-cols-3 gap-6 pt-4 text-center text-xs">
                <div class="border-t pt-2">
                    <div id="printSigAdviserImg" class="h-12 flex items-center justify-center"></div>
                    <p class="font-bold">Class Adviser / Teacher</p>
                </div>
                <div class="border-t pt-2">
                    <div id="printSigParentImg" class="h-12 flex items-center justify-center"></div>
                    <p class="font-bold">Parent / Guardian</p>
                </div>
                <div class="border-t pt-2">
                    <div id="printSigPrincipalImg" class="h-12 flex items-center justify-center"></div>
                    <p class="font-bold">School Principal</p>
                </div>
            </div>
        </div>
    </div>


    <!-- APPLICATION JAVASCRIPT LOGIC -->
    <script>
        /* ==========================================================================
           1. DATABASE LAYER (IndexedDB with LocalStorage Fallback)
           ========================================================================== */
        const DB_NAME = 'StudentIncidentDB';
        const DB_VERSION = 1;
        let dbInstance = null;

        // Default Seed Datasets (Matching Video Context)
        const DEFAULT_STUDENTS = [
            { id: '2026-03', name: 'Anaya', dept: 'Secondary', grade: 'Sec1', parentEmail: 'anaya.parent@gmail.com' },
            { id: '2026-2', name: 'Hadassah', dept: 'Primary', grade: '5', parentEmail: 'hadassah.parent@gmail.com' },
            { id: '2026-Junior', name: 'Kayla H', dept: 'Junior High School', grade: 'Grade 11 Courage', parentEmail: 'kayla.parent@gmail.com' },
            { id: '2026-1', name: 'Kenzie', dept: 'Primary', grade: '5 Inspiration', parentEmail: 'siheman2020@gmail.com' },
            { id: '2026-12', name: 'Rie', dept: 'Preschool', grade: 'KG1 Blue', parentEmail: 'siheman2020@gmail.com' }
        ];

        const DEFAULT_CATEGORIES = [
            { name: 'Academic Dishonesty', defaultSeverity: 'High', enabled: true },
            { name: 'Bullying', defaultSeverity: 'High', enabled: true },
            { name: 'Cutting Classes', defaultSeverity: 'Medium', enabled: true },
            { name: 'Disruptive Behavior', defaultSeverity: 'Medium', enabled: true },
            { name: 'Gadget Violation', defaultSeverity: 'Low', enabled: true },
            { name: 'Physical Aggression', defaultSeverity: 'Critical', enabled: true },
            { name: 'Property Damage', defaultSeverity: 'Medium', enabled: true },
            { name: 'Tardiness', defaultSeverity: 'Low', enabled: true },
            { name: 'Uniform Violation', defaultSeverity: 'Low', enabled: true },
            { name: 'Use of Profanity', defaultSeverity: 'Low', enabled: true }
        ];

        const DEFAULT_TEACHERS = [
            { name: 'Andr', dept: 'Primary', pos: "Subject Teacher's", access: 'Active' },
            { name: 'Andrie Veronque', dept: 'All Departments', pos: 'Subject Teacher', access: 'Active' },
            { name: 'Jake', dept: 'Primary', pos: 'English Teacher', access: 'Active' },
            { name: 'Mr. Heman', dept: 'Primary', pos: 'Computer Science Teacher', access: 'Active' }
        ];

        const DEFAULT_INCIDENTS = [
            {
                caseNo: 'IR-2026-0002',
                studentId: '2026-Junior',
                studentName: 'Kayla H',
                dept: 'Junior High School',
                date: '2026-11-04',
                time: '08:22',
                location: 'canteen',
                category: 'Disruptive Behavior',
                severity: 'Low',
                status: 'Open',
                reportedBy: 'Heman',
                description: 'Kayla has been disrupting the classmates while they are eating in the canteen',
                personsInvolved: 'Kayla, Teacher Heman',
                witnesses: 'Mukhil',
                actionTaken: 'Immediate conversation and reflection',
                remarks: 'Need to see the guidance counsellor for behavioural counselling',
                files: [],
                signatures: {
                    adviser: { signer: 'Heman', date: '2026-11-04 02:26 PM', dataUrl: '' },
                    parent: null,
                    principal: { signer: 'Fred', date: '2026-11-04 02:29 PM', dataUrl: '' }
                },
                notifications: [
                    { email: 'siheman2020@gmail.com', date: 'Nov 5, 2026 7:17 AM', status: 'SENT' }
                ]
            },
            {
                caseNo: 'IR-2026-0003',
                studentId: '2026-1',
                studentName: 'Kenzie',
                dept: 'Primary',
                date: '2026-11-04',
                time: '10:15',
                location: 'Classroom',
                category: 'Disruptive Behavior',
                severity: 'Critical',
                status: 'Open',
                reportedBy: 'Heman',
                description: 'Emergency behavior incident in classroom.',
                personsInvolved: 'Kenzie',
                witnesses: 'Classmates',
                actionTaken: 'Escorted to guidance',
                remarks: 'High alert case',
                files: [],
                signatures: { adviser: null, parent: null, principal: null },
                notifications: [
                    { email: 'siheman2020@gmail.com', date: 'Nov 5, 2026 8:13 AM', status: 'SENT' }
                ]
            },
            {
                caseNo: 'IR-2026-0004',
                studentId: '2026-12',
                studentName: 'Rie',
                dept: 'Preschool',
                date: '2026-11-04',
                time: '10:45',
                location: 'Classroom',
                category: 'Disruptive Behavior',
                severity: 'Critical',
                status: 'Open',
                reportedBy: 'Heman',
                description: 'The student is very noisy and disruptive.',
                personsInvolved: 'student',
                witnesses: 'Mr. Heman',
                actionTaken: 'referred to guidance counselor',
                remarks: 'First warning',
                files: [{ name: 'image.jpg', size: '1.8 MB' }],
                signatures: { adviser: { signer: 'mr. heman', date: 'Nov 4, 2026 1:50 AM', dataUrl: '' }, parent: null, principal: null },
                notifications: [
                    { email: 'siheman2020@gmail.com', date: 'Nov 5, 2026 7:17 AM', status: 'SENT' }
                ]
            },
            {
                caseNo: 'IR-2026-0001',
                studentId: '2026-03',
                studentName: 'Anaya',
                dept: 'Secondary',
                date: '2026-11-03',
                time: '14:00',
                location: 'Hallway',
                category: 'Disruptive Behavior',
                severity: 'Medium',
                status: 'Open',
                reportedBy: 'Heman',
                description: 'Minor noise in hallway.',
                personsInvolved: 'Anaya',
                witnesses: 'Staff',
                actionTaken: 'Counseling',
                remarks: 'Monitored',
                files: [],
                signatures: { adviser: null, parent: null, principal: null },
                notifications: []
            }
        ];

        function initDatabase() {
            return new Promise((resolve, reject) => {
                if (!window.indexedDB) {
                    console.warn("IndexedDB not supported, using LocalStorage fallback.");
                    initLocalStorageFallback();
                    return resolve(false);
                }
                const request = indexedDB.open(DB_NAME, DB_VERSION);
                request.onupgradeneeded = (e) => {
                    const db = e.target.result;
                    if (!db.objectStoreNames.contains('students')) db.createObjectStore('students', { keyPath: 'id' });
                    if (!db.objectStoreNames.contains('incidents')) db.createObjectStore('incidents', { keyPath: 'caseNo' });
                    if (!db.objectStoreNames.contains('teachers')) db.createObjectStore('teachers', { autoIncrement: true });
                    if (!db.objectStoreNames.contains('categories')) db.createObjectStore('categories', { keyPath: 'name' });
                    if (!db.objectStoreNames.contains('settings')) db.createObjectStore('settings', { keyPath: 'key' });
                };
                request.onsuccess = (e) => {
                    dbInstance = e.target.result;
                    seedDatabaseIfEmpty().then(resolve);
                };
                request.onerror = () => {
                    initLocalStorageFallback();
                    resolve(false);
                };
            });
        }

        function initLocalStorageFallback() {
            if (!localStorage.getItem('db_students')) localStorage.setItem('db_students', JSON.stringify(DEFAULT_STUDENTS));
            if (!localStorage.getItem('db_incidents')) localStorage.setItem('db_incidents', JSON.stringify(DEFAULT_INCIDENTS));
            if (!localStorage.getItem('db_categories')) localStorage.setItem('db_categories', JSON.stringify(DEFAULT_CATEGORIES));
            if (!localStorage.getItem('db_teachers')) localStorage.setItem('db_teachers', JSON.stringify(DEFAULT_TEACHERS));
        }

        async function seedDatabaseIfEmpty() {
            const count = await dbCount('incidents');
            if (count === 0) {
                for (let s of DEFAULT_STUDENTS) await dbPut('students', s);
                for (let c of DEFAULT_CATEGORIES) await dbPut('categories', c);
                for (let t of DEFAULT_TEACHERS) await dbPut('teachers', t);
                for (let i of DEFAULT_INCIDENTS) await dbPut('incidents', i);
            }
        }

        function dbCount(storeName) {
            return new Promise((resolve) => {
                if (!dbInstance) return resolve(JSON.parse(localStorage.getItem('db_' + storeName) || '[]').length);
                const tx = dbInstance.transaction(storeName, 'readonly');
                const req = tx.objectStore(storeName).count();
                req.onsuccess = () => resolve(req.result);
                req.onerror = () => resolve(0);
            });
        }

        function dbGetAll(storeName) {
            return new Promise((resolve) => {
                if (!dbInstance) return resolve(JSON.parse(localStorage.getItem('db_' + storeName) || '[]'));
                const tx = dbInstance.transaction(storeName, 'readonly');
                const req = tx.objectStore(storeName).getAll();
                req.onsuccess = () => resolve(req.result || []);
                req.onerror = () => resolve([]);
            });
        }

        function dbPut(storeName, item) {
            return new Promise((resolve) => {
                if (!dbInstance) {
                    let list = JSON.parse(localStorage.getItem('db_' + storeName) || '[]');
                    const keyProp = storeName === 'students' ? 'id' : storeName === 'incidents' ? 'caseNo' : storeName === 'categories' ? 'name' : null;
                    if (keyProp) {
                        list = list.filter(x => x[keyProp] !== item[keyProp]);
                    }
                    list.push(item);
                    localStorage.setItem('db_' + storeName, JSON.stringify(list));
                    return resolve(true);
                }
                const tx = dbInstance.transaction(storeName, 'readwrite');
                const req = tx.objectStore(storeName).put(item);
                req.onsuccess = () => resolve(true);
                req.onerror = () => resolve(false);
            });
        }

        function dbDelete(storeName, key) {
            return new Promise((resolve) => {
                if (!dbInstance) {
                    let list = JSON.parse(localStorage.getItem('db_' + storeName) || '[]');
                    const keyProp = storeName === 'students' ? 'id' : storeName === 'incidents' ? 'caseNo' : storeName === 'categories' ? 'name' : null;
                    if (keyProp) {
                        list = list.filter(x => x[keyProp] !== key);
                        localStorage.setItem('db_' + storeName, JSON.stringify(list));
                    }
                    return resolve(true);
                }
                const tx = dbInstance.transaction(storeName, 'readwrite');
                const req = tx.objectStore(storeName).delete(key);
                req.onsuccess = () => resolve(true);
                req.onerror = () => resolve(false);
            });
        }


        /* ==========================================================================
           2. STATE & GLOBAL VARIABLES
           ========================================================================== */
        let currentDeptFilter = 'All';
        let currentAnalyticsDeptFilter = 'All';
        let activeSignatureRole = null;
        let formAttachedFiles = [];
        let activeSignatures = { adviser: null, parent: null, principal: null };
        let activeCaseDetail = null;
        let trendChartInstance = null;
        let severityChartInstance = null;
        let categoryChartInstance = null;
        let anCategoryChartInstance = null;
        let anSeverityChartInstance = null;


        /* ==========================================================================
           3. APPLICATION INITIALIZATION & NAVIGATION
           ========================================================================== */
        window.onload = async function() {
            await initDatabase();
            loadCategoriesIntoDropdowns();
            renderDashboard();
            setupSignatureCanvas();

            // Mobile menu toggle
            document.getElementById('mobileMenuBtn').addEventListener('click', () => {
                document.getElementById('navMenu').classList.toggle('hidden');
            });
        };

        function switchView(viewId) {
            document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
            const target = document.getElementById(`view-${viewId}`);
            if (target) target.classList.remove('hidden');

            document.querySelectorAll('.nav-btn').forEach(btn => {
                if (btn.dataset.nav === viewId) {
                    btn.classList.add('bg-slate-800', 'text-white');
                    btn.classList.remove('text-slate-300');
                } else {
                    btn.classList.remove('bg-slate-800', 'text-white');
                    btn.classList.add('text-slate-300');
                }
            });

            // Trigger view specific logic
            if (viewId === 'dashboard') renderDashboard();
            if (viewId === 'record-incident') prepareRecordForm();
            if (viewId === 'incident-records') renderIncidentRecords();
            if (viewId === 'students') renderStudentDirectory();
            if (viewId === 'reports') renderAnalyticsView();
            if (viewId === 'user-management') renderUserManagement();
            if (viewId === 'settings') renderSettingsView();
        }

        function toggleTheme() {
            document.documentElement.classList.toggle('dark');
        }

        function setTheme(theme) {
            if (theme === 'dark') document.documentElement.classList.add('dark');
            else document.documentElement.classList.remove('dark');
        }


        /* ==========================================================================
           4. DASHBOARD VIEW LOGIC
           ========================================================================== */
        async function renderDashboard() {
            const allIncidents = await dbGetAll('incidents');
            const allStudents = await dbGetAll('students');

            const filtered = currentDeptFilter === 'All' 
                ? allIncidents 
                : allIncidents.filter(i => i.dept === currentDeptFilter);

            // Metric Counters
            const filteredStudents = currentDeptFilter === 'All' ? allStudents : allStudents.filter(s => s.dept === currentDeptFilter);
            document.getElementById('statStudents').textContent = filteredStudents.length;
            document.getElementById('statTotal').textContent = filtered.length;
            document.getElementById('statOpen').textContent = filtered.filter(i => i.status === 'Open').length;
            document.getElementById('statInvestigation').textContent = filtered.filter(i => i.status === 'Under Investigation').length;
            document.getElementById('statResolved').textContent = filtered.filter(i => i.status === 'Resolved').length;
            document.getElementById('statClosed').textContent = filtered.filter(i => i.status === 'Closed').length;

            // High Alert Emergency Banner
            const criticalCases = filtered.filter(i => i.severity === 'Critical');
            document.getElementById('highAlertBadgeCount').textContent = `${criticalCases.length} TO NOTIFY`;
            const alertListContainer = document.getElementById('highAlertList');
            alertListContainer.innerHTML = '';
            if (criticalCases.length === 0) {
                alertListContainer.innerHTML = `<p class="text-xs text-slate-400 italic">No high-alert emergency incidents currently.</p>`;
            } else {
                criticalCases.forEach(c => {
                    alertListContainer.innerHTML += `
                        <div class="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-100 dark:border-slate-700">
                            <div>
                                <div class="flex items-center space-x-2">
                                    <span class="font-mono text-xs font-bold text-slate-700 dark:text-slate-300">${c.caseNo}</span>
                                    <span class="font-bold text-xs text-slate-900 dark:text-white">${c.studentName}</span>
                                </div>
                                <p class="text-[11px] text-slate-400">${c.category} · ${c.date} · ${c.dept}</p>
                            </div>
                            <div class="flex items-center space-x-3">
                                <span class="px-2 py-0.5 rounded bg-rose-100 text-rose-700 font-bold text-[10px]">CRITICAL</span>
                                <span class="text-[10px] text-emerald-600 font-semibold flex items-center space-x-1">
                                    <i class="fa-solid fa-circle-check"></i>
                                    <span>Parents notified</span>
                                </span>
                                <button onclick="openCaseDetail('${c.caseNo}')" class="text-slate-400 hover:text-slate-700">
                                    <i class="fa-solid fa-arrow-right text-xs"></i>
                                </button>
                            </div>
                        </div>
                    `;
                });
            }

            // Recent Incident Reports List
            const recentContainer = document.getElementById('recentReportsList');
            recentContainer.innerHTML = '';
            const recentCases = [...filtered].reverse().slice(0, 5);
            recentCases.forEach(c => {
                const sevBadge = c.severity === 'Critical' ? 'bg-rose-100 text-rose-700' : c.severity === 'High' ? 'bg-orange-100 text-orange-700' : c.severity === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700';
                recentContainer.innerHTML += `
                    <div onclick="openCaseDetail('${c.caseNo}')" class="p-3 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-100 dark:border-slate-700 flex items-center justify-between cursor-pointer hover:border-indigo-300 transition-all">
                        <div>
                            <div class="flex items-center space-x-2">
                                <span class="font-mono text-[11px] text-slate-400">${c.caseNo}</span>
                                <span class="font-bold text-xs text-slate-800 dark:text-slate-200">${c.studentName}</span>
                            </div>
                            <p class="text-[11px] text-slate-400">${c.category} · ${c.date} · ${c.dept}</p>
                        </div>
                        <div class="flex items-center space-x-2">
                            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${sevBadge}">${c.severity.toUpperCase()}</span>
                        </div>
                    </div>
                `;
            });

            // Render Dashboard Charts
            renderDashboardCharts(filtered);
        }

        function filterDashboardDept(dept) {
            currentDeptFilter = dept;
            document.querySelectorAll('.dash-dept-btn').forEach(btn => {
                if (btn.textContent.trim() === (dept === 'All' ? 'All departments' : dept)) {
                    btn.className = "dash-dept-btn border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-semibold px-4 py-2 text-xs whitespace-nowrap";
                } else {
                    btn.className = "dash-dept-btn border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium px-4 py-2 text-xs whitespace-nowrap";
                }
            });
            renderDashboard();
        }

        function renderDashboardCharts(cases) {
            // Trend Line Chart
            const ctxTrend = document.getElementById('dashTrendChart').getContext('2d');
            if (trendChartInstance) trendChartInstance.destroy();
            
            trendChartInstance = new Chart(ctxTrend, {
                type: 'line',
                data: {
                    labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
                    datasets: [{
                        label: 'Incidents',
                        data: [0, 0, 0, 0, 0, cases.length],
                        borderColor: '#4f46e5',
                        backgroundColor: 'rgba(79, 70, 229, 0.1)',
                        fill: true,
                        tension: 0.3
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { beginAtZero: true, ticks: { precision: 0 } }
                    }
                }
            });

            // Severity Donut Chart
            const ctxSeverity = document.getElementById('dashSeverityChart').getContext('2d');
            if (severityChartInstance) severityChartInstance.destroy();

            const counts = {
                Low: cases.filter(c => c.severity === 'Low').length,
                Medium: cases.filter(c => c.severity === 'Medium').length,
                High: cases.filter(c => c.severity === 'High').length,
                Critical: cases.filter(c => c.severity === 'Critical').length,
            };

            severityChartInstance = new Chart(ctxSeverity, {
                type: 'doughnut',
                data: {
                    labels: ['Low', 'Medium', 'High', 'Critical'],
                    datasets: [{
                        data: [counts.Low, counts.Medium, counts.High, counts.Critical],
                        backgroundColor: ['#10b981', '#f59e0b', '#f97316', '#ef4444']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } }
                }
            });

            const total = cases.length || 1;
            document.getElementById('severityLegend').innerHTML = `
                <div class="flex items-center justify-between"><span class="flex items-center"><span class="w-2.5 h-2.5 rounded-full bg-emerald-500 mr-2"></span>Low</span> <span class="font-bold">${counts.Low} (${Math.round(counts.Low/total*100)}%)</span></div>
                <div class="flex items-center justify-between"><span class="flex items-center"><span class="w-2.5 h-2.5 rounded-full bg-amber-500 mr-2"></span>Medium</span> <span class="font-bold">${counts.Medium} (${Math.round(counts.Medium/total*100)}%)</span></div>
                <div class="flex items-center justify-between"><span class="flex items-center"><span class="w-2.5 h-2.5 rounded-full bg-orange-500 mr-2"></span>High</span> <span class="font-bold">${counts.High} (${Math.round(counts.High/total*100)}%)</span></div>
                <div class="flex items-center justify-between"><span class="flex items-center"><span class="w-2.5 h-2.5 rounded-full bg-rose-500 mr-2"></span>Critical</span> <span class="font-bold">${counts.Critical} (${Math.round(counts.Critical/total*100)}%)</span></div>
            `;

            // Category Bar Chart
            const ctxCat = document.getElementById('dashCategoryChart').getContext('2d');
            if (categoryChartInstance) categoryChartInstance.destroy();

            const catCounts = {};
            cases.forEach(c => catCounts[c.category] = (catCounts[c.category] || 0) + 1);

            categoryChartInstance = new Chart(ctxCat, {
                type: 'bar',
                data: {
                    labels: Object.keys(catCounts).length ? Object.keys(catCounts) : ['Disruptive Behavior'],
                    datasets: [{
                        data: Object.values(catCounts).length ? Object.values(catCounts) : [cases.length],
                        backgroundColor: '#6366f1',
                        borderRadius: 6
                    }]
                },
                options: {
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: { x: { beginAtZero: true, ticks: { precision: 0 } } }
                }
            });
        }


        /* ==========================================================================
           5. RECORD AN INCIDENT FORM LOGIC
           ========================================================================== */
        async function prepareRecordForm() {
            formAttachedFiles = [];
            activeSignatures = { adviser: null, parent: null, principal: null };
            document.getElementById('recordIncidentForm').reset();
            document.getElementById('incDate').value = new Date().toISOString().split('T')[0];
            document.getElementById('incTime').value = new Date().toTimeString().split(' ')[0].substring(0, 5);
            renderStudentSelector();
            updateFormSummary();
            resetSignaturePreviews();
        }

        async function renderStudentSelector() {
            const students = await dbGetAll('students');
            const container = document.getElementById('studentSelectList');
            container.innerHTML = '';
            students.forEach(s => {
                container.innerHTML += `
                    <div onclick="selectStudentForIncident('${s.id}', '${s.name}')" class="stud-select-item p-2.5 rounded-lg border border-slate-100 dark:border-slate-700/60 hover:bg-indigo-50 dark:hover:bg-slate-700 flex items-center justify-between cursor-pointer transition-all">
                        <div>
                            <p class="font-bold text-xs text-slate-800 dark:text-slate-200">${s.name}</p>
                            <p class="text-[10px] text-slate-400">${s.id} · ${s.dept}</p>
                        </div>
                        <span class="text-[10px] bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded">${s.grade}</span>
                    </div>
                `;
            });
        }

        function filterStudentSelector() {
            const query = document.getElementById('studentSearchInput').value.toLowerCase();
            document.querySelectorAll('.stud-select-item').forEach(item => {
                const text = item.innerText.toLowerCase();
                item.style.display = text.includes(query) ? 'flex' : 'none';
            });
        }

        async function selectStudentForIncident(studId, studName) {
            document.getElementById('selectedStudentId').value = studId;
            document.getElementById('sumStudentName').textContent = studName;
            document.querySelectorAll('.stud-select-item').forEach(item => {
                item.classList.remove('border-indigo-500', 'bg-indigo-50/50');
            });
            event.currentTarget.classList.add('border-indigo-500', 'bg-indigo-50/50');
        }

        async function loadCategoriesIntoDropdowns() {
            const categories = await dbGetAll('categories');
            const selectRecord = document.getElementById('incCategory');
            const selectFilter = document.getElementById('recCategoryFilter');
            
            selectRecord.innerHTML = '';
            selectFilter.innerHTML = '<option value="All">All categories</option>';

            categories.forEach(c => {
                if (c.enabled) {
                    selectRecord.innerHTML += `<option value="${c.name}">${c.name}</option>`;
                    selectFilter.innerHTML += `<option value="${c.name}">${c.name}</option>`;
                }
            });
        }

        function updateFormSummary() {
            const category = document.getElementById('incCategory').value || '—';
            const severity = document.getElementById('incSeverity').value || 'Low';
            document.getElementById('sumCategory').textContent = category;
            document.getElementById('sumSeverity').textContent = severity;
            document.getElementById('sumDocuments').textContent = formAttachedFiles.length;

            let sigCount = 0;
            if (activeSignatures.adviser) sigCount++;
            if (activeSignatures.parent) sigCount++;
            if (activeSignatures.principal) sigCount++;
            document.getElementById('sumSignatures').textContent = `${sigCount} of 3`;
        }

        function handleFileUpload(e) {
            const files = Array.from(e.target.files);
            files.forEach(f => {
                formAttachedFiles.push({ name: f.name, size: (f.size / (1024*1024)).toFixed(1) + ' MB' });
            });
            renderAttachedFilesList();
            updateFormSummary();
        }

        function renderAttachedFilesList() {
            const container = document.getElementById('attachedFilesList');
            container.innerHTML = '';
            formAttachedFiles.forEach((file, index) => {
                container.innerHTML += `
                    <div class="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs">
                        <div class="flex items-center space-x-2">
                            <i class="fa-solid fa-file-pdf text-indigo-500"></i>
                            <span class="font-medium text-slate-700 dark:text-slate-300">${file.name}</span>
                            <span class="text-[10px] text-slate-400">(${file.size})</span>
                        </div>
                        <button type="button" onclick="removeAttachedFile(${index})" class="text-rose-500 hover:text-rose-700">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                `;
            });
        }

        function removeAttachedFile(index) {
            formAttachedFiles.splice(index, 1);
            renderAttachedFilesList();
            updateFormSummary();
        }

        async function handleIncidentSubmit(e) {
            e.preventDefault();
            const studId = document.getElementById('selectedStudentId').value;
            if (!studId) {
                alert('Please select a student first.');
                return;
            }

            const allStudents = await dbGetAll('students');
            const student = allStudents.find(s => s.id === studId);
            const allIncidents = await dbGetAll('incidents');
            const nextNo = `IR-2026-000${allIncidents.length + 1}`;

            const newCase = {
                caseNo: nextNo,
                studentId: studId,
                studentName: student.name,
                dept: student.dept,
                date: document.getElementById('incDate').value,
                time: document.getElementById('incTime').value,
                location: document.getElementById('incLocation').value,
                category: document.getElementById('incCategory').value,
                severity: document.getElementById('incSeverity').value,
                status: document.getElementById('incStatus').value,
                reportedBy: 'Heman',
                description: document.getElementById('incDescription').value,
                personsInvolved: document.getElementById('incPersons').value || 'N/A',
                witnesses: document.getElementById('incWitnesses').value || 'N/A',
                actionTaken: document.getElementById('incActionTaken').value || 'N/A',
                remarks: document.getElementById('incRemarks').value || 'N/A',
                files: formAttachedFiles,
                signatures: { ...activeSignatures },
                notifications: newCaseSeverityNotification(document.getElementById('incSeverity').value, student.parentEmail)
            };

            await dbPut('incidents', newCase);
            switchView('incident-records');
        }

        function newCaseSeverityNotification(severity, email) {
            if (severity === 'Critical' || severity === 'High') {
                return [{ email: email, date: new Date().toLocaleString(), status: 'SENT' }];
            }
            return [];
        }


        /* ==========================================================================
           6. DIGITAL SIGNATURE CANVAS MODAL LOGIC
           ========================================================================== */
        let sigCanvasCtx = null;
        let isDrawing = false;
        let hasDrawnSignature = false;

        function setupSignatureCanvas() {
            const canvas = document.getElementById('sigCanvas');
            if (!canvas) return;

            sigCanvasCtx = canvas.getContext('2d');

            // Mouse Event Listeners
            canvas.addEventListener('mousedown', startDrawing);
            canvas.addEventListener('mousemove', draw);
            canvas.addEventListener('mouseup', stopDrawing);
            canvas.addEventListener('mouseleave', stopDrawing);

            // Touch Event Listeners with { passive: false } to prevent background scroll
            canvas.addEventListener('touchstart', (e) => {
                e.preventDefault();
                const touch = e.touches[0];
                startDrawing(touch);
            }, { passive: false });

            canvas.addEventListener('touchmove', (e) => {
                e.preventDefault();
                const touch = e.touches[0];
                draw(touch);
            }, { passive: false });

            canvas.addEventListener('touchend', (e) => {
                e.preventDefault();
                stopDrawing();
            }, { passive: false });
        }

        function resizeSignatureCanvas() {
            const canvas = document.getElementById('sigCanvas');
            const container = document.getElementById('canvasContainer');
            if (!canvas || !container) return;

            const rect = container.getBoundingClientRect();
            // Assign actual pixel width and height matching display size
            canvas.width = rect.width || 380;
            canvas.height = 160;

            if (sigCanvasCtx) {
                sigCanvasCtx.lineWidth = 2.5;
                sigCanvasCtx.lineCap = 'round';
                sigCanvasCtx.lineJoin = 'round';
                sigCanvasCtx.strokeStyle = '#1e1b4b'; // Dark indigo signature ink
            }
        }

        function getCanvasCoordinates(e) {
            const canvas = document.getElementById('sigCanvas');
            const rect = canvas.getBoundingClientRect();
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;

            return {
                x: (e.clientX - rect.left) * scaleX,
                y: (e.clientY - rect.top) * scaleY
            };
        }

        function startDrawing(e) {
            isDrawing = true;
            hasDrawnSignature = true;
            const coords = getCanvasCoordinates(e);
            sigCanvasCtx.beginPath();
            sigCanvasCtx.moveTo(coords.x, coords.y);
        }

        function draw(e) {
            if (!isDrawing) return;
            const coords = getCanvasCoordinates(e);
            sigCanvasCtx.lineTo(coords.x, coords.y);
            sigCanvasCtx.stroke();
        }

        function stopDrawing() {
            if (isDrawing) {
                sigCanvasCtx.closePath();
                isDrawing = false;
            }
        }

        function clearSignatureCanvas() {
            const canvas = document.getElementById('sigCanvas');
            if (!canvas || !sigCanvasCtx) return;
            sigCanvasCtx.clearRect(0, 0, canvas.width, canvas.height);
            hasDrawnSignature = false;
        }

        function openSignatureModal(role) {
            activeSignatureRole = role;
            document.getElementById('sigModalTitle').textContent = `Draw Electronic Signature (${role.toUpperCase()})`;
            document.getElementById('sigSignerNameInput').value = activeSignatures[role] ? activeSignatures[role].signer : '';
            
            const modal = document.getElementById('signatureModal');
            modal.classList.remove('hidden');

            // Force canvas resize after element becomes visible
            setTimeout(() => {
                resizeSignatureCanvas();
                clearSignatureCanvas();
                if (activeSignatures[role] && activeSignatures[role].dataUrl) {
                    const img = new Image();
                    img.onload = () => {
                        sigCanvasCtx.drawImage(img, 0, 0);
                        hasDrawnSignature = true;
                    };
                    img.src = activeSignatures[role].dataUrl;
                }
            }, 50);
        }

        function closeSignatureModal() {
            stopDrawing();
            document.getElementById('signatureModal').classList.add('hidden');
        }

        function saveSignatureModal() {
            const canvas = document.getElementById('sigCanvas');
            const signerName = document.getElementById('sigSignerNameInput').value.trim() || 'Heman';

            if (!hasDrawnSignature) {
                alert('Please draw your signature in the box before saving.');
                return;
            }

            const dataUrl = canvas.toDataURL('image/png');

            activeSignatures[activeSignatureRole] = {
                signer: signerName,
                date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                dataUrl: dataUrl
            };

            // Update Form Cards, Status Badges & Previews
            const roleCap = capitalize(activeSignatureRole);
            const badge = document.getElementById(`badgeSig${roleCap}`);
            const text = document.getElementById(`sig${roleCap}StatusText`);
            const prev = document.getElementById(`sigPreview${roleCap}`);

            if (badge) {
                badge.className = "text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300";
                badge.textContent = "Signed";
            }
            if (text) text.textContent = `Signed by ${signerName}`;
            if (prev) prev.innerHTML = `<img src="${dataUrl}" class="max-h-14 max-w-full object-contain mx-auto" />`;

            closeSignatureModal();
            updateFormSummary();
        }

        function resetSignaturePreviews() {
            ['Adviser', 'Parent', 'Principal'].forEach(role => {
                const badge = document.getElementById(`badgeSig${role}`);
                const text = document.getElementById(`sig${role}StatusText`);
                const prev = document.getElementById(`sigPreview${role}`);
                if (badge) {
                    badge.className = "text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300";
                    badge.textContent = "Pending";
                }
                if (text) text.textContent = "Awaiting signature";
                if (prev) prev.innerHTML = `<span class="text-[11px] text-slate-400">No signature</span>`;
            });
        }

        function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }


        /* ==========================================================================
           7. INCIDENT RECORDS TABLE & FILTER ENGINE
           ========================================================================== */
        async function renderIncidentRecords() {
            applyIncidentFilters();
        }

        async function applyIncidentFilters() {
            const allIncidents = await dbGetAll('incidents');
            const search = document.getElementById('recSearchInput').value.toLowerCase();
            const dept = document.getElementById('recDeptFilter').value;
            const category = document.getElementById('recCategoryFilter').value;
            const severity = document.getElementById('recSeverityFilter').value;
            const status = document.getElementById('recStatusFilter').value;

            const filtered = allIncidents.filter(i => {
                const matchSearch = i.studentName.toLowerCase().includes(search) || i.caseNo.toLowerCase().includes(search);
                const matchDept = dept === 'All' || i.dept === dept;
                const matchCat = category === 'All' || i.category === category;
                const matchSev = severity === 'All' || i.severity === severity;
                const matchStat = status === 'All' || i.status === status;
                return matchSearch && matchDept && matchCat && matchSev && matchStat;
            });

            document.getElementById('recordCountLabel').textContent = `${filtered.length} cases shown`;

            const tbody = document.getElementById('incidentRecordsTableBody');
            tbody.innerHTML = '';
            filtered.forEach(i => {
                const sevBadge = i.severity === 'Critical' 
                    ? '<span class="px-2 py-0.5 rounded-md bg-rose-100 text-rose-700 font-bold text-[10px] uppercase">CRITICAL <span class="bg-rose-600 text-white px-1 rounded text-[9px]">HIGH ALERT</span></span>'
                    : i.severity === 'High' ? '<span class="px-2 py-0.5 rounded-md bg-orange-100 text-orange-700 font-bold text-[10px] uppercase">HIGH</span>'
                    : i.severity === 'Medium' ? '<span class="px-2 py-0.5 rounded-md bg-amber-100 text-amber-700 font-bold text-[10px] uppercase">MEDIUM</span>'
                    : '<span class="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-700 font-bold text-[10px] uppercase">LOW</span>';

                const statBadge = `<span class="px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 border border-amber-200 text-[10px] font-semibold">● ${i.status}</span>`;

                tbody.innerHTML += `
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all">
                        <td class="py-3 px-4 font-mono font-bold text-indigo-600 dark:text-indigo-400 cursor-pointer" onclick="openCaseDetail('${i.caseNo}')">${i.caseNo}</td>
                        <td class="py-3 px-4 font-bold text-slate-800 dark:text-slate-200">${i.studentName}</td>
                        <td class="py-3 px-4 text-slate-500">${i.dept}</td>
                        <td class="py-3 px-4 text-slate-500">${i.date}</td>
                        <td class="py-3 px-4 text-slate-500">${i.category}</td>
                        <td class="py-3 px-4">${sevBadge}</td>
                        <td class="py-3 px-4">${statBadge}</td>
                        <td class="py-3 px-4 text-slate-500">${i.reportedBy}</td>
                        <td class="py-3 px-4 text-right space-x-2">
                            <button onclick="openCaseDetail('${i.caseNo}')" class="p-1 text-slate-400 hover:text-indigo-600"><i class="fa-solid fa-eye"></i></button>
                            <button onclick="deleteCaseRecord('${i.caseNo}')" class="p-1 text-slate-400 hover:text-rose-600"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                `;
            });
        }

        function resetIncidentFilters() {
            document.getElementById('recSearchInput').value = '';
            document.getElementById('recDeptFilter').value = 'All';
            document.getElementById('recCategoryFilter').value = 'All';
            document.getElementById('recSeverityFilter').value = 'All';
            document.getElementById('recStatusFilter').value = 'All';
            applyIncidentFilters();
        }

        async function deleteCaseRecord(caseNo) {
            if (confirm(`Are you sure you want to delete case ${caseNo}?`)) {
                await dbDelete('incidents', caseNo);
                renderIncidentRecords();
            }
        }


        /* ==========================================================================
           8. CASE DETAIL & PRINTABLE REPORT MODAL LOGIC
           ========================================================================== */
        async function openCaseDetail(caseNo) {
            const allIncidents = await dbGetAll('incidents');
            activeCaseDetail = allIncidents.find(i => i.caseNo === caseNo);
            if (!activeCaseDetail) return;

            document.getElementById('cdCaseNo').textContent = `CASE ${activeCaseDetail.caseNo}`;
            document.getElementById('cdStudentName').textContent = activeCaseDetail.studentName;
            document.getElementById('cdCategoryMeta').textContent = `${activeCaseDetail.category} · ${activeCaseDetail.date} by ${activeCaseDetail.reportedBy}`;
            document.getElementById('cdDescription').textContent = activeCaseDetail.description;
            document.getElementById('cdPersons').textContent = activeCaseDetail.personsInvolved;
            document.getElementById('cdWitnesses').textContent = activeCaseDetail.witnesses;
            document.getElementById('cdActionTaken').textContent = activeCaseDetail.actionTaken;
            document.getElementById('cdRemarks').textContent = activeCaseDetail.remarks;

            // Badges
            document.getElementById('cdSeverityBadge').textContent = activeCaseDetail.severity;
            document.getElementById('cdStatusBadge').textContent = activeCaseDetail.status;

            // Notification log
            const notifBox = document.getElementById('cdNotificationHistory');
            notifBox.innerHTML = '';
            if (!activeCaseDetail.notifications || activeCaseDetail.notifications.length === 0) {
                notifBox.innerHTML = '<p class="italic text-slate-400">No parent email notifications sent yet.</p>';
            } else {
                activeCaseDetail.notifications.forEach(n => {
                    notifBox.innerHTML += `<p>✓ Email sent to <strong class="text-slate-700 dark:text-slate-200">${n.email}</strong> on ${n.date}</p>`;
                });
            }

            // Signatures Grid
            const sigGrid = document.getElementById('cdSignaturesGrid');
            sigGrid.innerHTML = '';
            ['adviser', 'parent', 'principal'].forEach(role => {
                const sigObj = activeCaseDetail.signatures[role];
                const label = role === 'adviser' ? 'Class Adviser' : role === 'parent' ? 'Parent / Guardian' : 'School Principal';
                sigGrid.innerHTML += `
                    <div class="border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-center space-y-2">
                        <span class="text-[10px] font-bold text-slate-400 uppercase">${label}</span>
                        ${sigObj ? `<div class="h-10 flex items-center justify-center"><img src="${sigObj.dataUrl}" class="max-h-10"/></div><p class="text-[10px] text-emerald-600 font-semibold">✓ Signed by ${sigObj.signer}</p>` : `<div class="h-10 flex items-center justify-center text-slate-300 text-[10px] italic">Awaiting signature</div>`}
                    </div>
                `;
            });

            document.getElementById('caseDetailModal').classList.remove('hidden');
        }

        function closeCaseDetailModal() {
            document.getElementById('caseDetailModal').classList.add('hidden');
        }

        async function resendParentEmail() {
            if (!activeCaseDetail) return;
            const students = await dbGetAll('students');
            const stud = students.find(s => s.id === activeCaseDetail.studentId);
            const email = stud ? stud.parentEmail : 'siheman2020@gmail.com';

            if (!activeCaseDetail.notifications) activeCaseDetail.notifications = [];
            activeCaseDetail.notifications.push({ email: email, date: new Date().toLocaleString(), status: 'SENT' });
            
            await dbPut('incidents', activeCaseDetail);
            openCaseDetail(activeCaseDetail.caseNo);
        }

        async function printCaseDetailReport() {
            if (!activeCaseDetail) return;
            const students = await dbGetAll('students');
            const stud = students.find(s => s.id === activeCaseDetail.studentId) || { grade: 'N/A' };

            document.getElementById('printCaseNo').textContent = `CASE NO: ${activeCaseDetail.caseNo}`;
            document.getElementById('printStudName').textContent = activeCaseDetail.studentName;
            document.getElementById('printStudId').textContent = activeCaseDetail.studentId;
            document.getElementById('printStudDept').textContent = activeCaseDetail.dept;
            document.getElementById('printStudGrade').textContent = stud.grade;
            document.getElementById('printIncDate').textContent = activeCaseDetail.date;
            document.getElementById('printIncTime').textContent = activeCaseDetail.time;
            document.getElementById('printIncLoc').textContent = activeCaseDetail.location;
            document.getElementById('printIncCat').textContent = activeCaseDetail.category;
            document.getElementById('printIncSev').textContent = activeCaseDetail.severity;
            document.getElementById('printIncStatus').textContent = activeCaseDetail.status;
            document.getElementById('printIncDesc').textContent = activeCaseDetail.description;
            document.getElementById('printIncAction').textContent = activeCaseDetail.actionTaken;
            document.getElementById('printIncRemarks').textContent = activeCaseDetail.remarks;

            // Render Print Signatures
            ['adviser', 'parent', 'principal'].forEach(role => {
                const sigObj = activeCaseDetail.signatures[role];
                const container = document.getElementById(`printSig${capitalize(role)}Img`);
                if (sigObj && sigObj.dataUrl) {
                    container.innerHTML = `<img src="${sigObj.dataUrl}" class="max-h-12 mx-auto"/>`;
                } else {
                    container.innerHTML = `<span class="text-gray-400 italic">(Pending)</span>`;
                }
            });

            window.print();
        }


        /* ==========================================================================
           9. STUDENTS DIRECTORY LOGIC
           ========================================================================== */
        async function renderStudentDirectory() {
            const students = await dbGetAll('students');
            const incidents = await dbGetAll('incidents');
            const query = document.getElementById('studentDirSearch').value.toLowerCase();

            const tbody = document.getElementById('studentDirectoryTableBody');
            tbody.innerHTML = '';

            students.filter(s => s.name.toLowerCase().includes(query) || s.id.toLowerCase().includes(query)).forEach(s => {
                const count = incidents.filter(i => i.studentId === s.id).length;
                tbody.innerHTML += `
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all">
                        <td class="py-3 px-4 font-bold text-slate-800 dark:text-slate-200">${s.name}</td>
                        <td class="py-3 px-4 font-mono text-slate-500">${s.id}</td>
                        <td class="py-3 px-4 text-slate-500">${s.dept}</td>
                        <td class="py-3 px-4 text-slate-500">${s.grade}</td>
                        <td class="py-3 px-4 text-slate-500">${s.parentEmail}</td>
                        <td class="py-3 px-4 text-center font-bold text-indigo-600">${count}</td>
                        <td class="py-3 px-4 text-right">
                            <button onclick="deleteStudent('${s.id}')" class="text-rose-500 hover:text-rose-700"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                `;
            });
        }

        function openAddStudentModal() { document.getElementById('addStudentModal').classList.remove('hidden'); }
        function closeAddStudentModal() { document.getElementById('addStudentModal').classList.add('hidden'); }

        async function saveNewStudent(e) {
            e.preventDefault();
            const newStud = {
                id: document.getElementById('newStudId').value,
                name: document.getElementById('newStudName').value,
                dept: document.getElementById('newStudDept').value,
                grade: document.getElementById('newStudGrade').value,
                parentEmail: document.getElementById('newStudEmail').value
            };
            await dbPut('students', newStud);
            closeAddStudentModal();
            renderStudentDirectory();
        }

        async function deleteStudent(id) {
            if (confirm(`Remove student record ${id}?`)) {
                await dbDelete('students', id);
                renderStudentDirectory();
            }
        }


        /* ==========================================================================
           10. REPORTS & ANALYTICS VIEW LOGIC & CSV EXPORT
           ========================================================================== */
        async function renderAnalyticsView() {
            const incidents = await dbGetAll('incidents');
            const filtered = currentAnalyticsDeptFilter === 'All' ? incidents : incidents.filter(i => i.dept === currentAnalyticsDeptFilter);

            document.getElementById('anTotal').textContent = filtered.length;
            document.getElementById('anOpen').textContent = filtered.filter(i => i.status === 'Open').length;
            document.getElementById('anInvest').textContent = filtered.filter(i => i.status === 'Under Investigation').length;
            document.getElementById('anResolved').textContent = filtered.filter(i => i.status === 'Resolved').length;
            document.getElementById('anClosed').textContent = filtered.filter(i => i.status === 'Closed').length;

            // Analytics Category Bar Chart
            const ctxCat = document.getElementById('anCategoryChart').getContext('2d');
            if (anCategoryChartInstance) anCategoryChartInstance.destroy();

            const catCounts = {};
            filtered.forEach(c => catCounts[c.category] = (catCounts[c.category] || 0) + 1);

            anCategoryChartInstance = new Chart(ctxCat, {
                type: 'bar',
                data: {
                    labels: Object.keys(catCounts).length ? Object.keys(catCounts) : ['No Data'],
                    datasets: [{
                        data: Object.values(catCounts).length ? Object.values(catCounts) : [0],
                        backgroundColor: '#4f46e5',
                        borderRadius: 6
                    }]
                },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
            });

            // Analytics Severity Donut
            const ctxSev = document.getElementById('anSeverityChart').getContext('2d');
            if (anSeverityChartInstance) anSeverityChartInstance.destroy();

            const counts = {
                Low: filtered.filter(c => c.severity === 'Low').length,
                Medium: filtered.filter(c => c.severity === 'Medium').length,
                High: filtered.filter(c => c.severity === 'High').length,
                Critical: filtered.filter(c => c.severity === 'Critical').length,
            };

            anSeverityChartInstance = new Chart(ctxSev, {
                type: 'doughnut',
                data: {
                    labels: ['Low', 'Medium', 'High', 'Critical'],
                    datasets: [{
                        data: [counts.Low, counts.Medium, counts.High, counts.Critical],
                        backgroundColor: ['#10b981', '#f59e0b', '#f97316', '#ef4444']
                    }]
                },
                options: { responsive: true, maintainAspectRatio: false }
            });
        }

        function filterAnalyticsDept(dept) {
            currentAnalyticsDeptFilter = dept;
            document.querySelectorAll('.analytics-dept-btn').forEach(btn => {
                if (btn.textContent.trim() === (dept === 'All' ? 'All departments' : dept)) {
                    btn.className = "analytics-dept-btn border-b-2 border-indigo-600 text-indigo-600 font-semibold px-4 py-2 text-xs whitespace-nowrap";
                } else {
                    btn.className = "analytics-dept-btn border-b-2 border-transparent text-slate-500 font-medium px-4 py-2 text-xs whitespace-nowrap";
                }
            });
            renderAnalyticsView();
        }

        async function exportCasesCSV() {
            const cases = await dbGetAll('incidents');
            let csv = 'Case No,Student Name,Department,Date,Category,Severity,Status,Reported By\n';
            cases.forEach(c => {
                csv += `"${c.caseNo}","${c.studentName}","${c.dept}","${c.date}","${c.category}","${c.severity}","${c.status}","${c.reportedBy}"\n`;
            });
            downloadCSV(csv, 'incident-cases-export.csv');
        }

        async function exportSummaryCSV() {
            const cases = await dbGetAll('incidents');
            let csv = 'Department,Total Cases,Open,Under Investigation,Resolved,Closed\n';
            ['Preschool', 'Primary', 'Secondary', 'Junior High School'].forEach(d => {
                const sub = cases.filter(c => c.dept === d);
                csv += `"${d}",${sub.length},${sub.filter(c => c.status==='Open').length},${sub.filter(c => c.status==='Under Investigation').length},${sub.filter(c => c.status==='Resolved').length},${sub.filter(c => c.status==='Closed').length}\n`;
            });
            downloadCSV(csv, 'incident-summary-export.csv');
        }

        function downloadCSV(csv, filename) {
            const blob = new Blob([csv], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('href', url);
            a.setAttribute('download', filename);
            a.click();
        }


        /* ==========================================================================
           11. USER MANAGEMENT LOGIC
           ========================================================================== */
        async function renderUserManagement() {
            const teachers = await dbGetAll('teachers');
            const tbody = document.getElementById('teacherAccountsTableBody');
            tbody.innerHTML = '';

            teachers.forEach((t, index) => {
                const accessBadge = t.access === 'Active' 
                    ? '<span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold text-[10px]">Active</span>'
                    : '<span class="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold text-[10px]">Disabled</span>';

                tbody.innerHTML += `
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                        <td class="py-3 px-4 font-bold text-slate-800 dark:text-slate-200">${t.name}</td>
                        <td class="py-3 px-4 text-slate-500">${t.dept}</td>
                        <td class="py-3 px-4 text-slate-500">${t.pos}</td>
                        <td class="py-3 px-4">${accessBadge}</td>
                        <td class="py-3 px-4 text-right">
                            <button onclick="toggleTeacherAccess(${index})" class="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200">
                                ${t.access === 'Active' ? 'Deactivate' : 'Activate'}
                            </button>
                        </td>
                    </tr>
                `;
            });
        }

        function openAddTeacherModal() { document.getElementById('addTeacherModal').classList.remove('hidden'); }
        function closeAddTeacherModal() { document.getElementById('addTeacherModal').classList.add('hidden'); }

        async function saveNewTeacher(e) {
            e.preventDefault();
            const teacher = {
                name: document.getElementById('newTeachName').value,
                dept: document.getElementById('newTeachDept').value,
                pos: document.getElementById('newTeachPos').value,
                access: 'Active'
            };
            await dbPut('teachers', teacher);
            closeAddTeacherModal();
            renderUserManagement();
        }

        async function toggleTeacherAccess(index) {
            const teachers = await dbGetAll('teachers');
            teachers[index].access = teachers[index].access === 'Active' ? 'Disabled' : 'Active';
            await dbPut('teachers', teachers[index]);
            renderUserManagement();
        }


        /* ==========================================================================
           12. SETTINGS VIEW LOGIC
           ========================================================================== */
        async function renderSettingsView() {
            renderSettingsCategories();
        }

        async function renderSettingsCategories() {
            const categories = await dbGetAll('categories');
            const container = document.getElementById('settingsCategoryList');
            container.innerHTML = '';

            categories.forEach(c => {
                container.innerHTML += `
                    <div class="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700">
                        <div>
                            <p class="font-bold text-xs text-slate-800 dark:text-slate-200">${c.name}</p>
                            <p class="text-[10px] text-slate-400">Default severity: ${c.defaultSeverity}</p>
                        </div>
                        <div class="flex items-center space-x-3">
                            <button onclick="deleteCategorySetting('${c.name}')" class="text-rose-500 hover:text-rose-700">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </div>
                `;
            });
        }

        async function addCategorySetting() {
            const name = document.getElementById('newCategoryName').value;
            const severity = document.getElementById('newCategorySeverity').value;
            if (!name) return;

            await dbPut('categories', { name: name, defaultSeverity: severity, enabled: true });
            document.getElementById('newCategoryName').value = '';
            renderSettingsCategories();
            loadCategoriesIntoDropdowns();
        }

        async function deleteCategorySetting(name) {
            if (confirm(`Remove category ${name}?`)) {
                await dbDelete('categories', name);
                renderSettingsCategories();
                loadCategoriesIntoDropdowns();
            }
        }

        function saveSchoolProfile(e) {
            e.preventDefault();
            alert('School profile updated successfully!');
        }
    </script>
</body>
</html>
