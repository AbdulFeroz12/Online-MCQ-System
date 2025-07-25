/*import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ExamList() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/exams')
      .then(res => setExams(res.data))
      .catch(err => console.error('❌ Error fetching exams:', err));
  }, []);

  return (
    <div>
      <h2>📘 Available Exams</h2>
      {exams.length === 0 ? (
        <p>No exams available.</p>
      ) : (
        exams.map(e => (
          <div key={e._id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            <h4>{e.title}</h4>
            <p>{e.description}</p>
            <Link to={`/exam/${e._id}`}>➡ Start</Link>
          </div>
        ))
      )}
    </div>
  );
}
*/

/*import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ExamsPage() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/exams')
      .then(res => setExams(res.data))
      .catch(err => console.error('Error fetching exams:', err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>📚 Available Exams</h1>
      {exams.length === 0 ? (
        <p>No exams available yet.</p>
      ) : (
        <ul>
          {exams.map((exam) => (
            <li key={exam._id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
              <h2>{exam.title}</h2>
              <p>{exam.description}</p>
              <Link to={`/exams/${exam._id}`}>
                <button>Start Exam</button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
*/
/*
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ExamList() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/exams')
      .then((res) => setExams(res.data))
      .catch((err) => console.error('Error fetching exams', err));
  }, []);

  return (
    <div>
      <h2>Available Exams</h2>
      {exams.length === 0 ? (
        <p>No exams found.</p>
      ) : (
        <ul>
          {exams.map((exam) => (
            <li key={exam._id}>
              <h4>{exam.title}</h4>
              <p>{exam.description}</p>
              <Link to={`/exams/${exam._id}`}>
                <button>Start</button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
*/


import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ExamList() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/exams')
      .then((res) => setExams(res.data))
      .catch((err) => console.error('Error fetching exams', err));
  }, []);

  return (
    <div
      style={{
        background: 'linear-gradient(to right, #f9f9f9, #e9f0ff)',
        minHeight: '100vh',
        padding: '40px 20px',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#2c3e50' }}>
          📘 Available Exams
        </h2>

        {exams.length === 0 ? (
          <p style={{ textAlign: 'center' }}>No exams found.</p>
        ) : (
          <div style={{ display: 'grid', gap: '20px' }}>
            {exams.map((exam) => (
              <div
                key={exam._id}
                style={{
                  background: 'white',
                  borderRadius: '10px',
                  padding: '20px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                }}
              >
                <h3 style={{ margin: '0 0 10px', color: '#34495e' }}>{exam.title}</h3>
                <p style={{ marginBottom: '15px', color: '#555' }}>{exam.description}</p>
                <Link to={`/exams/${exam._id}`}>
                  <button
                    style={{
                      backgroundColor: '#3498db',
                      color: 'white',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    Start Exam
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
