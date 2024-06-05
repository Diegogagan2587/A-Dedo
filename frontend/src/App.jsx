import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Main from './pages/Main';
import Login from './pages/Login';
import Home from './pages/Home';
import TripDetails from './pages/TripDetails';
import CreateAccountOne from './pages/create-account/CreateAccountOne';
import CreateAccountTwo from './pages/create-account/CreateAccountTwo';
import CreateAccountEnd from './pages/create-account/CreateAccountEnd';


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
            <Route path="/home" element={<Home />} />
            <Route path="trip-details" element={<TripDetails />} />
            {/* Create Account */}
            <Route path="/create-account-part-one" element={<CreateAccountOne />} />
            <Route path="/create-account-part-two" element={<CreateAccountTwo />} />
            <Route path="/create-account-part-end" element={<CreateAccountEnd />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
