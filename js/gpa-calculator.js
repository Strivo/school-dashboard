checkAuth();

let courses = [];


function addCourse() {
    const courseId = Date.now();
    const courseDiv = document.createElement('div');
    courseDiv.className = 'course-input';
    courseDiv.id = `course-${courseId}`;
    courseDiv.innerHTML = `
        <input type="text" placeholder="Course name" class="course-name">
        <input type="number" placeholder="Credits" min="1" max="6" class="course-credits">
        <select class="course-grade">
            <option value="">Grade</option>
            <option value="4.0">A (4.0)</option>
            <option value="3.7">A- (3.7)</option>
            <option value="3.3">B+ (3.3)</option>
            <option value="3.0">B (3.0)</option>
            <option value="2.7">B- (2.7)</option>
            <option value="2.3">C+ (2.3)</option>
            <option value="2.0">C (2.0)</option>
            <option value="1.7">C- (1.7)</option>
            <option value="1.3">D+ (1.3)</option>
            <option value="1.0">D (1.0)</option>
            <option value="0.0">F (0.0)</option>
        </select>
        <button onclick="removeCourse(${courseId})" class="btn-delete"><i class="fas fa-times"></i></button>
    `;
    
    document.getElementById('courses-container').appendChild(courseDiv);
}


function removeCourse(id) {
    document.getElementById(`course-${id}`).remove();
}


function calculateGPA() {
    const courseInputs = document.querySelectorAll('.course-input');
    
    if (courseInputs.length === 0) {
        alert('Please add at least one course');
        return;
    }
    
    let totalPoints = 0;
    let totalCredits = 0;
    const breakdown = [];
    
    courseInputs.forEach(course => {
        const name = course.querySelector('.course-name').value;
        const credits = parseFloat(course.querySelector('.course-credits').value);
        const grade = parseFloat(course.querySelector('.course-grade').value);
        
        if (name && credits && grade !== '') {
            totalPoints += credits * grade;
            totalCredits += credits;
            breakdown.push({ name, credits, grade });
        }
    });
    
    if (totalCredits === 0) {
        alert('Please fill in all course information');
        return;
    }
    
    const gpa = totalPoints / totalCredits;
    document.getElementById('gpa-result').textContent = gpa.toFixed(2);
    
    const breakdownDiv = document.getElementById('grade-breakdown');
    breakdownDiv.innerHTML = '<h4>Course Breakdown</h4>' + breakdown.map(c => 
        `<p>${c.name}: ${c.grade.toFixed(1)} (${c.credits} credits)</p>`
    ).join('');
    
    courses = breakdown;
}

function saveGPA() {
    const gpa = parseFloat(document.getElementById('gpa-result').textContent);
    
    if (isNaN(gpa) || gpa === 0) {
        alert('Please calculate GPA first');
        return;
    }
    
    const gpaHistory = loadUserData('gpaHistory') || [];
    gpaHistory.push({
        gpa,
        courses,
        date: new Date().toISOString()
    });
    
    saveUserData('gpaHistory', gpaHistory);
    alert('GPA saved successfully!');
    displayGPAHistory();
}


function displayGPAHistory() {
    const gpaHistory = loadUserData('gpaHistory') || [];
    const container = document.getElementById('gpa-history-list');
    
    if (gpaHistory.length === 0) {
        container.innerHTML = '<p>No GPA history yet</p>';
        return;
    }
    
    container.innerHTML = gpaHistory.slice().reverse().map((entry, index) => `
        <div style="background: #f7fafc; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
            <h4>GPA: ${entry.gpa.toFixed(2)}</h4>
            <p style="font-size: 0.9em; color: #666;">${formatDate(entry.date)}</p>
        </div>
    `).join('');
}


addCourse();
addCourse();
addCourse();
displayGPAHistory();
