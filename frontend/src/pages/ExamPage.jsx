/*import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ExamPage() {
  const { id } = useParams(); // exam_id from URL
  const [exam, setExam] = useState(null);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/exams/${id}`)
      .then((res) => setExam(res.data))
      .catch((err) => {
        console.error('Error fetching exam:', err);
        alert('Failed to load exam!');
      });
  }, [id]);

  const handleSubmit = async () => {
    if (!exam) return;

    const payload = {
      user: 'Anonymous', // or set dynamically
      exam_id: exam._id,
      answers: exam.questions.map((q) => ({
        question_id: q.question_id, // match this to backend logic
        selected_option: answers[q.question_id] ?? -1
      }))
    };

    try {
      const res = await axios.post('http://localhost:5000/api/results', payload);
      navigate('/result', { state: { score: res.data.score } });
    } catch (err) {
      console.error('[❗ Submit Error]', err);
      alert('Error submitting your answers.');
    }
  };

  return (
    <div>
      {exam ? (
        <div>
          <h2>{exam.title}</h2>
          <p>{exam.description}</p>
          {exam.questions.map((q, idx) => (
            <div key={q.question_id} style={{ marginBottom: '20px' }}>
              <p>{idx + 1}. {q.question_text}</p>
              {q.options.map((opt, i) => (
                <label key={i} style={{ display: 'block' }}>
                  <input
                    type="radio"
                    name={`question-${q.question_id}`}
                    value={i}
                    checked={answers[q.question_id] === i}
                    onChange={() =>
                      setAnswers((prev) => ({
                        ...prev,
                        [q.question_id]: i
                      }))
                    }
                  />
                  {opt}
                </label>
              ))}
            </div>
          ))}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <p>Loading exam...</p>
      )}
    </div>
  );
}
*/


import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ExamPage() {
  const { id } = useParams();
  const [exam, setExam] = useState(null);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/exams/${id}`)
      .then((res) => setExam(res.data))
      .catch((err) => {
        console.error('Error fetching exam:', err);
        alert('Failed to load exam!');
      });
  }, [id]);

  const handleSubmit = async () => {
    if (!exam) return;

    const payload = {
      user: 'Anonymous',
      exam_id: exam._id,
      answers: exam.questions.map((q) => ({
        question_id: q.question_id,
        selected_option: answers[q.question_id] ?? -1,
      })),
    };

    try {
      const res = await axios.post('http://localhost:5000/api/results', payload);
      navigate('/result', { state: { score: res.data.score } });
    } catch (err) {
      console.error('[❗ Submit Error]', err);
      alert('Error submitting your answers.');
    }
  };

  return (
    <div
      style={{
        background: 'linear-gradient(to right, #f7faff, #eef3f8)',
        minHeight: '100vh',
        padding: '40px 20px',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        {exam ? (
          <>
            <h2 style={{ color: '#2c3e50', marginBottom: '10px' }}>{exam.title}</h2>
            <p style={{ marginBottom: '30px', color: '#555' }}>{exam.description}</p>

            {exam.questions.map((q, idx) => (
              <div key={q.question_id} style={{ marginBottom: '25px' }}>
                <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                  {idx + 1}. {q.question_text}
                </p>
                {q.options.map((opt, i) => (
                  <label key={i} style={{ display: 'block', marginBottom: '8px' }}>
                    <input
                      type="radio"
                      name={`question-${q.question_id}`}
                      value={i}
                      checked={answers[q.question_id] === i}
                      onChange={() =>
                        setAnswers((prev) => ({
                          ...prev,
                          [q.question_id]: i,
                        }))
                      }
                      style={{ marginRight: '10px' }}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            ))}

            <button
              onClick={handleSubmit}
              style={{
                backgroundColor: '#3498db',
                color: 'white',
                padding: '10px 25px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                marginTop: '20px',
              }}
            >
              Submit Exam
            </button>
          </>
        ) : (
          <p>Loading exam...</p>
        )}
      </div>
    </div>
  );
}
