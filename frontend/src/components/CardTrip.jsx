import { PropTypes } from 'prop-types';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setSelectedTrip } from '../store/slices/tripsSlice';
import LocationBarIcons from './LocationBarIcons';
import petsIcon from '../assets/pets.png'
import handIcon from '../assets/hand.png'
import kidsIcon from '../assets/family.png'
import profilePicturePlaceHolder from '../assets/profile1.png'


const CardTrip = ({ id, name, profilePicture, seatsAvailable, startLocation, startTime, endLocation, endTime }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setSelectedTrip(id));
    navigate(`/trips/${id}/details`);
  };

  return (
    <article id={id} onClick={handleClick} 
      aria-labelledby='trip-card'
      className='min-w-[328px] min-h-[140px] border border-customGreen rounded-lg flex p-4 items-center space-x-4 shadow-lg mt-4 '>
      <img src={profilePicture || profilePicturePlaceHolder} alt={name} className="w-[68px] h-[64px] rounded-full" />
      <header>
        <h3 className="text-base font-bold text-center font-baloo">{name}</h3>
        <p className='text-xs text-center'>{seatsAvailable} lugares <br /> disponibles</p>
        <div className='mt-2 flex flex-row justify-between'>
          <img src={petsIcon} alt="pets icon" />
          <img src={handIcon} alt="hand icon" />
          <img src={kidsIcon} alt="kids icon" />
        </div>
      </header>
      <LocationBarIcons />
      <section className="location-container flex flex-col gap-6">
        <div className='location-origin flex flex-col items-center'>
          <p className="text-[13px] text-textColor font-semibold">
            {startLocation}
          </p>
          <p className="text-gray-700 text-[11px]">{startTime}</p>
        </div>
        <div className='location-origin flex flex-col items-center'>
          <p className="text-[13px] text-textColor font-semibold">
            {endLocation}
          </p>

          <p className="text-gray-700 text-[11px]">{endTime}</p>
        </div>
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
    endTime: PropTypes.string.isRequired
};

export default CardTrip