checkAuth();

let timer;
let isRunning = false;
let timeLeft = 25 * 60; // 25 minutes in seconds
let currentMode = 'work';
let sessionsToday = 0;

const settings = {
    work: 25,
    break: 5,
    longBreak: 15
};

// Load settings
function loadSettings() {
    const saved = loadUserData('pomodoroSettings');
    if (saved) {
        settings.work = saved.work || 25;
        settings.break = saved.break || 5;
        settings.longBreak = saved.longBreak || 15;
        
        document.getElementById('work-duration').value = settings.work;
        document.getElementById('break-duration').value = settings.break;
        document.getElementById('long-break-duration').value = settings.longBreak;
    }
    
    timeLeft = settings.work * 60;
    updateDisplay();
}

// Save settings
function saveSettings() {
    settings.work = parseInt(document.getElementById('work-duration').value);
    settings.break = parseInt(document.getElementById('break-duration').value);
    settings.longBreak = parseInt(document.getElementById('long-break-duration').value);
    
    saveUserData('pomodoroSettings', settings);
    alert('Settings saved!');
    resetTimer();
}

// Update timer display
function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer-display').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Start timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        document.getElementById('start-btn').disabled = true;
        document.getElementById('pause-btn').disabled = false;
        document.getElementById('timer-status').textContent = 'Focus time!';
        
        timer = setInterval(() => {
            timeLeft--;
            updateDisplay();
            
            if (timeLeft === 0) {
                clearInterval(timer);
                isRunning = false;
                completeSession();
            }
        }, 1000);
    }
}

// Pause timer
function pauseTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        document.getElementById('start-btn').disabled = false;
        document.getElementById('pause-btn').disabled = true;
        document.getElementById('timer-status').textContent = 'Paused';
    }
}

// Reset timer
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    
    if (currentMode === 'work') {
        timeLeft = settings.work * 60;
    } else if (currentMode === 'break') {
        timeLeft = settings.break * 60;
    } else {
        timeLeft = settings.longBreak * 60;
    }
    
    updateDisplay();
    document.getElementById('start-btn').disabled = false;
    document.getElementById('pause-btn').disabled = true;
    document.getElementById('timer-status').textContent = 'Ready to focus?';
}

// Complete session
function completeSession() {
    sessionsToday++;
    
    // Log the session
    const studyLog = loadUserData('studyLog') || [];
    studyLog.push({
        date: new Date().toISOString(),
        duration: settings.work,
        type: currentMode
    });
    saveUserData('studyLog', studyLog);
    
    alert('Session complete! Great work!');
    updateStats();
    displayStudyLog();
    resetTimer();
}

// Mode buttons
document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        currentMode = this.dataset.mode;
        resetTimer();
    });
});

// Update statistics
function updateStats() {
    const studyLog = loadUserData('studyLog') || [];
    const today = new Date().toDateString();
    const todayLogs = studyLog.filter(log => new Date(log.date).toDateString() === today);
    
    document.getElementById('sessions-count').textContent = todayLogs.length;
    
    const totalMinutes = todayLogs.reduce((sum, log) => sum + log.duration, 0);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    document.getElementById('total-time').textContent = `${hours}h ${minutes}m`;
}

// Display study log
function displayStudyLog() {
    const studyLog = loadUserData('studyLog') || [];
    const today = new Date().toDateString();
    const todayLogs = studyLog.filter(log => new Date(log.date).toDateString() === today);
    
    const container = document.getElementById('study-log-container');
    
    if (todayLogs.length === 0) {
        container.innerHTML = '<p>No sessions today yet</p>';
        return;
    }
    
    container.innerHTML = todayLogs.map(log => {
        const time = new Date(log.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        return `
            <div style="background: #f7fafc; padding: 10px; border-radius: 6px; margin-bottom: 5px;">
                <p><i class="fas fa-clock"></i> ${log.duration} min session at ${time}</p>
            </div>
        `;
    }).join('');
}

loadSettings();
updateStats();
displayStudyLog();
