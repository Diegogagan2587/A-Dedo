import { PropTypes } from 'prop-types';
import location from '../assets/location.png';
import petsIcon from '../assets/pets.png'
import handIcon from '../assets/hand.png'
import kidsIcon from '../assets/family.png'

const CardTrip = ({ name, profilePicture, seatsAvailable, startLocation, startTime, endLocation, endTime }) => {
  return (
    <article className='min-w-[328px] min-h-[140px] border border-customGreen rounded-lg flex p-4 items-center space-x-4 shadow-lg mt-4 '>
      <img src={profilePicture} alt={name} className="w-[68px] h-[64px] rounded-full" />
      <section>
        <h2 className="text-base font-bold text-center">{name}</h2>
        <p className='text-xs text-center'>{seatsAvailable} lugares <br /> disponibles</p>
        <div className='mt-2 flex flex-row justify-between'>
          <img src={petsIcon} alt="pets icon" />
          <img src={handIcon} alt="hand icon" />
          <img src={kidsIcon} alt="kids icon" />
        </div>
      </section>
      <section className='h-full'>
          <div>       
            <div className='flex items-center space-x-2'>
              <img src={location} alt="location icon" className='w-4 h-5' />
              <p className='text-[13px] text-textColor font-semibold'>{startLocation}</p>
            </div>
              <p className="text-gray-700 ml-7 text-[11px]">{startTime}</p>
          </div> 
          <div className="relative h-10">
              <div className="absolute left-2 bottom-2 h-full border-l-2 border-dashed border-customGreen"></div>
            </div>
          <div> 
            <div className='flex items-center space-x-2 '>
              <img src={location} alt="location icon" className='w-4 h-5' />
              <p className='text-[13px] text-textColor font-semibold'>{endLocation}</p>
          </div>
            <p className="text-gray-700 ml-7 text-[11px]">{endTime}</p>
          </div>
      </section>
    </article>
  )
}

CardTrip.propTypes = {
    name: PropTypes.string.isRequired,
    profilePicture: PropTypes.string.isRequired,
    seatsAvailable: PropTypes.string.isRequired,
    startLocation: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endLocation: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired
};

export default CardTrip