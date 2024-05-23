import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<h1>root here</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<h1>Home here</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
