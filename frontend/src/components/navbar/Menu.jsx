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
         z-20 fixed top-0  
         border-2 rounded-3xl
         w-3/4 h-screen
         transition-all duration-500 ease-in-out ${
           isActive ? 'left-0' : 'left-[-100%]'
         } 
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
