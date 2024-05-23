import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav></nav>
        <main>
          <Routes>
            <Route path="/" element={<h1>root here</h1>} />
            <Route path="/login" element={<h1>Login here</h1>} />
            <Route path="/home" element={<h1>Home here</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
