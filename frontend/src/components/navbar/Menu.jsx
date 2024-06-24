import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Item from './Item';
import help from '../../assets/navbar/help.svg';
import userIcon from '../../assets/navbar/user.svg';
import car from '../../assets/navbar/car.svg';
import driving from '../../assets/navbar/driving-hands.svg';
import chat from '../../assets/navbar/chat.svg';

const Menu = ({ isActive, setIsActive }) => {
  const user = useSelector((state) => state.user.data);
  const isDriver = user && user.rol && user.rol.length > 1||false;
  
  useEffect(() => {
  }, [user]);

  const handleOnClick = () => {
    setIsActive(false);
  };
  return (
    <ul
      className={`
         z-10 fixed  
         border-2 rounded-3xl 
         w-full max-w-[400px] h-screen
         transition-all duration-500 ease-in-out ${
           isActive ? 'top-0' : 'top-[-100%]'
         } 
         flex flex-col justify-center
         bg-white px-2 py-8
         `}
    >
      {user._id ? (
        <>
          <Item text="Perfil" onClick={handleOnClick} icon={userIcon}/>
          <Item text="Chat" onClick={handleOnClick} icon={chat} to="#"/>
          <Item text="Mis viajes" onClick={handleOnClick} icon={car} to="#"/>
          { isDriver ? null : <Item text="Quiero ser conductor" onClick={handleOnClick} icon={driving} to="/register/driver"/> }
          <Item text="Ayuda" onClick={handleOnClick} icon={help} to="#" />
        </>
      ) : (
        <>
          <Item text="Crear cuenta" onClick={handleOnClick} icon={userIcon} to="/register/step-1" />
          <Item text="Ingresar" onClick={handleOnClick} icon={userIcon} to="/login" />
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
};

export default Menu;
