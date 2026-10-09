// Utility functions used across the application

// Check if user is logged in
function checkAuth() {
    const user = localStorage.getItem('currentUser');
    if (!user) {
        window.location.href = 'index.html';
        return null;
    }
    return JSON.parse(user);
}

// Logout function
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Display user name in sidebar
function displayUserName() {
    const user = checkAuth();
    if (user) {
        const userNameElements = document.querySelectorAll('#user-name');
        userNameElements.forEach(el => {
            el.textContent = `Welcome, ${user.fullname || user.username}`;
        });
    }
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Calculate days until deadline
function daysUntil(deadline) {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Get user data key
function getUserDataKey(dataType) {
    const user = checkAuth();
    return `${user.username}_${dataType}`;
}

// Save user data
function saveUserData(dataType, data) {
    const key = getUserDataKey(dataType);
    localStorage.setItem(key, JSON.stringify(data));
}

// Load user data
function loadUserData(dataType) {
    const key = getUserDataKey(dataType);
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Initialize auth check on page load
if (window.location.pathname !== '/index.html' && 
    window.location.pathname !== '/register.html' &&
    !window.location.pathname.endsWith('index.html') &&
    !window.location.pathname.endsWith('register.html')) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', displayUserName);
    } else {
        displayUserName();
    }
}
