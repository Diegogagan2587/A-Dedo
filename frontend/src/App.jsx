import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Main from './pages/Main';
import Login from './pages/Login';

function App() {
  //trigger render when user logs in for demo purposes
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/login"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="/home" element={<h1>Home here</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
