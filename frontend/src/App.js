import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ExamList from './pages/ExamList';
import ExamPage from './pages/ExamPage';
import ResultPage from './pages/ResultPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<LoginPage />} />
        
        <Route path="/exams" element={<ExamList />} />
        <Route path="/exams/:id" element={<ExamPage />} /> {/* ✅ FIXED LINE */}
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
