import { useState } from 'react';
import { PropTypes } from 'prop-types';
import Menu from './Menu';
import logo from '../../assets/logo.png';
import bgNavCurve from '../../assets/nav-background.svg';
import menuIcon from '../../assets/menu-icon-hamb.svg';

const Navbar = ({isLoggedIn}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="fixed z-30 w-full top-0">
      <img
        src={bgNavCurve}
        alt="background"
        className="z-20 
        fixed 
        w-full top-0"
      />
      <div className="flex items-center justify-center z-30 relative top-0 pt-2 w-full">
        <div className="flex items-center border-white w-3/4 justify-center">
          <div className="flex flex-col">
            <h1 className="font-title text-white text-4xl">a dedo</h1>
            <p className="text-white text-sm text-center ml-8">
              viajes compartidos
            </p>
          </div>
          <img src={logo} alt="logo" className="h-12 w-12" />
        </div>
        <div className="flex justify-center w-1/4 border-white">
          <button className="z-10 w-[24px]" onClick={() => setIsActive(!isActive)}>
            <img src={menuIcon} alt="menu" className="h-8 w-8" />
          </button>
        </div>
      </div>
      <Menu isActive={isActive} isLoggedIn={isLoggedIn} setIsActive={setIsActive}/>
    </nav>
  );
};

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool,
}

export default Navbar;
