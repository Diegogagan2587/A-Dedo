import { useState } from 'react';
import { PropTypes } from 'prop-types';

const PassengerDriverBtn = ({ setDriverIsActive }) => {
  const [active, setActive] = useState('Passenger');

  const handlePassengerClick = () => {
    setActive('Passenger');
    setDriverIsActive(false);
  };

  const handleDriverClick = () => {
    setActive('Driver');
    setDriverIsActive(true);
  };

  return (
    <div className="flex w-[157px] h-[41px] rounded-full border border-gray-300 bg-gray-100">
    <div
      className={`flex-1 text-center py-2 cursor-pointer rounded-l-full font-roboto-flex ${
        active === 'Passenger' ? 'bg-customGreen text-white' : 'text-gray-500'
      }`}
      onClick={handlePassengerClick}
    >
      Pasajero
    </div>
    <div
      className={`flex-1 text-center py-2 px-1 cursor-pointer rounded-r-full font-roboto-flex ${
        active === 'Driver' ? 'bg-customGreen text-white' : 'text-gray-500'
      }`}
      onClick={handleDriverClick}
    >
      Conductor
    </div>
  </div>
  );
}

PassengerDriverBtn.propTypes = {
  setDriverIsActive: PropTypes.func,
}

export default PassengerDriverBtn;
