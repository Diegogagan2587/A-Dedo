import Date from '../components/Date';
import clock from '../assets/clock.svg';
import location from '../assets/location.png';

const Time = () => {
  return (
    <div className="flex gap-2 items-center">
      <img src={clock} alt="clock" className="w-[20px] " />
      <span>13:00 hrs</span>
    </div>
  );
};

const LocationBarIcons = () => {
    return (
        <div id="location-bar-icon">
            <img src={location} alt="location" className="w-[24px] h-[27px]" />
            <hr className='border-2 border-green-600'/>
            <img src={location} alt="location" className="w-[24px] h-[27px]" />
        </div>
    );
};

const TripDetails = () => {
  return (
    <div className="mt-20 pt-20 border-2">
      <h1>Detalle del Viaje</h1>
      <div className="flex gap-4 ">
        <Date date="Miercoles 21 de Mayo del 2024" />
        <Time />
      </div>
      <div id="locations" className="flex">
        <LocationBarIcons />
        <div id="location-text-container">
            <p>Santa clara del mar, Provincia de Buenos Aires, Argentina
                <a>Ver punto de encuentro</a>
            </p>
            <p>Mar del Plata, Provincia de Buenos Aires, Argentina</p>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
