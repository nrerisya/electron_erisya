
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault(); 

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const errorMessageDiv = document.getElementById('error-message');
  errorMessageDiv.textContent = '';

  try {
    const response = await fetch('http://test-demo.aemenersol.com/api/account/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      alert('Login successful!');
    } else {
      errorMessageDiv.textContent = 'Invalid credentials. Please check your username and password.';
    }
  } catch (error) {
    console.error('Error during login:', error);
    errorMessageDiv.textContent = 'An error occurred during login. Please try again later.';
  }
});
