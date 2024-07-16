import { PropTypes } from 'prop-types';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setSelectedTrip } from '../../store/slices/tripsSlice';
import LocationBarIcons from '../LocationBarIcons';
import LocationAndTime from './LocationAndTime';
import Pets from '../options/Pets';
import Stop from '../options/Stop';
import Childrens from '../options/Childrens';
import profilePicturePlaceHolder from '../../assets/profile1.png'

const CardTrip = ({ id, name, profilePicture, seatsAvailable, startLocation, startTime, endLocation, endTime, acceptPets, acceptStops, acceptChildren }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setSelectedTrip(id));
    navigate(`/trips/${id}/details`);
  };

  return (
    <article id={id} onClick={handleClick} 
      aria-label={`Trip card for ${name}`}
      className='min-w-[328px] min-h-[140px] border border-customGreen rounded-lg flex p-4 items-center space-x-4 shadow-lg mt-4 '>
      <figure>
        <img src={profilePicture || profilePicturePlaceHolder} alt={name} className="w-[68px] h-[64px] rounded-full" />
        <figcaption className='hidden'>{name}</figcaption>
      </figure>
      <header>
        <h3 className="text-base font-bold text-center font-baloo">{name}</h3>
        <p className='text-xs text-center'>{seatsAvailable} lugares <br /> disponibles</p>
        <div className='mt-2 flex flex-row justify-between'>
          <Pets isAllowed={acceptPets} />
          <Stop isAllowed={acceptStops} />
          <Childrens isAllowed={acceptChildren} />
        </div>
      </header>
      <LocationBarIcons />
      <section className="location-container flex flex-col gap-6">
        <LocationAndTime id={`start-location-${id}`} location={startLocation} time={startTime} />
        <LocationAndTime id={`end-location-${id}`} location={endLocation} time={endTime} />
      </section>
    </article>
  );
};

CardTrip.propTypes = {
    id: PropTypes.string.isRequired,  
    name: PropTypes.string.isRequired,
    profilePicture: PropTypes.string,
    seatsAvailable: PropTypes.string.isRequired,
    startLocation: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endLocation: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    acceptPets: PropTypes.bool,
    acceptStops: PropTypes.bool,
    acceptChildren: PropTypes.bool,

};

export default CardTrip