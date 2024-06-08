import { useState } from 'react';

const PassengerDriverBtn = () => {
  const [active, setActive] = useState('Driver');

  return (
    <div className="flex w-[157px] h-[41px] rounded-full border border-gray-300 bg-gray-100">
    <div
      className={`flex-1 text-center py-2 cursor-pointer rounded-l-full ${
        active === 'Passenger' ? 'bg-customGreen text-white' : 'text-gray-500'
      }`}
      onClick={() => setActive('Passenger')}
    >
      Pasajero
    </div>
    <div
      className={`flex-1 text-center py-2 px-1 cursor-pointer rounded-r-full ${
        active === 'Driver' ? 'bg-customGreen text-white' : 'text-gray-500'
      }`}
      onClick={() => setActive('Driver')}
    >
      Conductor
    </div>
  </div>
  )
}

export default PassengerDriverBtn