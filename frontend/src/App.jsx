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
import CarEnd from './pages/driver-register/CarEnd';

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
            <Route path="/trips" >
              <Route path="/trips" element={<Home />}/>
              <Route path=":id/details" element={<TripDetails />} />                    
              <Route path="new">
                <Route path="step-1" element={<CreateTripPartOne />} />
                <Route path="step-2" element={<CreateTripPartTwo />} />
                <Route path="step-3" element={<CreateTripPartThree />} />
                <Route path="step-4" element={<CreateTripPartFour />} />
                <Route path="step-5" element={<TripEnd />} />
              </Route>
              
            </Route>
            <Route path="/register">
              <Route path="step-1" element={<CreateAccountOne />} />
              <Route path="step-2" element={<CreateAccountTwo />} />
              <Route path="step-3" element={<CreateAccountEnd />} />
              <Route path="driver" element={<DriverRegister />} />
              <Route path="driver-dni" element={<DriverDNI />} />
              <Route path="driver-end" element={<DriverEnd />} />
              <Route path="vehicle" element={<CarRegister />} />
              <Route path="vehicle-end" element={<CarEnd />} />
              <Route path="driver-wait" element={<DriverWait />} />  {/*ommited due lack of logic*/}
              <Route path="car-wait" element={<CarWait />} />        {/*ommited due lack of logic*/}
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
