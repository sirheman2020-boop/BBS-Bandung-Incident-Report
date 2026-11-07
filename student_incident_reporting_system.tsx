import React, { useState, useEffect, useRef } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  FilePlus, 
  Users, 
  BarChart3, 
  UserCog, 
  Settings, 
  Bell, 
  Sun, 
  Moon, 
  Search, 
  Plus, 
  Filter, 
  X, 
  Check, 
  Eye, 
  Edit3, 
  Trash2, 
  Printer, 
  Download, 
  Mail, 
  AlertTriangle, 
  ShieldAlert, 
  Paperclip, 
  ChevronRight, 
  Calendar, 
  Clock, 
  MapPin, 
  ArrowLeft, 
  PenTool, 
  RotateCcw, 
  CheckCircle2, 
  Info,
  Building2,
  Lock,
  Upload,
  UserCheck,
  FileSpreadsheet
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip as RechartsTooltip, 
  CartesianGrid, 
  PieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar 
} from 'recharts';

// --- INITIAL MOCK DATA ---
const INITIAL_STUDENTS = [
  { id: '2026-0001', name: 'Anaya', department: 'Secondary', section: 'Sec1', grade: 'Grade 9' },
  { id: '2026-0002', name: 'Hadassah', department: 'Primary', section: '5', grade: 'Grade 5' },
  { id: '2026-0003', name: 'Kayla H', department: 'Junior High School', section: 'Grade 11 Courage', grade: 'Grade 11' },
  { id: '2026-0004', name: 'Kenzie', department: 'Primary', section: '5 Inspiration', grade: 'Grade 5' },
  { id: '2026-0005', name: 'Rie', department: 'Preschool', section: 'KG1 Blue', grade: 'Kindergarten' }
];

const INITIAL_CATEGORIES = [
  { id: 'cat-1', name: 'Academic Dishonesty', defaultSeverity: 'High', active: true },
  { id: 'cat-2', name: 'Bullying', defaultSeverity: 'High', active: true },
  { id: 'cat-3', name: 'Cutting Classes', defaultSeverity: 'Medium', active: true },
  { id: 'cat-4', name: 'Disruptive Behavior', defaultSeverity: 'Medium', active: true },
  { id: 'cat-5', name: 'Gadget Violation', defaultSeverity: 'Low', active: true },
  { id: 'cat-6', name: 'Physical Aggression', defaultSeverity: 'Critical', active: true },
  { id: 'cat-7', name: 'Property Damage', defaultSeverity: 'Medium', active: true },
  { id: 'cat-8', name: 'Tardiness', defaultSeverity: 'Low', active: true },
  { id: 'cat-9', name: 'Uniform Violation', defaultSeverity: 'Low', active: true },
  { id: 'cat-10', name: 'Use of Profanity', defaultSeverity: 'Low', active: true }
];

const INITIAL_INCIDENTS = [
  {
    caseNo: 'IR-2026-0002',
    studentId: '2026-0003',
    studentName: 'Kayla H',
    studentGrade: 'Grade 11 Courage',
    department: 'Junior High School',
    incidentDate: '2026-11-04',
    incidentTime: '08:22 AM',
    location: 'canteen',
    category: 'Disruptive Behavior',
    severity: 'Low',
    status: 'Open',
    reportedBy: 'Heman',
    description: 'Kayla has been disrupting the classmates while they are eating in the canteen.',
    personsInvolved: 'Kayla, Teacher Heman',
    witnesses: 'Mukhil',
    actionTaken: 'Immediate conversation and reflection',
    additionalRemarks: 'Need to see the guidance counsellor for behavioural counselling',
    isHighAlert: false,
    parentsNotified: false,
    documents: [],
    signatures: {
      teacher: { name: 'Heman', signed: true, date: 'Nov 4, 2026 - 2:25 pm' },
      parent: { name: '', signed: false, date: '' },
      principal: { name: 'Fred', signed: true, date: 'Nov 4, 2026 - 2:29 pm' }
    },
    timeline: [
      { id: 1, text: 'Incident report created by Heman', date: 'Nov 4, 2026 8:22 AM' }
    ]
  },
  {
    caseNo: 'IR-2026-0003',
    studentId: '2026-0004',
    studentName: 'Kenzie',
    studentGrade: '5 Inspiration',
    department: 'Primary',
    incidentDate: '2026-11-04',
    incidentTime: '10:15 AM',
    location: 'Classroom 4B',
    category: 'Disruptive Behavior',
    severity: 'Critical',
    status: 'Open',
    reportedBy: 'Heman',
    description: 'Emergency case where the family should be emailed: guidance counselor only.',
    personsInvolved: 'Kenzie, Classmate',
    witnesses: 'Classroom Teacher',
    actionTaken: 'Escalated to Guidance Counselor immediately',
    additionalRemarks: 'Parent consultation urgently required.',
    isHighAlert: true,
    parentsNotified: true,
    documents: [],
    signatures: {
      teacher: { name: 'Heman', signed: true, date: 'Nov 4, 2026 - 10:30 am' },
      parent: { name: '', signed: false, date: '' },
      principal: { name: '', signed: false, date: '' }
    },
    timeline: [
      { id: 1, text: 'Incident report created', date: 'Nov 4, 2026 10:15 AM' },
      { id: 2, text: 'Email notification sent to parents', date: 'Nov 4, 2026 10:35 AM' }
    ]
  },
  {
    caseNo: 'IR-2026-0004',
    studentId: '2026-0005',
    studentName: 'Rie',
    studentGrade: 'KG1 Blue',
    department: 'Preschool',
    incidentDate: '2026-11-04',
    incidentTime: '10:45 AM',
    location: 'Classroom',
    category: 'Disruptive Behavior',
    severity: 'Critical',
    status: 'Open',
    reportedBy: 'Heman',
    description: 'The student is very noisy and distracting during quiet hours.',
    personsInvolved: 'student',
    witnesses: 'Mr. Heman',
    actionTaken: 'referred to guidance counselor',
    additionalRemarks: 'First warning',
    isHighAlert: true,
    parentsNotified: true,
    documents: [
      { name: 'image.jpg', size: '1.8 MB', type: 'image/jpeg', url: '' }
    ],
    signatures: {
      teacher: { name: 'mr. heman', signed: true, date: 'Nov 4, 2026 - 1:50 pm' },
      parent: { name: '', signed: false, date: '' },
      principal: { name: '', signed: false, date: '' }
    },
    timeline: [
      { id: 1, text: 'Incident report created', date: 'Nov 4, 2026 10:45 AM' },
      { id: 2, text: 'Parent notified via email', date: 'Nov 5, 2026 7:17 AM' }
    ]
  },
  {
    caseNo: 'IR-2026-0001',
    studentId: '2026-0001',
    studentName: 'Anaya',
    studentGrade: 'Sec1 Passion',
    department: 'Secondary',
    incidentDate: '2026-11-03',
    incidentTime: '01:30 PM',
    location: 'Science Lab 2nd floor',
    category: 'Disruptive Behavior',
    severity: 'Medium',
    status: 'Open',
    reportedBy: 'Heman',
    description: 'Unintentional lab equipment misplacement and disruption of group study.',
    personsInvolved: 'Anaya, Lab Partners',
    witnesses: 'Lab Assistant',
    actionTaken: 'Verbal warning and lab privilege re-orientation',
    additionalRemarks: 'Monitoring progress',
    isHighAlert: false,
    parentsNotified: false,
    documents: [],
    signatures: {
      teacher: { name: 'Heman', signed: true, date: 'Nov 3, 2026 - 2:00 pm' },
      parent: { name: '', signed: false, date: '' },
      principal: { name: '', signed: false, date: '' }
    },
    timeline: [
      { id: 1, text: 'Incident report created', date: 'Nov 3, 2026 1:30 PM' }
    ]
  }
];

const INITIAL_TEACHERS = [
  { id: 't1', name: 'Andr', email: 'veronqueandre411@gmail.com', department: 'Primary', position: "Subject Teacher's", access: 'Active' },
  { id: 't2', name: 'Andrie Veronque', email: 'veronqueandre411@gmail.com', department: 'All Departments', position: "Subject Teacher's", access: 'Active' },
  { id: 't3', name: 'Jake', email: 'hego91192022@gmail.com', department: 'Primary', position: 'English Teacher', access: 'Active' },
  { id: 't4', name: 'Mr. Heman', email: 'hemangingonzalez@gmail.com', department: 'Primary', position: 'Subject Teacher', access: 'Active' },
  { id: 't5', name: 'Mr. Heman', email: 'siheman2020@gmail.com', department: 'Primary', position: 'Computer Science Teacher', access: 'Active' }
];

