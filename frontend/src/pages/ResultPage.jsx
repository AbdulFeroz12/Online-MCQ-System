/*import { useLocation, useNavigate } from 'react-router-dom';

export default function ResultPage() {
  const { state } = useLocation();
  const { score } = state || { score: 0 };
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🎉 Exam Completed</h1>
      <h2>Your Score: <span style={{ color: 'green' }}>{score}</span></h2>
      <button onClick={() => navigate('/')} style={{ marginTop: '20px' }}>
        Back to Home
      </button>
    </div>
  );
}*/
import { useLocation, useNavigate } from 'react-router-dom';

export default function ResultPage() {
  const { state } = useLocation();
  const { score } = state || { score: 0 };
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: 'linear-gradient(to right, #f9fcff, #e9f0f7)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
          textAlign: 'center',
          maxWidth: '500px',
        }}
      >
        <h1 style={{ color: '#2c3e50', marginBottom: '20px' }}>🎉 Exam Completed</h1>
        <h2>
          Your Score:{" "}
          <span style={{ color: 'green', fontWeight: 'bold' }}>{score}</span>
        </h2>
        <button
          onClick={() => navigate('/exams')}
          style={{
            marginTop: '30px',
            padding: '10px 25px',
            fontSize: '16px',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: '#3498db',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          🔙 Back to Exams
        </button>
      </div>
    </div>
  );
}
