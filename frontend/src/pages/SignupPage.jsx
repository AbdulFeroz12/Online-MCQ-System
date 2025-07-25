import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/signup', { username, password });
      alert('Signup successful!');
      navigate('/'); // Redirect to login
    } catch (err) {
      alert('Signup failed. Try a different username.');
      console.error(err);
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        backgroundImage: `url('https://images.unsplash.com/photo-1605902711622-cfb43c4437d5?auto=format&fit=crop&w=1470&q=80')`, // 👩‍💻📚 Professional light background
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* 🔆 White overlay */}
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

      {/* 👇 Signup card */}
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
          <h2 style={{ marginBottom: '20px', color: '#333' }}>Create Your Account</h2>
          <input
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={inputStyle}
          />
          <button
            onClick={handleSignup}
            style={{
              backgroundColor: '#2d89ef',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              width: '100%',
              marginTop: '10px',
            }}
          >
            Sign Up
          </button>
          <p style={{ marginTop: '15px' }}>
            Already have an account? <a href="/">Login here</a>
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
