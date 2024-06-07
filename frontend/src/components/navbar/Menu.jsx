import { PropTypes } from 'prop-types';
import Item from './Item';
import help from '../../assets/navbar/help.svg';
import user from '../../assets/navbar/user.svg';
import car from '../../assets/navbar/car.svg';
import driving from '../../assets/navbar/driving-hands.svg';
import chat from '../../assets/navbar/chat.svg';

const Menu = ({ isActive, setIsActive, isLoggedIn }) => {
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
          <Item text="Perfil" onClick={handleOnClick}/>
          <Item text="Chat" onClick={handleOnClick} icon={chat} />
          <Item text="Mis viajes" onClick={handleOnClick} icon={car} />
          <Item text="Quiero ser conductor" onClick={handleOnClick} icon={driving} />
          <Item text="Ayuda" onClick={handleOnClick} icon={help} />
        </>
      ) : (
        <>
          <Item text="Crear cuenta" onClick={handleOnClick} icon={user} to="/register/step-1" />
          <Item text="Nosotros" onClick={handleOnClick} icon={car} />
          <Item text="Quiero ser conductor" icon={driving} />
          <Item text="Ayuda" onClick={handleOnClick} icon={help} />
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
