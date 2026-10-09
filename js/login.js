document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Find user
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // Save current user
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password!');
    }
});
