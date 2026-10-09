document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullname = document.getElementById('fullname').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Get existing users
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if username exists
    if (users.find(u => u.username === username)) {
        alert('Username already exists!');
        return;
    }
    
    // Add new user
    const newUser = {
        fullname,
        username,
        email,
        password,
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Registration successful! Please login.');
    window.location.href = 'index.html';
});
