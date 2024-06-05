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
import CreateTripPartOne from './pages/create-trip/CreateTripPartOne';
import CreateTripPartTwo from './pages/create-trip/CreateTripPartTwo';
import CreateTripPartThree from './pages/create-trip/CreateTripPartThree';
import CreateTripPartFour from './pages/create-trip/CreateTripPartFour';
import TripEnd from './pages/create-trip/TripEnd';
import DriverRegister from './pages/driver-register/DriverRegister';
import DriverDNI from './pages/driver-register/DriverDNI';
import DriverWait from './pages/driver-register/DriverWait';
import DriverEnd from './pages/driver-register/DriverEnd';
import CarRegister from './pages/driver-register/CarRegister';
import CarWait from './pages/driver-register/CarWait';
import CarEnd from './pages/driver-register/CarEnd'

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
            {/* Driver register render */}
            <Route path="/driver-register" element={<DriverRegister />} />
            <Route path="/driver-dni" element={<DriverDNI />} />
            <Route path="/driver-wait" element={<DriverWait />} />
            <Route path="/driver-end" element={<DriverEnd />} />
            <Route path="/car-register" element={<CarRegister />} />
            <Route path="/car-wait" element={<CarWait />} />
            <Route path="/car-end" element={<CarEnd />} />
            {/* create trip render */}
            <Route path="/create-trip-part-one" element={<CreateTripPartOne />} />
            <Route path="/create-trip-part-two" element={<CreateTripPartTwo />} />
            <Route path="/create-trip-part-three" element={<CreateTripPartThree />} />
            <Route path="/create-trip-part-four" element={<CreateTripPartFour />} />
            <Route path="/trip-end" element={<TripEnd />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
