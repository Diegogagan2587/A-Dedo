import PropTypes from 'prop-types';
import location from '../assets/location.png';
import passenger from '../assets/pasajero.png'
import passengerOne from '../assets/pasajerouno.png';
import passengerTwo from '../assets/pasajerodos.png';
import { Link } from 'react-router-dom';
import formatDate from '../store/utils/formatDate';

function CardDriverTrip({date, origin, destination, startTime, endTime}) {
  return (
    <article className="border border-customGreen rounded-md m-4 p-4 shadow-lg">
        <div className='flex absolute right-10 top-58'>
        <img src={passenger} alt="" />
        <p className='text-customGreen font-bold'>x1</p>
      </div>
      <h2 className='font-roboto-flex'>{formatDate(date)}</h2>
      <section id="locations" className="flex items-center justify-center w-full mt-4">
            <div id="location-bar-icon" className="flex flex-col justify-center items-center gap-1 p-2">
              <img src={location} alt="location" className="w-[24px] h-[27px]" />
              <hr className="border-[1px] border-green-600 border-dashed w-[0px] h-[40px] " />
              <img src={location} alt="location" className="w-[24px] h-[27px]" />
            </div>
            <div id="location-text-container" className="min-h-[120px] flex flex-col justify-between gap-3 p-1 w-full">
              <div>
                <p className="text-[13px] text-textColor font-semibold">{origin}</p>
                <p className="text-gray-700 text-[11px]">{startTime}</p>
              </div>
              <div>
                <p className="text-[13px] text-textColor font-semibold">{destination}</p>
                <p className="text-gray-700 text-[11px]">{endTime}</p>
              </div>
            </div>
          </section>
      <section>
        <h2 className='text-customGreen text-[14px] font-semibold font-roboto-flex'>Pasajeros confirmados</h2>
        <div className='flex mt-2 '>
          <img src={passengerOne} alt="" className='px-2' />
          <img src={passengerTwo} alt="" className='px-2'/>
        </div>
      </section>
      <section>
        <button className='w-[110px] h-[43px] text-[14px] bg-customGreen rounded-full text-white relative left-40 font-roboto-flex'>
          <Link to={"/trips/:id/details-driver"}>Ver mas</Link>
        </button>
      </section>
    </article>
  )
}

CardDriverTrip.propTypes = {
  date: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
};

export default CardDriverTrip;
