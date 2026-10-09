checkAuth();

// Load Chart.js data
function loadAnalytics() {
    const studyLog = loadUserData('studyLog') || [];
    const assignments = loadUserData('assignments') || [];
    const gpaHistory = loadUserData('gpaHistory') || [];
    
    createStudyTimeChart(studyLog);
    createCompletionChart(assignments);
    createGPAChart(gpaHistory);
    createPriorityChart(assignments);
    updateSummary(studyLog, assignments);
}

// Study Time Chart (Last 7 days)
function createStudyTimeChart(studyLog) {
    const last7Days = [];
    const studyData = [];
    
    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateStr = date.toDateString();
        last7Days.push(date.toLocaleDateString('en-US', { weekday: 'short' }));
        
        const dayLogs = studyLog.filter(log => new Date(log.date).toDateString() === dateStr);
        const totalMinutes = dayLogs.reduce((sum, log) => sum + log.duration, 0);
        studyData.push(totalMinutes / 60); // Convert to hours
    }
    
    const ctx = document.getElementById('studyTimeChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: last7Days,
            datasets: [{
                label: 'Study Hours',
                data: studyData,
                backgroundColor: 'rgba(102, 126, 234, 0.6)',
                borderColor: 'rgba(102, 126, 234, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Assignment Completion Rate
function createCompletionChart(assignments) {
    const completed = assignments.filter(a => a.completed).length;
    const pending = assignments.filter(a => !a.completed).length;
    
    const ctx = document.getElementById('completionChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'Pending'],
            datasets: [{
                data: [completed, pending],
                backgroundColor: [
                    'rgba(72, 187, 120, 0.8)',
                    'rgba(237, 137, 54, 0.8)'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true
        }
    });
}

// GPA Trend
function createGPAChart(gpaHistory) {
    const labels = gpaHistory.map((_, i) => `Entry ${i + 1}`);
    const data = gpaHistory.map(entry => entry.gpa);
    
    const ctx = document.getElementById('gpaChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'GPA',
                data: data,
                borderColor: 'rgba(102, 126, 234, 1)',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 4.0
                }
            }
        }
    });
}

// Priority Distribution
function createPriorityChart(assignments) {
    const high = assignments.filter(a => a.priority === 'high' && !a.completed).length;
    const medium = assignments.filter(a => a.priority === 'medium' && !a.completed).length;
    const low = assignments.filter(a => a.priority === 'low' && !a.completed).length;
    
    const ctx = document.getElementById('priorityChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['High', 'Medium', 'Low'],
            datasets: [{
                data: [high, medium, low],
                backgroundColor: [
                    'rgba(229, 62, 62, 0.8)',
                    'rgba(237, 137, 54, 0.8)',
                    'rgba(72, 187, 120, 0.8)'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true
        }
    });
}

// Update summary cards
function updateSummary(studyLog, assignments) {
    // Total study hours this week
    const weekStart = new Date();
    weekStart.setDate(weekStart.getDate() - 7);
    const weekLogs = studyLog.filter(log => new Date(log.date) >= weekStart);
    const totalMinutes = weekLogs.reduce((sum, log) => sum + log.duration, 0);
    document.getElementById('total-hours').textContent = Math.floor(totalMinutes / 60);
    
    // Completed assignments
    const completed = assignments.filter(a => a.completed).length;
    document.getElementById('completed-count').textContent = completed;
    
    // Average session
    const avgSession = weekLogs.length > 0 ? Math.floor(totalMinutes / weekLogs.length) : 0;
    document.getElementById('avg-session').textContent = avgSession + ' min';
    
    // Productivity score
    const productivity = assignments.length > 0 
        ? Math.round((completed / assignments.length) * 100) 
        : 0;
    document.getElementById('productivity-score').textContent = productivity + '%';
}

loadAnalytics();
