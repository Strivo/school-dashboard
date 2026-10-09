checkAuth();

let assignments = loadUserData('assignments') || [];
let currentFilter = 'all';


document.getElementById('assignment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const assignment = {
        id: Date.now(),
        name: document.getElementById('task-name').value,
        subject: document.getElementById('subject').value,
        deadline: document.getElementById('deadline').value,
        priority: document.getElementById('priority').value,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    assignments.push(assignment);
    saveUserData('assignments', assignments);
    
    this.reset();
    displayAssignments();
});

function displayAssignments() {
    const container = document.getElementById('assignments-container');
    
    let filtered = assignments;
    if (currentFilter !== 'all') {
        if (currentFilter === 'completed') {
            filtered = assignments.filter(a => a.completed);
        } else {
            filtered = assignments.filter(a => a.priority === currentFilter && !a.completed);
        }
    }
    
    if (filtered.length === 0) {
        container.innerHTML = '<p style="color: white; text-align: center;">No assignments found</p>';
        return;
    }
    
    container.innerHTML = filtered
        .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
        .map(assignment => {
            const days = daysUntil(assignment.deadline);
            
            return `
                <div class="assignment-item ${assignment.priority} ${assignment.completed ? 'completed' : ''}">
                    <div class="assignment-info">
                        <h3>${assignment.name}</h3>
                        <p>${assignment.subject} • Due: ${formatDate(assignment.deadline)} • ${days} days remaining</p>
                    </div>
                    <div class="assignment-actions">
                        ${!assignment.completed ? 
                            `<button class="btn-complete" onclick="toggleComplete(${assignment.id})"><i class="fas fa-check"></i> Complete</button>` :
                            `<button class="btn-secondary" onclick="toggleComplete(${assignment.id})"><i class="fas fa-undo"></i> Undo</button>`
                        }
                        <button class="btn-delete" onclick="deleteAssignment(${assignment.id})"><i class="fas fa-trash"></i> Delete</button>
                    </div>
                </div>
            `;
        }).join('');
}


function toggleComplete(id) {
    const assignment = assignments.find(a => a.id === id);
    if (assignment) {
        assignment.completed = !assignment.completed;
        saveUserData('assignments', assignments);
        displayAssignments();
    }
}

function deleteAssignment(id) {
    if (confirm('Are you sure you want to delete this assignment?')) {
        assignments = assignments.filter(a => a.id !== id);
        saveUserData('assignments', assignments);
        displayAssignments();
    }
}


document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.dataset.filter;
        displayAssignments();
    });
});

displayAssignments();
