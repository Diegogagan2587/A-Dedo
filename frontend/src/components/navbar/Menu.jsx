import { PropTypes } from 'prop-types';
import Item from './Item';
import help from '../../assets/navbar/help.svg';
import user from '../../assets/navbar/user.svg';
import car from '../../assets/navbar/car.svg';
import driving from '../../assets/navbar/driving-hands.svg';
import chat from '../../assets/navbar/chat.svg';

const Menu = ({ isActive, isLoggedIn }) => {
  return (
    <ul
      className={`
         z-10 fixed  
         border-2 rounded-3xl
         pt-60 sm:pt-100 
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
          <Item text="Perfil" icon={user} />
          <Item text="Chat" icon={chat} />
          <Item text="Mis viajes" icon={car} />
          <Item text="Quiero ser conductor" icon={driving} />
          <Item text="Ayuda" icon={help} />
        </>
      ) : (
        <>
          <Item text="Crear cuenta" icon={user} />
          <Item text="Nosotros" icon={car} />
          <Item text="Quiero ser conductor" icon={driving} />
          <Item text="Ayuda" icon={help} />
        </>
      )}
    </ul>
  );
};

Menu.propTypes = {
  isActive: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Menu;
