import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TripDetailsTop from '../../pages/trips/TripDetailsTop';
import NavDetailsTrip from '../../pages/profile-driver/NavDetailsTrip';
import BackNav from "./BackNav"
import Menu from './Menu';
import logo from '../../assets/logo.png';
import bgNavCurve from '../../assets/nav-background.svg';
import menuIcon from '../../assets/menu-icon-hamb.svg';
import driverProfile from "../../assets/navbar/driver-profile.png"

const Navbar = ({isLoggedIn}) => {
  const [isActive, setIsActive] = useState(false);
  const navigationLayout = useSelector((state)=>state.navigation.navigationLayout); // trip-details-nav, details-driver-nav, back-nav
  
  useEffect(()=>{},[navigationLayout]);

  return (
    <>
    {navigationLayout === "main-nav" && <nav className="fixed z-30 w-full max-w-[400px] top-0">
      <img
        src={bgNavCurve}
        alt="background"
        className="z-20 
        fixed 
        w-full max-w-[400px] top-0"
      />
      <div className="flex items-center justify-center z-30 relative top-0 pt-2 w-full">
        <Link to="/trips" className="flex items-center border-white w-3/4 justify-center">
          <div className="flex flex-col">
            <h2 className="font-title text-white text-4xl">a dedo</h2>
            <p className="text-white text-sm text-center ml-8 font-roboto-flex">
              viajes compartidos
            </p>
          </div>
          <img src={logo} alt="logo" className="h-12 w-12" />
        </Link>
        <div className="flex justify-center w-1/4 border-white">
          <button className="z-10 w-[24px]" onClick={() => setIsActive(!isActive)}>
            <img src={menuIcon} alt="menu" className="h-8 w-8" />
          </button>
        </div>
      </div>
      <Menu isActive={isActive} isLoggedIn={isLoggedIn} setIsActive={setIsActive}/>
    </nav> }
    {navigationLayout === "trip-details-nav" && <TripDetailsTop       
      name="Elena"
      bio="“Tengo 45 años y viajo todos los dias por mi trabajo a mardel.”"
      driverProfile={driverProfile} />}
    {navigationLayout === "driver-details-trip" && <NavDetailsTrip name="marcos"/>}
    {navigationLayout === "back-nav" && <BackNav text="Reservar viaje" to={"/trips/:id/details"}/>}
    {navigationLayout === "create-trip-1" && <BackNav text="Crear viaje" to="/trips" /> }
    {navigationLayout === "create-trip-2" && <BackNav text="Crear viaje" to="/trips/new/step-1" /> }
    {navigationLayout === "create-trip-3" && <BackNav text="Crear viaje" to="/trips/new/step-2" /> }
    {navigationLayout === "create-trip-4" && <BackNav text="Crear viaje" to="/trips/new/step-3" /> }
    {navigationLayout === "back-nav-history" && <BackNav text="Historial de viajes" to="/profile/driver" />}
    </>
  );
};

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool,
}

export default Navbar;
