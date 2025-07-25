/*
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('user', username);
    navigate('/exams');
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Enter name" onChange={e => setUsername(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}*/



import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password
      });

      if (res.data.success) {
        localStorage.setItem('user', res.data.user.username); // or token if using JWT
        navigate('/exams');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      console.error('❌ Login failed:', err);
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1470&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          zIndex: 1,
        }}
      ></div>

      {/* login box */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            width: '340px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ marginBottom: '20px', color: '#333' }}>Login</h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button
            onClick={handleLogin}
            style={{
              backgroundColor: '#2d89ef',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              width: '100%',
              marginTop: '10px'
            }}
          >
            Login
          </button>

          <p style={{ marginTop: '10px' }}>
            Don't have an account? <a href="/signup">Sign up here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: '10px',
  width: '100%',
  marginBottom: '15px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '16px',
};

