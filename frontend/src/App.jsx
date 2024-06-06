import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Main from './pages/Main';
import Login from './pages/Login';
import Home from './pages/Home';
import TripDetails from './pages/trips/TripDetails';
import CreateAccountOne from './pages/register/user/CreateAccountOne';
import CreateAccountTwo from './pages/register/user/CreateAccountTwo';
import CreateAccountEnd from './pages/register/user/CreateAccountEnd';
import CreateTripPartOne from './pages/trips/new/CreateTripPartOne';
import CreateTripPartTwo from './pages/trips/new/CreateTripPartTwo';
import CreateTripPartThree from './pages/trips/new/CreateTripPartThree';
import CreateTripPartFour from './pages/trips/new/CreateTripPartFour';
import TripEnd from './pages/trips/new/TripEnd';
import DriverRegister from './pages/register/driver/DriverRegister';
import DriverDNI from './pages/register/driver/DriverDNI';
import DriverWait from './pages/register/driver/DriverWait';
import DriverEnd from './pages/register/driver/DriverEnd';
import CarRegister from './pages/register/driver/CarRegister';
import CarWait from './pages/register/driver/CarWait';
import CarEnd from './pages/register/driver/CarEnd'

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
              <Route path=':id/reserve' element={<p className='mt-20'>Reserve Trip here</p>} />                 
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
