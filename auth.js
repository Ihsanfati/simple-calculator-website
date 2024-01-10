let currentUser = null;

function register() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if username and password are not empty
  if (!username || !password) {
    alert('Please enter both username and password.');
    return;
  }

  // Implement registration logic (e.g., send data to server)
  // For simplicity, we'll just store the user in memory
  currentUser = { username, password };
  alert('Registration successful! Redirecting to login page.');
  
  // Redirect to login page after successful registration
  window.location.href = 'login.html';
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if username and password are not empty
  if (!username || !password) {
    alert('Please enter both username and password.');
    return;
  }

  // Implement login logic (e.g., check credentials with server)
  // For simplicity, we'll just consider any input as valid
  alert('Login successful!');
  
  // Redirect to main page
  window.location.href = 'main-page.html';
}

function logout() {
  currentUser = null;
  // Redirect to login page
  window.location.href = 'login.html';
}
