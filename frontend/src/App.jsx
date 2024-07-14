import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getTrips from './store/requests/getTrips';
import Navbar from './components/navbar/Navbar';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Home from './pages/Home';
import TripDetails from './pages/trips/TripDetails';
import UserDetailsForm from './pages/register/user/UserDetailsForm';
import PasswordAndTermsForm from './pages/register/user/PasswordAndTermsForm';
import UserRegistrationSuccess from './pages/register/user/UserRegistrationSuccess';
import TripOriginForm from './pages/trips/new/TripOriginForm';
import TripDestinationForm from './pages/trips/new/TripDestinationForm';
import TripCompanionsForm from './pages/trips/new/TripCompanionsForm';
import TripAdditionalOptionsForm from './pages/trips/new/TripAdditionalOptionsForm';
import TripCreationSuccess from './pages/trips/new/TripCreationSuccess';
import DriverRegister from './pages/register/driver/DriverRegister';
import DriverDNI from './pages/register/driver/DriverDNI';
import DriverWait from './pages/register/driver/DriverWait';
import DriverRegistrationSuccess from './pages/register/driver/DriverRegistrationSuccess';
import CarRegister from './pages/register/driver/CarRegister';
import CarWait from './pages/register/driver/CarWait';
import VehicleRegistrationSuccess from './pages/register/driver/VehicleRegistrationSuccess'
import ProfileDriver from './pages/profile-driver/ProfileDriver';
import DriverDetailTrip from './pages/profile-driver/DriverDetailTrip';
import TripReservationSuccess from './pages/trips/TripReservationSuccess';
import ReserveTrip from './pages/trips/ReserveTrip';
import UserTripHistory from './pages/trips/UserTripHistory';

function App() {
  const dispatch = useDispatch();
  //trigger render when user logs in for demo purposes
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    dispatch(getTrips());
  }, [dispatch]);
  

  return (
    <Router>
      <div className='max-w-[400px] m-auto'>
        <Navbar isLoggedIn={isLoggedIn} />
        <main className='
        relative top-[75px]
        '>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/login"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="/profile">
              <Route path="driver" element={<ProfileDriver />} />
              <Route path="user-history" element={<UserTripHistory />}/>
            </Route>
            <Route path="/trips" >
              <Route path="/trips" element={<Home />}/>
              <Route path=":id/details" element={<TripDetails />} />
              <Route path=":id/details-driver" element={<DriverDetailTrip />} />
              <Route path=':id/reserve' element={<ReserveTrip />} />  
              <Route path=":id/reserve/confirmation" element={<TripReservationSuccess />} />               
              <Route path="new">
                <Route path="step-1" element={<TripOriginForm />} />
                <Route path="step-2" element={<TripDestinationForm />} />
                <Route path="step-3" element={<TripCompanionsForm />} />
                <Route path="step-4" element={<TripAdditionalOptionsForm />} />
                <Route path="step-5" element={<TripCreationSuccess />} />
              </Route>
              
            </Route>
            <Route path="/register">
              <Route path="step-1" element={<UserDetailsForm />} />
              <Route path="step-2" element={<PasswordAndTermsForm />} />
              <Route path="step-3" element={<UserRegistrationSuccess />} />
              <Route path="driver" element={<DriverRegister />} />
              <Route path="driver-dni" element={<DriverDNI />} />
              <Route path="driver-end" element={<DriverRegistrationSuccess />} />
              <Route path="vehicle" element={<CarRegister />} />
              <Route path="vehicle-end" element={<VehicleRegistrationSuccess />} />
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
