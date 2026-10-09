checkAuth();


function loadDashboard() {
    
    const assignments = loadUserData('assignments') || [];
    const activeAssignments = assignments.filter(a => !a.completed).length;
    const completedTasks = assignments.filter(a => a.completed).length;
    
    document.getElementById('active-assignments').textContent = activeAssignments;
    document.getElementById('completed-tasks').textContent = completedTasks;
    
    const gpaHistory = loadUserData('gpaHistory') || [];
    const latestGPA = gpaHistory.length > 0 ? gpaHistory[gpaHistory.length - 1].gpa : 0;
    document.getElementById('current-gpa').textContent = latestGPA.toFixed(2);
    
    
    const studyLog = loadUserData('studyLog') || [];
    const today = new Date().toDateString();
    const todayLogs = studyLog.filter(log => new Date(log.date).toDateString() === today);
    const totalMinutes = todayLogs.reduce((sum, log) => sum + log.duration, 0);
    const hours = Math.floor(totalMinutes / 60);
    document.getElementById('study-time').textContent = `${hours}h`;
    
    
    displayUpcomingDeadlines(assignments);
}

function displayUpcomingDeadlines(assignments) {
    const container = document.getElementById('upcoming-deadlines');
    const upcoming = assignments
        .filter(a => !a.completed)
        .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
        .slice(0, 5);
    
    if (upcoming.length === 0) {
        container.innerHTML = '<p style="color: white;">No upcoming deadlines</p>';
        return;
    }
    
    container.innerHTML = upcoming.map(assignment => {
        const days = daysUntil(assignment.deadline);
        const urgency = days <= 2 ? 'urgent' : days <= 7 ? 'soon' : 'later';
        
        return `
            <div class="assignment-item ${assignment.priority}" style="margin-bottom: 10px;">
                <div class="assignment-info">
                    <h3>${assignment.name}</h3>
                    <p>${assignment.subject} • Due: ${formatDate(assignment.deadline)} (${days} days)</p>
                </div>
            </div>
        `;
    }).join('');
}

loadDashboard();
