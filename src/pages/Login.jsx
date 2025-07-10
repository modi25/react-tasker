import React from 'react';

const Login = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Login Page (UI only for now)</h2>
      <form>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </div>
        </form>
        <button type="submit" style={{ marginTop: '10px', padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
          Login
        </button>
    </div>
  )
};

export default Login;
