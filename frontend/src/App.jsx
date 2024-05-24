import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
