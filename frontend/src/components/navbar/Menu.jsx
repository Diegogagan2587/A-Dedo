import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Item from './Item';
import help from '../../assets/navbar/help.svg';
import userIcon from '../../assets/navbar/user.svg';
import car from '../../assets/navbar/car.svg';
import driving from '../../assets/navbar/driving-hands.svg';
import chat from '../../assets/navbar/chat.svg';

const Menu = ({ isActive, setIsActive }) => {
  const user = useSelector((state) => state.user.data);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(user?true:false);
  }, [user]);
  const handleOnClick = () => {
    setIsActive(false);
  };
  return (
    <ul
      className={`
         z-10 fixed  
         border-2 rounded-3xl
         pt-[17vw] sm:pt-[25vw]
         w-full h-screen
         transition-all duration-500 ease-in-out ${
           isActive ? 'top-0' : 'top-[-100%]'
         } 
         flex flex-col justify-center
         bg-white px-2 py-8
         `}
    >
      {isLoggedIn ? (
        <>
          <Item text="Perfil" onClick={handleOnClick} icon={userIcon} to="#"/>
          <Item text="Chat" onClick={handleOnClick} icon={chat} to="#"/>
          <Item text="Mis viajes" onClick={handleOnClick} icon={car} to="#"/>
          <Item text="Quiero ser conductor" onClick={handleOnClick} icon={driving} to="/register/driver"/>
          <Item text="Ayuda" onClick={handleOnClick} icon={help} to="#" />
        </>
      ) : (
        <>
          <Item text="Crear cuenta" onClick={handleOnClick} icon={userIcon} to="/register/step-1" />
          <Item text="Nosotros" onClick={handleOnClick} icon={car} to="/"/>
          <Item text="Quiero ser conductor" onClick={handleOnClick} icon={driving} to="/register/step-1"/>
          <Item text="Ayuda" onClick={handleOnClick} icon={help} to="#"/>
        </>
      )}
    </ul>
  );
};

Menu.propTypes = {
  isActive: PropTypes.bool.isRequired,
  setIsActive: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Menu;