export default function App() {
  // State initialization
  const [theme, setTheme] = useState('light');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedDeptFilter, setSelectedDeptFilter] = useState('All departments');
  
  // Data States
  const [incidents, setIncidents] = useState(() => {
    const local = localStorage.getItem('gi_incidents');
    return local ? JSON.parse(local) : INITIAL_INCIDENTS;
  });
  
  const [categories, setCategories] = useState(() => {
    const local = localStorage.getItem('gi_categories');
    return local ? JSON.parse(local) : INITIAL_CATEGORIES;
  });
  
  const [teachers, setTeachers] = useState(() => {
    const local = localStorage.getItem('gi_teachers');
    return local ? JSON.parse(local) : INITIAL_TEACHERS;
  });

  const [schoolProfile, setSchoolProfile] = useState({
    schoolName: 'REPUBLIC OF THE PHILIPPINES · DEPARTMENT OF EDUCATION',
    schoolAddress: 'Mandaluyong City, Metro Manila',
    officeName: 'STUDENT INCIDENT REPORTING SYSTEM',
    academicYear: '2026-2027',
    principal: 'Fred',
    guidanceCounselor: 'Heman',
    reportFooter: 'Confidential - Visible only to the guidance office and authorized teachers.'
  });

  const [toast, setToast] = useState(null);
  const [selectedCaseId, setSelectedCaseId] = useState(null);
  const [isPrintMode, setIsPrintMode] = useState(false);

  // Sync LocalStorage
  useEffect(() => {
    localStorage.setItem('gi_incidents', JSON.stringify(incidents));
  }, [incidents]);

  useEffect(() => {
    localStorage.setItem('gi_categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('gi_teachers', JSON.stringify(teachers));
  }, [teachers]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const selectedCase = incidents.find(c => c.caseNo === selectedCaseId);

  return (
    <div className={`min-h-screen flex flex-col font-sans antialiased transition-colors duration-200 ${
      theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-3 px-4 py-3 rounded-lg shadow-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 border border-indigo-500 animate-bounce">
          {toast.type === 'error' ? <AlertTriangle className="w-5 h-5 text-red-400" /> : <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
          <span className="text-sm font-medium">{toast.message}</span>
        </div>
      )}

      {/* Main Layout standard or Print view overlay */}
      {isPrintMode && selectedCase ? (
        <PrintReportView 
          caseData={selectedCase} 
          schoolProfile={schoolProfile} 
          onClose={() => setIsPrintMode(false)} 
        />
      ) : (
        <div className="flex flex-1 min-h-screen overflow-hidden">
          {/* SIDEBAR */}
          <aside className={`w-64 flex-shrink-0 border-r flex flex-col justify-between transition-colors ${
            theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div>
              {/* Header / Brand */}
              <div className="p-5 flex items-center gap-3 border-b border-slate-200 dark:border-slate-800">
                <div className="w-9 h-9 rounded-lg bg-indigo-900 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                  S
                </div>
                <div>
                  <h1 className="font-bold text-sm leading-tight text-indigo-950 dark:text-indigo-200">Student Incidents</h1>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">GUIDANCE OFFICE</p>
                </div>
              </div>

              {/* Nav Sections */}
              <nav className="p-4 space-y-6 text-xs font-medium">
                <div>
                  <span className="px-3 text-[10px] uppercase tracking-wider font-bold text-slate-400">OVERVIEW</span>
                  <div className="mt-2 space-y-1">
                    <NavItem 
                      icon={<LayoutDashboard className="w-4 h-4" />} 
                      label="Dashboard" 
                      active={activeTab === 'dashboard'} 
                      onClick={() => { setActiveTab('dashboard'); setSelectedCaseId(null); }}
                      theme={theme}
                    />
                  </div>
                </div>

                <div>
                  <span className="px-3 text-[10px] uppercase tracking-wider font-bold text-slate-400">CASE MANAGEMENT</span>
                  <div className="mt-2 space-y-1">
                    <NavItem 
                      icon={<FilePlus className="w-4 h-4" />} 
                      label="Record an Incident" 
                      active={activeTab === 'record'} 
                      onClick={() => { setActiveTab('record'); setSelectedCaseId(null); }}
                      theme={theme}
                    />
                    <NavItem 
                      icon={<FileText className="w-4 h-4" />} 
                      label="Incident Records" 
                      active={activeTab === 'records' || (activeTab === 'detail' && selectedCaseId)} 
                      onClick={() => { setActiveTab('records'); setSelectedCaseId(null); }}
                      theme={theme}
                    />
                  </div>
                </div>

                <div>
                  <span className="px-3 text-[10px] uppercase tracking-wider font-bold text-slate-400">STUDENT RECORDS</span>
                  <div className="mt-2 space-y-1">
                    <NavItem 
                      icon={<Users className="w-4 h-4" />} 
                      label="Students" 
                      active={activeTab === 'students'} 
                      onClick={() => setActiveTab('students')}
                      theme={theme}
                    />
                  </div>
                </div>

                <div>
                  <span className="px-3 text-[10px] uppercase tracking-wider font-bold text-slate-400">INSIGHTS</span>
                  <div className="mt-2 space-y-1">
                    <NavItem 
                      icon={<BarChart3 className="w-4 h-4" />} 
                      label="Reports & Analytics" 
                      active={activeTab === 'reports'} 
                      onClick={() => setActiveTab('reports')}
                      theme={theme}
                    />
                  </div>
                </div>

                <div>
                  <span className="px-3 text-[10px] uppercase tracking-wider font-bold text-slate-400">ADMINISTRATION</span>
                  <div className="mt-2 space-y-1">
                    <NavItem 
                      icon={<UserCog className="w-4 h-4" />} 
                      label="User Management" 
                      active={activeTab === 'users'} 
                      onClick={() => setActiveTab('users')}
                      theme={theme}
                    />
                    <NavItem 
                      icon={<Settings className="w-4 h-4" />} 
                      label="Settings" 
                      active={activeTab === 'settings'} 
                      onClick={() => setActiveTab('settings')}
                      theme={theme}
                    />
                  </div>
                </div>
              </nav>
            </div>
          </aside>

          {/* RIGHT MAIN VIEW AREA */}
          <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
            {/* Top Bar Header */}
            <header className={`h-16 px-8 border-b flex items-center justify-between sticky top-0 z-20 ${
              theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div>
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">STUDENT INCIDENT REPORTING</p>
                <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Saturday, November 7, 2026</h2>
              </div>

              <div className="flex items-center gap-3">
                <button 
                  onClick={() => { setActiveTab('record'); setSelectedCaseId(null); }}
                  className="px-4 py-2 bg-indigo-950 hover:bg-indigo-900 text-white text-xs font-semibold rounded-lg flex items-center gap-2 shadow-sm transition-all"
                >
                  <FilePlus className="w-3.5 h-3.5" />
                  Record incident
                </button>

                <button 
                  onClick={toggleTheme} 
                  className={`p-2 rounded-lg border text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${
                    theme === 'dark' ? 'border-slate-800' : 'border-slate-200'
                  }`}
                  title="Toggle Theme"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>

                <button className={`p-2 rounded-lg border text-slate-600 dark:text-slate-300 relative ${
                  theme === 'dark' ? 'border-slate-800' : 'border-slate-200'
                }`}>
                  <Bell className="w-4 h-4" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"></span>
                </button>

                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-semibold flex items-center justify-center text-xs shadow-sm">
                  H
                </div>
              </div>
            </header>

            {/* PAGE CONTENT CONTAINER */}
            <main className="p-8 flex-1">
              {activeTab === 'dashboard' && (
                <OverviewPage 
                  incidents={incidents}
                  selectedDeptFilter={selectedDeptFilter}
                  setSelectedDeptFilter={setSelectedDeptFilter}
                  setActiveTab={setActiveTab}
                  setSelectedCaseId={setSelectedCaseId}
                  theme={theme}
                />
              )}

              {activeTab === 'record' && (
                <RecordIncidentPage 
                  incidents={incidents}
                  setIncidents={setIncidents}
                  categories={categories}
                  students={INITIAL_STUDENTS}
                  showToast={showToast}
                  setActiveTab={setActiveTab}
                  setSelectedCaseId={setSelectedCaseId}
                  theme={theme}
                />
              )}

              {activeTab === 'records' && (
                <IncidentRecordsPage 
                  incidents={incidents}
                  categories={categories}
                  setSelectedCaseId={(id) => { setSelectedCaseId(id); setActiveTab('detail'); }}
                  setIsPrintMode={setIsPrintMode}
                  setActiveTab={setActiveTab}
                  theme={theme}
                />
              )}

              {activeTab === 'detail' && selectedCaseId && (
                <CaseDetailPage 
                  caseData={selectedCase}
                  incidents={incidents}
                  setIncidents={setIncidents}
                  setIsPrintMode={setIsPrintMode}
                  setActiveTab={setActiveTab}
                  showToast={showToast}
                  theme={theme}
                />
              )}

              {activeTab === 'students' && (
                <StudentsPage students={INITIAL_STUDENTS} incidents={incidents} theme={theme} />
              )}

              {activeTab === 'reports' && (
                <ReportsAnalyticsPage incidents={incidents} theme={theme} showToast={showToast} />
              )}

              {activeTab === 'users' && (
                <UserManagementPage teachers={teachers} setTeachers={setTeachers} showToast={showToast} theme={theme} />
              )}

              {activeTab === 'settings' && (
                <SettingsPage 
                  theme={theme} 
                  toggleTheme={toggleTheme}
                  categories={categories}
                  setCategories={setCategories}
                  schoolProfile={schoolProfile}
                  setSchoolProfile={setSchoolProfile}
                  showToast={showToast}
                />
              )}
            </main>
          </div>
        </div>
      )}
    </div>
  );
}

// --- SUB-COMPONENTS & NAV HELPERS ---

function NavItem({ icon, label, active, onClick, theme }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
        active 
          ? 'bg-indigo-50 text-indigo-950 font-semibold dark:bg-slate-800 dark:text-white' 
          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
      }`}
    >
      <span className={active ? 'text-indigo-950 dark:text-white' : 'text-slate-400'}>{icon}</span>
      {label}
    </button>
  );
}

// --- OVERVIEW DASHBOARD PAGE ---
function OverviewPage({ incidents, selectedDeptFilter, setSelectedDeptFilter, setActiveTab, setSelectedCaseId, theme }) {
  const departments = ["All departments", "Preschool", "Primary", "Secondary", "Junior High School"];

  const filteredIncidents = incidents.filter(i => 
    selectedDeptFilter === "All departments" ? true : i.department === selectedDeptFilter
  );

  const stats = {
    enrolled: 5,
    total: filteredIncidents.length,
    open: filteredIncidents.filter(i => i.status === 'Open').length,
    underInvestigation: filteredIncidents.filter(i => i.status === 'Under Investigation').length,
    resolved: filteredIncidents.filter(i => i.status === 'Resolved').length,
    closed: filteredIncidents.filter(i => i.status === 'Closed').length
  };

  const highAlerts = filteredIncidents.filter(i => i.severity === 'Critical');

  // Chart data setup
  const monthlyTrendData = [
    { name: 'Jun', count: 0 },
    { name: 'Jul', count: 0 },
    { name: 'Aug', count: 0 },
    { name: 'Sep', count: 0 },
    { name: 'Oct', count: 0 },
    { name: 'Nov', count: filteredIncidents.length }
  ];

  const severityCounts = {
    Low: filteredIncidents.filter(i => i.severity === 'Low').length,
    Medium: filteredIncidents.filter(i => i.severity === 'Medium').length,
    High: filteredIncidents.filter(i => i.severity === 'High').length,
    Critical: filteredIncidents.filter(i => i.severity === 'Critical').length
  };

  const severityChartData = [
    { name: 'Low', value: severityCounts.Low, color: '#10B981' },
    { name: 'Medium', value: severityCounts.Medium, color: '#F59E0B' },
    { name: 'High', value: severityCounts.High, color: '#F97316' },
    { name: 'Critical', value: severityCounts.Critical, color: '#EF4444' }
  ];

  const categoryCounts = filteredIncidents.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + 1;
    return acc;
  }, {});

  const categoryChartData = Object.keys(categoryCounts).map(cat => ({
    category: cat,
    count: categoryCounts[cat]
  }));

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Welcome Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">GOOD EVENING, HEMAN</p>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">Incident overview</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Monitor student discipline cases across departments, review recent reports and track how each case is progressing.
          </p>
        </div>
        <button 
          onClick={() => setActiveTab('record')}
          className="px-5 py-2.5 bg-indigo-950 hover:bg-indigo-900 text-white font-semibold text-xs rounded-xl flex items-center gap-2 shadow-sm self-start md:self-auto"
        >
          Record an incident <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Department Filter Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
        {departments.map(dept => (
          <button
            key={dept}
            onClick={() => setSelectedDeptFilter(dept)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              selectedDeptFilter === dept
                ? 'bg-indigo-950 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 border border-slate-200 dark:border-slate-700'
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Metrics Stat Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <StatCard title="STUDENTS" value={stats.enrolled} subtitle="Enrolled student records" theme={theme} />
        <StatCard title="TOTAL REPORTS" value={stats.total} subtitle="All recorded incidents" theme={theme} />
        <StatCard title="OPEN CASES" value={stats.open} subtitle="Awaiting action" theme={theme} />
        <StatCard title="UNDER INVESTIGATION" value={stats.underInvestigation} subtitle="Being reviewed" theme={theme} />
        <StatCard title="RESOLVED" value={stats.resolved} subtitle="Action completed" theme={theme} />
        <StatCard title="CLOSED" value={stats.closed} subtitle="Archived cases" theme={theme} />
      </div>

      {/* High-Alert Emergency Banner Section */}
      <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'} shadow-sm`}>
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700/60">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-rose-100 dark:bg-rose-900/40 text-rose-600 rounded-lg">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                High-alert incidents
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Emergency cases where the family should be emailed · guidance counselor only</p>
            </div>
          </div>
          <span className="text-[11px] font-semibold px-2.5 py-1 bg-rose-50 text-rose-600 rounded-md border border-rose-200">
            {highAlerts.length} TO NOTIFY
          </span>
        </div>

        <div className="mt-4 space-y-3">
          {highAlerts.length === 0 ? (
            <p className="text-xs text-slate-400 py-2">No critical emergency cases found.</p>
          ) : (
            highAlerts.map(inc => (
              <div 
                key={inc.caseNo}
                onClick={() => { setSelectedCaseId(inc.caseNo); setActiveTab('detail'); }}
                className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-500 bg-slate-50/50 dark:bg-slate-800/30 cursor-pointer transition-all"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">{inc.caseNo}</span>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{inc.studentName}</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {inc.category} · {inc.incidentDate} · {inc.department}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 bg-rose-600 text-white text-[10px] font-bold rounded-md uppercase tracking-wider">
                    CRITICAL
                  </span>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${inc.parentsNotified ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                    {inc.parentsNotified ? '✓ Parents notified' : 'Pending notification'}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Analytics Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trend Line Chart */}
        <div className={`lg:col-span-2 p-6 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'} shadow-sm`}>
          <div className="mb-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Incident trend</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Recorded cases over the last six months</p>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyTrendData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={theme === 'dark' ? '#334155' : '#E2E8F0'} />
                <XAxis dataKey="name" stroke="#94A3B8" fontSize={11} tickLine={false} />
                <YAxis stroke="#94A3B8" fontSize={11} tickLine={false} />
                <RechartsTooltip />
                <Line type="monotone" dataKey="count" stroke="#3B82F6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Severity Pie Chart */}
        <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'} shadow-sm`}>
          <div className="mb-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Severity distribution</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">How serious the recorded cases are</p>
          </div>
          <div className="h-48 relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={severityChartData} innerRadius={55} outerRadius={75} paddingAngle={4} dataKey="value">
                  {severityChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute text-center">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white">{filteredIncidents.length}</span>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">CASES</p>
            </div>
          </div>
          {/* Legend */}
          <div className="space-y-1.5 mt-2">
            {severityChartData.map(item => (
              <div key={item.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                  <span className="text-slate-600 dark:text-slate-400">{item.name}</span>
                </div>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {item.value} ({filteredIncidents.length ? Math.round((item.value / filteredIncidents.length) * 100) : 0}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Grid: Category Bar Chart & Recent Incident Reports */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category distribution */}
        <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'} shadow-sm`}>
          <div className="mb-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Category distribution</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Most frequent incident categories</p>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={categoryChartData}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={theme === 'dark' ? '#334155' : '#E2E8F0'} />
                <XAxis type="number" fontSize={11} stroke="#94A3B8" />
                <YAxis dataKey="category" type="category" fontSize={11} stroke="#94A3B8" width={110} />
                <RechartsTooltip />
                <Bar dataKey="count" fill="#4F46E5" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent incident reports feed */}
        <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'} shadow-sm flex flex-col justify-between`}>
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Recent incident reports</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Latest cases filed by teachers</p>
              </div>
              <button 
                onClick={() => setActiveTab('records')}
                className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                View all
              </button>
            </div>

            <div className="space-y-3">
              {filteredIncidents.slice(0, 4).map(inc => (
                <div 
                  key={inc.caseNo} 
                  onClick={() => { setSelectedCaseId(inc.caseNo); setActiveTab('detail'); }}
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 cursor-pointer transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-xs text-slate-700 dark:text-slate-300">
                      {inc.studentName.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{inc.caseNo}</span>
                        <span className="text-xs font-semibold text-slate-900 dark:text-white">{inc.studentName}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {inc.category} · {inc.incidentDate} · {inc.department}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-amber-50 text-amber-600 text-[10px] font-bold rounded border border-amber-200">
                      • {inc.status}
                    </span>
                    <SeverityBadge severity={inc.severity} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, subtitle, theme }) {
  return (
    <div className={`p-4 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'} shadow-sm`}>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{title}</p>
      <p className="text-2xl font-black text-slate-900 dark:text-white mt-2">{value}</p>
      <p className="text-[10px] text-slate-400 mt-1 truncate">{subtitle}</p>
    </div>
  );
}

function SeverityBadge({ severity }) {
  const styles = {
    Low: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200',
    Medium: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-200',
    High: 'bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300 border-orange-200',
    Critical: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-200'
  };

  return (
    <span className={`px-2 py-0.5 text-[10px] font-extrabold rounded uppercase tracking-wider border ${styles[severity] || styles.Low}`}>
      {severity}
    </span>
  );
}

// --- RECORD AN INCIDENT FORM PAGE ---
function RecordIncidentPage({ incidents, setIncidents, categories, students, showToast, setActiveTab, setSelectedCaseId, theme }) {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [studentSearch, setStudentSearch] = useState('');
  
  const [formData, setFormData] = useState({
    incidentDate: '2026-11-07',
    incidentTime: '06:20 PM',
    location: '',
    category: '',
    severity: 'Low',
    status: 'Open',
    description: '',
    personsInvolved: '',
    witnesses: '',
    actionTaken: '',
    additionalRemarks: ''
  });

  const [documents, setDocuments] = useState([]);
  const [activeSigModal, setActiveSigModal] = useState(null);
  const [signatures, setSignatures] = useState({
    teacher: { name: 'Heman', signed: true, date: 'Nov 7, 2026 - 6:20 pm', signatureData: null },
    parent: { name: '', signed: false, date: '', signatureData: null },
    principal: { name: '', signed: false, date: '', signatureData: null }
  });

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(studentSearch.toLowerCase()) || 
    s.id.toLowerCase().includes(studentSearch.toLowerCase())
  );

  const handleDocumentUpload = (e) => {
    const files = Array.from(e.target.files);
    const newDocs = files.map(f => ({
      name: f.name,
      size: `${(f.size / (1024 * 1024)).toFixed(1)} MB`,
      type: f.type,
      url: URL.createObjectURL(f)
    }));
    setDocuments([...documents, ...newDocs]);
    showToast(`${files.length} document(s) attached`);
  };

  const removeDocument = (index) => {
    setDocuments(documents.filter((_, i) => i !== index));
  };

  const handleSaveSignature = (role, signerName, canvasData) => {
    setSignatures({
      ...signatures,
      [role]: {
        name: signerName,
        signed: true,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) + ' - ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        signatureData: canvasData
      }
    });
    setActiveSigModal(null);
    showToast('Signature saved successfully');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedStudent) {
      showToast('Please select a student involved', 'error');
      return;
    }
    if (!formData.category) {
      showToast('Please select an incident category', 'error');
      return;
    }

    const nextId = incidents.length + 2;
    const caseNo = `IR-2026-${String(nextId).padStart(4, '0')}`;

    const newCase = {
      caseNo,
      studentId: selectedStudent.id,
      studentName: selectedStudent.name,
      studentGrade: selectedStudent.section,
      department: selectedStudent.department,
      incidentDate: formData.incidentDate,
      incidentTime: formData.incidentTime,
      location: formData.location || 'N/A',
      category: formData.category,
      severity: formData.severity,
      status: formData.status,
      reportedBy: 'Heman',
      description: formData.description,
      personsInvolved: formData.personsInvolved,
      witnesses: formData.witnesses,
      actionTaken: formData.actionTaken,
      additionalRemarks: formData.additionalRemarks,
      isHighAlert: formData.severity === 'Critical',
      parentsNotified: false,
      documents,
      signatures,
      timeline: [
        { id: 1, text: 'Incident report created by Heman', date: new Date().toLocaleString() }
      ]
    };

    setIncidents([newCase, ...incidents]);
    showToast(`Case ${caseNo} recorded successfully!`);
    setSelectedCaseId(caseNo);
    setActiveTab('detail');
  };

  const completedSignaturesCount = Object.values(signatures).filter(s => s.signed).length;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Top Header */}
      <div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">NEW CASE</p>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">Record an incident</h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          File a student incident report. A unique case number is generated automatically when you submit.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Main Form Fields */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* STEP 1: Select Student */}
          <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'} shadow-sm space-y-4`}>
            <div className="border-b pb-3 border-slate-100 dark:border-slate-700">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Student</h3>
              <p className="text-xs text-slate-500">Select the learner involved in this incident.</p>
            </div>

            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input 
                type="text"
                placeholder="Search student by name or student ID"
                value={studentSearch}
                onChange={(e) => setStudentSearch(e.target.value)}
                className={`w-full pl-9 pr-4 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            </div>

            <div className="max-h-48 overflow-y-auto space-y-1.5 border border-slate-100 dark:border-slate-800 rounded-xl p-2">
              {filteredStudents.map(student => (
                <div 
                  key={student.id}
                  onClick={() => setSelectedStudent(student)}
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer text-xs transition-all ${
                    selectedStudent?.id === student.id 
                      ? 'bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-300 text-indigo-950 dark:text-indigo-200 font-semibold' 
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div>
                    <span className="font-bold">{student.name}</span>
                    <span className="text-slate-400 ml-2">({student.id} · {student.department})</span>
                  </div>
                  <span className="text-[11px] text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                    {student.section}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* STEP 2: Incident Details */}
          <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'} shadow-sm space-y-4`}>
            <div className="border-b pb-3 border-slate-100 dark:border-slate-700">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Incident details</h3>
              <p className="text-xs text-slate-500">Record what happened, where and how serious it was.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">INCIDENT DATE</label>
                <input 
                  type="date"
                  value={formData.incidentDate}
                  onChange={(e) => setFormData({ ...formData, incidentDate: e.target.value })}
                  className={`w-full px-3 py-2 text-xs rounded-xl border focus:ring-2 focus:ring-indigo-500 ${
                    theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200'
                  }`}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">INCIDENT TIME</label>
                <input 
                  type="text"
                  value={formData.incidentTime}
                  onChange={(e) => setFormData({ ...formData, incidentTime: e.target.value })}
                  className={`w-full px-3 py-2 text-xs rounded-xl border focus:ring-2 focus:ring-indigo-500 ${
                    theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200'
                  }`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">LOCATION</label>
                <input 
                  type="text"
                  placeholder="e.g. Science Laboratory, 2nd floor"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className={`w-full px-3 py-2 text-xs rounded-xl border focus:ring-2 focus:ring-indigo-500 ${
                    theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">CATEGORY</label>
                <select 
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className={`w-full px-3 py-2 text-xs rounded-xl border focus:ring-2 focus:ring-indigo-500 ${
                    theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200'
                  }`}
                >
                  <option value="">Select a category</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">SEVERITY</label>
                <select 
                  value={formData.severity}
                  onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
                  className={`w-full px-3 py-2 text-xs rounded-xl border focus:ring-2 focus:ring-indigo-500 ${
                    theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200'
                  }`}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Critical">Critical</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">CASE STATUS</label>
                <select 
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className={`w-full px-3 py-2 text-xs rounded-xl border focus:ring-2 focus:ring-indigo-500 ${
                    theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200'
                  }`}
                >
                  <option value="Open">Open</option>
                  <option value="Under Investigation">Under Investigation</option>
                  <option value="Resolved">Resolved</option>
                  <option value="Closed">Closed</option>
                </select>
                <p className="text-[10px] text-slate-400 mt-1">Only guidance counselor can change the case status.</p>
              </div>
            </div>
          </div>

          {/* STEP 3: Incident Narrative */}
          <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'} shadow-sm space-y-4`}>
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">INCIDENT DESCRIPTION</label>
              <textarea 
                rows={4}
                placeholder="During the lunch break, the student..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className={`w-full p-3 text-xs rounded-xl border focus:ring-2 focus:ring-indigo-500 ${
                  theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200'
                }`}
              />
              <p className="text-[10px] text-slate-400 mt-1">Describe what happened in order, using factual language.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">PERSONS INVOLVED</label>
                <input 
                  type="text"
                  placeholder="Students, staff or others directly involved"
                  value={formData.personsInvolved}
                  onChange={(e) => setFormData({ ...formData, personsInvolved: e.target.value })}
                  className={`w-full px-3 py-2 text-xs rounded-xl border ${theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200'}`}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">WITNESSES</label>
                <input 
                  type="text"
                  placeholder="Names of witnesses"
                  value={formData.witnesses}
                  onChange={(e) => setFormData({ ...formData, witnesses: e.target.value })}
                  className={`w-full px-3 py-2 text-xs rounded-xl border ${theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200'}`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">ACTION TAKEN</label>
                <input 
                  type="text"
                  placeholder="Immediate action, referral or sanction"
                  value={formData.actionTaken}
                  onChange={(e) => setFormData({ ...formData, actionTaken: e.target.value })}
                  className={`w-full px-3 py-2 text-xs rounded-xl border ${theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200'}`}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">ADDITIONAL REMARKS</label>
                <input 
                  type="text"
                  placeholder="Notes for the guidance office"
                  value={formData.additionalRemarks}
                  onChange={(e) => setFormData({ ...formData, additionalRemarks: e.target.value })}
                  className={`w-full px-3 py-2 text-xs rounded-xl border ${theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200'}`}
                />
              </div>
            </div>
          </div>

          {/* STEP 4: Supporting Documents */}
          <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'} shadow-sm space-y-4`}>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Supporting documents</h3>
              <p className="text-xs text-slate-500">Attach demerit forms, statements or photographs.</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <label className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-xl border border-slate-300 dark:border-slate-600 cursor-pointer flex items-center gap-2">
                <Paperclip className="w-3.5 h-3.5" />
                Attach demerit form or document
                <input type="file" multiple onChange={handleDocumentUpload} className="hidden" />
              </label>
              <span className="text-[11px] text-slate-400">PDF, Word, Excel, PNG or JPG - up to 5MB each.</span>
            </div>

            {documents.length > 0 && (
              <div className="space-y-2 mt-2">
                {documents.map((doc, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-xs border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <Paperclip className="w-4 h-4 text-indigo-500" />
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{doc.name}</span>
                      <span className="text-slate-400">({doc.size})</span>
                    </div>
                    <button onClick={() => removeDocument(idx)} className="text-rose-500 hover:text-rose-700 p-1">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* STEP 5: Electronic Signatures Pad Section */}
          <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'} shadow-sm space-y-4`}>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Electronic signatures</h3>
              <p className="text-xs text-slate-500">Signatories may sign now or later. A signature is only marked as signed once an actual signature is captured.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <SignatureBox 
                title="CLASS ADVISER / TEACHER" 
                sigState={signatures.teacher} 
                onAddSig={() => setActiveSigModal('teacher')}
                theme={theme}
              />
              <SignatureBox 
                title="PARENT OR GUARDIAN" 
                sigState={signatures.parent} 
                onAddSig={() => setActiveSigModal('parent')}
                theme={theme}
              />
              <SignatureBox 
                title="SCHOOL PRINCIPAL" 
                sigState={signatures.principal} 
                onAddSig={() => setActiveSigModal('principal')}
                theme={theme}
              />
            </div>
          </div>
        </div>

        {/* SIDEBAR SUBMIT SUMMARY DRAWER */}
        <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'} shadow-sm space-y-6 sticky top-24`}>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Submit report</h3>
            <p className="text-xs text-slate-500 mt-1">
              The case is filed under your name and locked into the student's incident history. Status changes are recorded in the case timeline.
            </p>
          </div>

          <div className="space-y-3 text-xs border-t border-b py-4 border-slate-100 dark:border-slate-700">
            <div className="flex justify-between">
              <span className="text-slate-400">Student</span>
              <span className="font-semibold text-slate-900 dark:text-white">{selectedStudent ? selectedStudent.name : 'Not selected'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Category</span>
              <span className="font-semibold text-slate-900 dark:text-white">{formData.category || '—'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Severity</span>
              <span className="font-semibold text-slate-900 dark:text-white">{formData.severity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Documents</span>
              <span className="font-semibold text-slate-900 dark:text-white">{documents.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Signatures</span>
              <span className="font-semibold text-slate-900 dark:text-white">{completedSignaturesCount} of 3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Reported by</span>
              <span className="font-semibold text-slate-900 dark:text-white">Heman</span>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-indigo-950 hover:bg-indigo-900 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"
          >
            <FilePlus className="w-4 h-4" />
            Submit incident report
          </button>

          <p className="text-[10px] text-center text-slate-400">
            Confidential — visible only to the guidance office and authorized teachers.
          </p>
        </div>
      </div>

      {/* SIGNATURE DRAWING MODAL */}
      {activeSigModal && (
        <SignatureModal 
          role={activeSigModal}
          onClose={() => setActiveSigModal(null)}
          onSave={handleSaveSignature}
          theme={theme}
        />
      )}
    </div>
  );
}

function SignatureBox({ title, sigState, onAddSig, theme }) {
  return (
    <div className={`p-4 rounded-xl border ${theme === 'dark' ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-200'} space-y-3`}>
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{title}</span>
        {sigState.signed ? (
          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded">✓ Signed</span>
        ) : (
          <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-bold rounded">Pending</span>
        )}
      </div>

      <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
        {sigState.signed ? sigState.name : 'Awaiting signature'}
      </p>

      {sigState.signatureData && (
        <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-1 bg-white dark:bg-slate-800 flex justify-center">
          <img src={sigState.signatureData} alt="Signature" className="h-12 object-contain" />
        </div>
      )}

      <button
        type="button"
        onClick={onAddSig}
        className="w-full py-1.5 px-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center justify-center gap-1.5"
      >
        <PenTool className="w-3 h-3" />
        {sigState.signed ? 'Re-sign' : 'Add signature'}
      </button>
    </div>
  );
}

// Interactive HTML Canvas Signature Modal Component
function SignatureModal({ role, onClose, onSave, theme }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [signerName, setSignerName] = useState('');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#000000';
    }
  }, []);

  const startDrawing = (e) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.beginPath();
    }
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches?.[0]?.clientX) - rect.left;
    const y = (e.clientY || e.touches?.[0]?.clientY) - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleSave = () => {
    if (!signerName.trim()) {
      alert('Please enter full name of signatory');
      return;
    }
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL();
    onSave(role, signerName, dataUrl);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className={`w-full max-w-md rounded-2xl p-6 space-y-4 shadow-2xl ${
        theme === 'dark' ? 'bg-slate-900 border border-slate-800 text-white' : 'bg-white text-slate-900'
      }`}>
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-sm">SIGNER'S FULL NAME</h3>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600"><X className="w-4 h-4" /></button>
        </div>

        <input 
          type="text"
          placeholder="Full name"
          value={signerName}
          onChange={(e) => setSignerName(e.target.value)}
          className={`w-full p-2.5 text-xs rounded-xl border focus:ring-2 focus:ring-indigo-500 ${
            theme === 'dark' ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'
          }`}
        />

        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">SIGNATURE</label>
          <div className="border border-slate-300 dark:border-slate-700 rounded-xl bg-white overflow-hidden">
            <canvas 
              ref={canvasRef}
              width={380}
              height={140}
              onMouseDown={startDrawing}
              onMouseUp={stopDrawing}
              onMouseMove={draw}
              onTouchStart={startDrawing}
              onTouchEnd={stopDrawing}
              onTouchMove={draw}
              className="w-full h-36 cursor-crosshair touch-none"
            />
          </div>
          <div className="flex justify-between items-center mt-2 text-[11px] text-slate-400">
            <span>Signature captured — save it below.</span>
            <div className="flex gap-2">
              <button type="button" onClick={clearCanvas} className="hover:text-slate-600 flex items-center gap-1">
                <RotateCcw className="w-3 h-3" /> Clear
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button onClick={onClose} className="px-4 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl">
            Cancel
          </button>
          <button onClick={handleSave} className="px-4 py-2 text-xs font-bold bg-indigo-950 text-white hover:bg-indigo-900 rounded-xl">
            Save signature
          </button>
        </div>
      </div>
    </div>
  );
}

// --- INCIDENT RECORDS TABLE PAGE ---
function IncidentRecordsPage({ incidents, categories, setSelectedCaseId, setIsPrintMode, setActiveTab, theme }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [deptFilter, setDeptFilter] = useState('All departments');
  const [catFilter, setCatFilter] = useState('All categories');
  const [sevFilter, setSevFilter] = useState('All severities');
  const [statusFilter, setStatusFilter] = useState('All statuses');

  const filteredIncidents = incidents.filter(item => {
    const matchesSearch = item.studentName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.caseNo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = deptFilter === 'All departments' || item.department === deptFilter;
    const matchesCat = catFilter === 'All categories' || item.category === catFilter;
    const matchesSev = sevFilter === 'All severities' || item.severity === sevFilter;
    const matchesStatus = statusFilter === 'All statuses' || item.status === statusFilter;

    return matchesSearch && matchesDept && matchesCat && matchesSev && matchesStatus;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setDeptFilter('All departments');
    setCatFilter('All categories');
    setSevFilter('All severities');
    setStatusFilter('All statuses');
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">CASE TRACKING</p>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">Incident records</h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Search and filter every filed case. Filtering only narrows the view — existing records are never changed or removed.
        </p>
      </div>

      {/* Search and Filters Grid */}
      <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'} shadow-sm space-y-4`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">SEARCH</label>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Student name or case number" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-9 pr-3 py-2 text-xs rounded-xl border focus:ring-2 focus:ring-indigo-500 ${
                  theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">DEPARTMENT</label>
            <select 
              value={deptFilter} 
              onChange={(e) => setDeptFilter(e.target.value)}
              className={`w-full px-3 py-2 text-xs rounded-xl border ${theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
            >
              <option value="All departments">All departments</option>
              <option value="Preschool">Preschool</option>
              <option value="Primary">Primary</option>
              <option value="Secondary">Secondary</option>
              <option value="Junior High School">Junior High School</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">CATEGORY</label>
            <select 
              value={catFilter} 
              onChange={(e) => setCatFilter(e.target.value)}
              className={`w-full px-3 py-2 text-xs rounded-xl border ${theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
            >
              <option value="All categories">All categories</option>
              {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center pt-2">
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">SEVERITY</label>
            <select 
              value={sevFilter} 
              onChange={(e) => setSevFilter(e.target.value)}
              className={`w-full px-3 py-2 text-xs rounded-xl border ${theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
            >
              <option value="All severities">All severities</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">STATUS</label>
            <select 
              value={statusFilter} 
              onChange={(e) => setStatusFilter(e.target.value)}
              className={`w-full px-3 py-2 text-xs rounded-xl border ${theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
            >
              <option value="All statuses">All statuses</option>
              <option value="Open">Open</option>
              <option value="Under Investigation">Under Investigation</option>
              <option value="Resolved">Resolved</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          <div className="md:col-span-2 flex justify-end items-end h-full">
            <button 
              onClick={clearFilters}
              className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1 font-semibold"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Clear filters
            </button>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className={`rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'} shadow-sm overflow-hidden`}>
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
          <span className="text-xs font-semibold text-slate-500">{filteredIncidents.length} cases shown</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 text-slate-400 font-bold uppercase text-[10px]">
                <th className="p-4">Case no.</th>
                <th className="p-4">Student</th>
                <th className="p-4">Department</th>
                <th className="p-4">Incident date</th>
                <th className="p-4">Category</th>
                <th className="p-4">Severity</th>
                <th className="p-4">Status</th>
                <th className="p-4">Reported by</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredIncidents.map(inc => (
                <tr key={inc.caseNo} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="p-4 font-bold text-indigo-950 dark:text-indigo-300">
                    <button onClick={() => setSelectedCaseId(inc.caseNo)} className="hover:underline">
                      {inc.caseNo}
                    </button>
                  </td>
                  <td className="p-4">
                    <div className="font-bold text-slate-900 dark:text-white">{inc.studentName}</div>
                    <div className="text-[11px] text-slate-400">{inc.studentGrade}</div>
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">{inc.department}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">{inc.incidentDate}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">{inc.category}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-1.5">
                      <SeverityBadge severity={inc.severity} />
                      {inc.isHighAlert && (
                        <span className="px-1.5 py-0.5 bg-rose-600 text-white text-[9px] font-extrabold rounded">
                          HIGH ALERT
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 text-[11px] font-semibold rounded-md">
                      • {inc.status}
                    </span>
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">{inc.reportedBy}</td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => setSelectedCaseId(inc.caseNo)}
                        className="p-1.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => { setSelectedCaseId(inc.caseNo); setIsPrintMode(true); }}
                        className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                        title="Print PDF Report"
                      >
                        <Printer className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// --- CASE DETAIL PAGE ---
function CaseDetailPage({ caseData, incidents, setIncidents, setIsPrintMode, setActiveTab, showToast, theme }) {
  const [editModal, setEditModal] = useState(false);
  const [editedData, setEditedData] = useState({ ...caseData });
  const [resendingEmail, setResendingEmail] = useState(false);

  const handleUpdateCase = () => {
    const updatedIncidents = incidents.map(item => item.caseNo === caseData.caseNo ? editedData : item);
    setIncidents(updatedIncidents);
    setEditModal(false);
    showToast('Case updated successfully');
  };

  const handleResendEmail = () => {
    setResendingEmail(true);
    setTimeout(() => {
      setResendingEmail(false);
      const updated = incidents.map(item => {
        if (item.caseNo === caseData.caseNo) {
          return {
            ...item,
            parentsNotified: true,
            timeline: [
              ...item.timeline,
              { id: item.timeline.length + 1, text: 'Resent email notification to parents', date: new Date().toLocaleString() }
            ]
          };
        }
        return item;
      });
      setIncidents(updated);
      showToast('Emergency parent notification email dispatched!');
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <button 
          onClick={() => setActiveTab('records')}
          className="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1"
        >
          <ArrowLeft className="w-4 h-4" /> Back to incident records
        </button>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setEditModal(true)}
            className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-lg flex items-center gap-1.5"
          >
            <Edit3 className="w-3.5 h-3.5" /> Edit
          </button>
          <button 
            onClick={() => setIsPrintMode(true)}
            className="px-4 py-1.5 bg-indigo-950 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" /> Print report
          </button>
        </div>
      </div>

      {/* Title Header */}
      <div className="flex justify-between items-start">
        <div>
          <span className="text-xs font-bold text-slate-400">CASE {caseData.caseNo}</span>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mt-1">{caseData.studentName}</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {caseData.category} · Filed {caseData.incidentDate} by {caseData.reportedBy}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-md border border-amber-200">
            • {caseData.status}
          </span>
          <SeverityBadge severity={caseData.severity} />
        </div>
      </div>

      {/* Emergency Alert Banner if Critical */}
      {caseData.isHighAlert && (
        <div className="p-4 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 rounded-xl flex items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-rose-600 flex-shrink-0" />
          <div className="text-xs text-rose-950 dark:text-rose-200">
            <span className="font-bold">HIGH-ALERT INCIDENT · CRITICAL</span>
            <p>Emergency-level case. The guidance counselor should notify the parent or guardian right away.</p>
          </div>
        </div>
      )}

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left 2 Cols: Details & Signatures */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Narrative */}
          <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'} shadow-sm space-y-4`}>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b pb-3 border-slate-100 dark:border-slate-700">
              Incident narrative
            </h3>
            
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase">DESCRIPTION</span>
              <p className="text-xs text-slate-800 dark:text-slate-200 mt-1 leading-relaxed">{caseData.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">PERSONS INVOLVED</span>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-medium mt-0.5">{caseData.personsInvolved || 'N/A'}</p>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">WITNESSES</span>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-medium mt-0.5">{caseData.witnesses || 'N/A'}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">ACTION TAKEN</span>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-medium mt-0.5">{caseData.actionTaken || 'N/A'}</p>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">ADDITIONAL REMARKS</span>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-medium mt-0.5">{caseData.additionalRemarks || 'N/A'}</p>
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'} shadow-sm space-y-4`}>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b pb-3 border-slate-100 dark:border-slate-700">
              Supporting documents
            </h3>
            
            {caseData.documents && caseData.documents.length > 0 ? (
              <div className="space-y-2">
                {caseData.documents.map((doc, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-xs border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <Paperclip className="w-4 h-4 text-indigo-500" />
                      <span className="font-semibold">{doc.name}</span>
                      <span className="text-slate-400">({doc.size})</span>
                    </div>
                    <span className="text-[11px] font-semibold text-indigo-600 cursor-pointer">Preview</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-400 py-2">No supporting documents attached to this case.</p>
            )}
          </div>

          {/* Signatures Status */}
          <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'} shadow-sm space-y-4`}>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b pb-3 border-slate-100 dark:border-slate-700">
              Electronic signatures
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold text-slate-400">CLASS ADVISER</span>
                  {caseData.signatures?.teacher?.signed ? <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-bold">✓ Signed</span> : <span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-bold">Pending</span>}
                </div>
                <p className="font-bold text-slate-900 dark:text-white">{caseData.signatures?.teacher?.name || 'N/A'}</p>
                <p className="text-[10px] text-slate-400 mt-1">{caseData.signatures?.teacher?.date}</p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold text-slate-400">PARENT / GUARDIAN</span>
                  {caseData.signatures?.parent?.signed ? <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-bold">✓ Signed</span> : <span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-bold">Pending</span>}
                </div>
                <p className="font-bold text-slate-900 dark:text-white">{caseData.signatures?.parent?.name || 'Awaiting signature'}</p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold text-slate-400">SCHOOL PRINCIPAL</span>
                  {caseData.signatures?.principal?.signed ? <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-bold">✓ Signed</span> : <span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-bold">Pending</span>}
                </div>
                <p className="font-bold text-slate-900 dark:text-white">{caseData.signatures?.principal?.name || 'Awaiting signature'}</p>
                <p className="text-[10px] text-slate-400 mt-1">{caseData.signatures?.principal?.date}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Parent Notification & Case Details */}
        <div className="space-y-6">
          {/* Parent Notification Box */}
          <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'} shadow-sm space-y-4`}>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center justify-between">
              Parent notification
              <Mail className="w-4 h-4 text-indigo-500" />
            </h3>
            
            <p className="text-xs text-slate-500">
              Guidance counselor only · used for emergency and high-alert cases.
            </p>

            <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-xs space-y-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span className="font-bold text-slate-800 dark:text-slate-200">Parents notified</span>
              </div>
              <p className="text-[11px] text-slate-400 pl-6">siheman2020@gmail.com</p>
            </div>

            <button 
              onClick={handleResendEmail}
              disabled={resendingEmail}
              className="w-full py-2.5 bg-indigo-950 hover:bg-indigo-900 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              <Mail className="w-3.5 h-3.5" />
              {resendingEmail ? 'Sending email...' : 'Resend email to parents'}
            </button>
          </div>

          {/* Case Metadata Details */}
          <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'} shadow-sm space-y-4 text-xs`}>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b pb-3 border-slate-100 dark:border-slate-700">
              Case details
            </h3>

            <div className="space-y-3">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">STUDENT</span>
                <p className="font-bold text-slate-900 dark:text-white mt-0.5">{caseData.studentName} ({caseData.studentId})</p>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">LOCATION</span>
                <p className="text-slate-700 dark:text-slate-300 font-medium mt-0.5">{caseData.location}</p>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">DATE & TIME</span>
                <p className="text-slate-700 dark:text-slate-300 font-medium mt-0.5">{caseData.incidentDate} · {caseData.incidentTime}</p>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">DEPARTMENT</span>
                <p className="text-slate-700 dark:text-slate-300 font-medium mt-0.5">{caseData.department} - {caseData.studentGrade}</p>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">REPORTED BY</span>
                <p className="text-slate-700 dark:text-slate-300 font-medium mt-0.5">{caseData.reportedBy}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EDIT MODAL */}
      {editModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`w-full max-w-lg rounded-2xl p-6 space-y-4 shadow-2xl ${
            theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
          }`}>
            <h3 className="font-bold text-sm">Edit incident details</h3>
            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">INCIDENT DESCRIPTION</label>
                <textarea 
                  rows={3} 
                  value={editedData.description} 
                  onChange={(e) => setEditedData({ ...editedData, description: e.target.value })}
                  className={`w-full p-2.5 rounded-xl border ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">SEVERITY</label>
                <select 
                  value={editedData.severity}
                  onChange={(e) => setEditedData({ ...editedData, severity: e.target.value })}
                  className={`w-full p-2.5 rounded-xl border ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Critical">Critical</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button onClick={() => setEditModal(false)} className="px-4 py-2 text-xs font-semibold text-slate-500">Cancel</button>
              <button onClick={handleUpdateCase} className="px-4 py-2 text-xs font-bold bg-indigo-950 text-white rounded-xl">Save changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- OFFICIAL PRINT / PDF REPORT VIEW ---
function PrintReportView({ caseData, schoolProfile, onClose }) {
  const triggerPrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8 flex flex-col items-center">
      {/* Action Buttons Top (Hidden on Print) */}
      <div className="w-full max-w-3xl flex items-center justify-between mb-6 print:hidden">
        <button onClick={onClose} className="px-4 py-2 bg-white text-slate-700 text-xs font-semibold rounded-lg shadow-sm border border-slate-200">
          ← Back to case
        </button>
        <button onClick={triggerPrint} className="px-5 py-2 bg-indigo-950 text-white text-xs font-bold rounded-lg shadow-md flex items-center gap-2">
          <Printer className="w-4 h-4" /> Print / Save as PDF
        </button>
      </div>

      {/* Printable Sheet */}
      <div className="w-full max-w-3xl bg-white p-10 rounded-xl shadow-xl border border-slate-300 text-slate-900 font-serif leading-relaxed print:shadow-none print:border-none print:w-full print:p-0">
        
        {/* Header Branding */}
        <div className="text-center border-b-2 border-slate-900 pb-4 mb-6">
          <div className="w-12 h-12 rounded-full border-2 border-slate-900 flex items-center justify-center font-bold text-xl mx-auto mb-2">
            S
          </div>
          <h2 className="text-xs font-bold tracking-widest uppercase">{schoolProfile.schoolName}</h2>
          <h1 className="text-lg font-black tracking-wide uppercase mt-1">{schoolProfile.officeName}</h1>
          <p className="text-[11px] font-sans text-slate-500">{schoolProfile.schoolAddress}</p>
        </div>

        {/* Case Header */}
        <div className="flex justify-between items-center border-b pb-3 mb-6 font-sans">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-indigo-950">STUDENT INCIDENT REPORT</h2>
          <div className="text-right">
            <span className="text-[10px] text-slate-400 font-bold uppercase block">CASE NUMBER</span>
            <span className="text-sm font-bold text-slate-900">{caseData.caseNo}</span>
          </div>
        </div>

        {/* Section I: Student Information */}
        <div className="mb-6 font-sans">
          <h3 className="text-xs font-bold uppercase tracking-wider bg-slate-100 p-1.5 border-l-4 border-slate-800 mb-3">
            I. STUDENT INFORMATION
          </h3>
          <div className="grid grid-cols-2 gap-y-2 text-xs">
            <div><span className="text-slate-500">STUDENT NAME:</span> <span className="font-bold">{caseData.studentName}</span></div>
            <div><span className="text-slate-500">STUDENT ID:</span> <span className="font-bold">{caseData.studentId}</span></div>
            <div><span className="text-slate-500">DEPARTMENT:</span> <span className="font-bold">{caseData.department}</span></div>
            <div><span className="text-slate-500">GRADE / YEAR LEVEL:</span> <span className="font-bold">{caseData.studentGrade}</span></div>
            <div><span className="text-slate-500">REPORTED BY:</span> <span className="font-bold">{caseData.reportedBy}</span></div>
          </div>
        </div>

        {/* Section II: Incident Details */}
        <div className="mb-6 font-sans">
          <h3 className="text-xs font-bold uppercase tracking-wider bg-slate-100 p-1.5 border-l-4 border-slate-800 mb-3">
            II. INCIDENT DETAILS
          </h3>
          <div className="grid grid-cols-2 gap-y-2 text-xs">
            <div><span className="text-slate-500">DATE OF INCIDENT:</span> <span className="font-bold">{caseData.incidentDate}</span></div>
            <div><span className="text-slate-500">TIME:</span> <span className="font-bold">{caseData.incidentTime}</span></div>
            <div><span className="text-slate-500">LOCATION:</span> <span className="font-bold">{caseData.location}</span></div>
            <div><span className="text-slate-500">CATEGORY:</span> <span className="font-bold">{caseData.category}</span></div>
            <div><span className="text-slate-500">SEVERITY:</span> <span className="font-bold">{caseData.severity}</span></div>
            <div><span className="text-slate-500">CASE STATUS:</span> <span className="font-bold">{caseData.status}</span></div>
          </div>
        </div>

        {/* Section III: Description */}
        <div className="mb-6 font-sans">
          <h3 className="text-xs font-bold uppercase tracking-wider bg-slate-100 p-1.5 border-l-4 border-slate-800 mb-2">
            III. INCIDENT DESCRIPTION
          </h3>
          <p className="text-xs text-slate-800 leading-relaxed p-2 bg-slate-50 rounded border border-slate-200">
            {caseData.description}
          </p>
        </div>

        {/* Section IV: Action Taken & Remarks */}
        <div className="mb-8 font-sans">
          <h3 className="text-xs font-bold uppercase tracking-wider bg-slate-100 p-1.5 border-l-4 border-slate-800 mb-2">
            IV. ACTION TAKEN & REMARKS
          </h3>
          <div className="text-xs space-y-2">
            <div><span className="text-slate-500 font-bold">ACTION TAKEN:</span> {caseData.actionTaken || 'N/A'}</div>
            <div><span className="text-slate-500 font-bold">REMARKS:</span> {caseData.additionalRemarks || 'N/A'}</div>
          </div>
        </div>

        {/* Section V: Signatures Block */}
        <div className="pt-6 border-t font-sans">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-8 text-center">OFFICIAL SIGNATURES</h3>
          <div className="grid grid-cols-3 gap-6 text-center text-xs">
            <div>
              <div className="h-12 border-b border-slate-800 flex items-end justify-center pb-1">
                {caseData.signatures?.teacher?.signatureData ? (
                  <img src={caseData.signatures.teacher.signatureData} alt="Sig" className="h-10 object-contain" />
                ) : (
                  <span className="font-bold text-slate-700">{caseData.signatures?.teacher?.name || 'Heman'}</span>
                )}
              </div>
              <p className="font-bold mt-1 text-[11px]">CLASS ADVISER / TEACHER</p>
            </div>

            <div>
              <div className="h-12 border-b border-slate-800 flex items-end justify-center pb-1">
                {caseData.signatures?.parent?.signatureData ? (
                  <img src={caseData.signatures.parent.signatureData} alt="Sig" className="h-10 object-contain" />
                ) : (
                  <span className="text-slate-400 italic">Pending Signature</span>
                )}
              </div>
              <p className="font-bold mt-1 text-[11px]">PARENT / GUARDIAN</p>
            </div>

            <div>
              <div className="h-12 border-b border-slate-800 flex items-end justify-center pb-1">
                {caseData.signatures?.principal?.signatureData ? (
                  <img src={caseData.signatures.principal.signatureData} alt="Sig" className="h-10 object-contain" />
                ) : (
                  <span className="font-bold text-slate-700">{caseData.signatures?.principal?.name || 'Fred'}</span>
                )}
              </div>
              <p className="font-bold mt-1 text-[11px]">SCHOOL PRINCIPAL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- STUDENTS LIST PAGE ---
function StudentsPage({ students, incidents, theme }) {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">STUDENT DIRECTORY</p>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">Students</h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Enrolled student list and history tracking.</p>
      </div>

      <div className={`rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'} shadow-sm overflow-hidden`}>
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 text-slate-400 font-bold uppercase text-[10px]">
              <th className="p-4">Student ID</th>
              <th className="p-4">Student Name</th>
              <th className="p-4">Department</th>
              <th className="p-4">Section / Grade</th>
              <th className="p-4">Total Incidents</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {students.map(s => {
              const count = incidents.filter(i => i.studentId === s.id).length;
              return (
                <tr key={s.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40">
                  <td className="p-4 font-bold text-indigo-600 dark:text-indigo-400">{s.id}</td>
                  <td className="p-4 font-bold text-slate-900 dark:text-white">{s.name}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">{s.department}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">{s.section}</td>
                  <td className="p-4 font-bold text-slate-900 dark:text-white">{count}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- REPORTS & ANALYTICS PAGE ---
function ReportsAnalyticsPage({ incidents, theme, showToast }) {
  const exportSummaryCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8,Category,Total Cases\n" + 
      incidents.map(e => `"${e.category}",1`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "summary_report.csv");
    document.body.appendChild(link);
    link.click();
    showToast("Summary CSV exported successfully!");
  };

  const exportCasesCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8,CaseNo,Student,Department,Date,Category,Severity,Status\n" + 
      incidents.map(e => `"${e.caseNo}","${e.studentName}","${e.department}","${e.incidentDate}","${e.category}","${e.severity}","${e.status}"`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "cases_report.csv");
    document.body.appendChild(link);
    link.click();
    showToast("Cases CSV exported successfully!");
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">INSIGHTS</p>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">Reports & analytics</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Summaries of incidents by department, category, severity, status and date. Export the data or print.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={exportSummaryCSV}
            className="px-3.5 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-600" /> Summary CSV
          </button>
          <button 
            onClick={exportCasesCSV}
            className="px-3.5 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-xl flex items-center gap-2 shadow-sm"
          >
            <Download className="w-4 h-4 text-indigo-600" /> Cases CSV
          </button>
        </div>
      </div>

      {/* Date Range Controls */}
      <div className={`p-4 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'} shadow-sm flex items-center gap-4 text-xs`}>
        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase">FROM</span>
          <input type="date" defaultValue="2026-01-01" className="block mt-1 px-3 py-1.5 rounded-lg border dark:bg-slate-900 dark:border-slate-700" />
        </div>
        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase">TO</span>
          <input type="date" defaultValue="2026-11-07" className="block mt-1 px-3 py-1.5 rounded-lg border dark:bg-slate-900 dark:border-slate-700" />
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <StatCard title="TOTAL CASES" value={incidents.length} subtitle="All recorded" theme={theme} />
        <StatCard title="OPEN" value={incidents.filter(i => i.status === 'Open').length} subtitle="Awaiting action" theme={theme} />
        <StatCard title="UNDER INVESTIGATION" value={0} subtitle="In review" theme={theme} />
        <StatCard title="RESOLVED" value={0} subtitle="Completed" theme={theme} />
        <StatCard title="CLOSED" value={0} subtitle="Archived" theme={theme} />
      </div>
    </div>
  );
}

// --- USER MANAGEMENT PAGE ---
function UserManagementPage({ teachers, setTeachers, showToast, theme }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTeacher, setNewTeacher] = useState({ name: '', email: '', department: 'Primary', position: "Subject Teacher's" });

  const toggleTeacherStatus = (id) => {
    setTeachers(teachers.map(t => t.id === id ? { ...t, access: t.access === 'Active' ? 'Inactive' : 'Active' } : t));
    showToast('Teacher status updated');
  };

  const handleAddTeacher = () => {
    if (!newTeacher.name || !newTeacher.email) {
      showToast('Please complete name and email', 'error');
      return;
    }
    setTeachers([...teachers, { ...newTeacher, id: `t-${Date.now()}`, access: 'Active' }]);
    setShowAddModal(false);
    showToast('Teacher account created successfully');
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">ADMINISTRATION</p>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">User management</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Create teacher accounts, assign departments and control who can access student records.
          </p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-indigo-950 hover:bg-indigo-900 text-white font-semibold text-xs rounded-xl flex items-center gap-2 shadow-sm"
        >
          <Plus className="w-4 h-4" /> Add teacher
        </button>
      </div>

      <div className={`rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'} shadow-sm overflow-hidden`}>
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 font-bold text-xs">
          Teacher accounts
        </div>
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 text-slate-400 font-bold uppercase text-[10px]">
              <th className="p-4">Teacher</th>
              <th className="p-4">Department</th>
              <th className="p-4">Position</th>
              <th className="p-4">Access</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {teachers.map(t => (
              <tr key={t.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40">
                <td className="p-4">
                  <div className="font-bold text-slate-900 dark:text-white">{t.name}</div>
                  <div className="text-[11px] text-slate-400">{t.email}</div>
                </td>
                <td className="p-4 text-slate-600 dark:text-slate-300">{t.department}</td>
                <td className="p-4 text-slate-600 dark:text-slate-300">{t.position}</td>
                <td className="p-4">
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                    t.access === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {t.access}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button 
                    onClick={() => toggleTeacherStatus(t.id)}
                    className="text-xs text-rose-600 dark:text-rose-400 font-semibold hover:underline"
                  >
                    {t.access === 'Active' ? 'Deactivate' : 'Activate'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Teacher Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`w-full max-w-md rounded-2xl p-6 space-y-4 shadow-2xl ${
            theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
          }`}>
            <h3 className="font-bold text-sm">Add New Teacher Account</h3>
            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">NAME</label>
                <input 
                  type="text" 
                  value={newTeacher.name} 
                  onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })} 
                  className={`w-full p-2.5 rounded-xl border ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">EMAIL</label>
                <input 
                  type="email" 
                  value={newTeacher.email} 
                  onChange={(e) => setNewTeacher({ ...newTeacher, email: e.target.value })} 
                  className={`w-full p-2.5 rounded-xl border ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button onClick={() => setShowAddModal(false)} className="px-4 py-2 text-xs font-semibold text-slate-500">Cancel</button>
              <button onClick={handleAddTeacher} className="px-4 py-2 text-xs font-bold bg-indigo-950 text-white rounded-xl">Create teacher</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- SETTINGS PAGE ---
function SettingsPage({ theme, toggleTheme, categories, setCategories, schoolProfile, setSchoolProfile, showToast }) {
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCatSeverity, setNewCatSeverity] = useState('Low');

  const handleAddCategory = () => {
    if (!newCategoryName.trim()) return;
    setCategories([...categories, {
      id: `cat-${Date.now()}`,
      name: newCategoryName,
      defaultSeverity: newCatSeverity,
      active: true
    }]);
    setNewCategoryName('');
    showToast('Category added');
  };

  const toggleCategoryActive = (id) => {
    setCategories(categories.map(c => c.id === id ? { ...c, active: !c.active } : c));
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">ADMINISTRATION</p>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">Settings</h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          School details used on printed reports, incident categories and your account preferences.
        </p>
      </div>

      {/* School Profile & Appearance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className={`lg:col-span-2 p-6 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'} shadow-sm space-y-4`}>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b pb-3 border-slate-100 dark:border-slate-700">
            School profile
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">SCHOOL NAME</label>
              <input 
                type="text" 
                value={schoolProfile.schoolName}
                onChange={(e) => setSchoolProfile({ ...schoolProfile, schoolName: e.target.value })}
                className={`w-full p-2.5 rounded-xl border ${theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">ACADEMIC YEAR</label>
              <input 
                type="text" 
                value={schoolProfile.academicYear}
                onChange={(e) => setSchoolProfile({ ...schoolProfile, academicYear: e.target.value })}
                className={`w-full p-2.5 rounded-xl border ${theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">PRINCIPAL</label>
              <input 
                type="text" 
                value={schoolProfile.principal}
                onChange={(e) => setSchoolProfile({ ...schoolProfile, principal: e.target.value })}
                className={`w-full p-2.5 rounded-xl border ${theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">GUIDANCE COUNSELOR</label>
              <input 
                type="text" 
                value={schoolProfile.guidanceCounselor}
                onChange={(e) => setSchoolProfile({ ...schoolProfile, guidanceCounselor: e.target.value })}
                className={`w-full p-2.5 rounded-xl border ${theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
              />
            </div>
          </div>

          <button 
            onClick={() => showToast('School profile saved successfully')}
            className="px-4 py-2 bg-indigo-950 text-white font-bold text-xs rounded-xl shadow-sm"
          >
            Save school profile
          </button>
        </div>

        {/* Theme Appearance Selector */}
        <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'} shadow-sm space-y-4`}>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b pb-3 border-slate-100 dark:border-slate-700">
            Appearance
          </h3>
          <p className="text-xs text-slate-500">Choose how the workspace looks on this device.</p>
          
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => theme !== 'light' && toggleTheme()}
              className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 ${
                theme === 'light' ? 'bg-indigo-50 border-indigo-500 text-indigo-950' : 'bg-slate-900 border-slate-700 text-slate-400'
              }`}
            >
              <Sun className="w-4 h-4" /> Light
            </button>
            <button 
              onClick={() => theme !== 'dark' && toggleTheme()}
              className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 ${
                theme === 'dark' ? 'bg-indigo-950 border-indigo-500 text-white' : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}
            >
              <Moon className="w-4 h-4" /> Dark
            </button>
          </div>
        </div>
      </div>

      {/* Incident Categories Manager */}
      <div className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-white border-slate-200'} shadow-sm space-y-4`}>
        <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b pb-3 border-slate-100 dark:border-slate-700">
          Incident categories
        </h3>
        <p className="text-xs text-slate-500">Categories available when filing a report, each with a default severity.</p>

        {/* Add New Category Input */}
        <div className="flex gap-3">
          <input 
            type="text" 
            placeholder="New category, e.g. Bullying"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            className={`flex-1 p-2.5 text-xs rounded-xl border ${theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
          />
          <select 
            value={newCatSeverity} 
            onChange={(e) => setNewCatSeverity(e.target.value)}
            className={`p-2.5 text-xs rounded-xl border ${theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
          <button 
            onClick={handleAddCategory}
            className="px-4 py-2 bg-indigo-950 text-white text-xs font-bold rounded-xl flex items-center gap-1"
          >
            <Plus className="w-4 h-4" /> Add
          </button>
        </div>

        {/* Categories List */}
        <div className="space-y-2 pt-2">
          {categories.map(cat => (
            <div key={cat.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
              <div>
                <span className="font-bold text-slate-900 dark:text-white">{cat.name}</span>
                <span className="text-[11px] text-slate-400 ml-2">Default severity: {cat.defaultSeverity}</span>
              </div>
              <button 
                onClick={() => toggleCategoryActive(cat.id)}
                className={`w-9 h-5 rounded-full transition-colors relative ${cat.active ? 'bg-indigo-950' : 'bg-slate-300'}`}
              >
                <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${cat.active ? 'right-0.5' : 'left-0.5'}`}></span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}