import { PropTypes } from 'prop-types';
import location from '../assets/location.png';

function LastTripCard({ rol, date, time, price, startLocation, endLocation }) {
  return (
    <article className='min-w-[328px] min-h-[140px] border border-gray-400 rounded-lg flex p-4 items-center space-x-4 shadow-lg m-4'>
      <section>
        <h2 className='text-customGreen font-semibold text-[14px] p-2 font-roboto-flex'>{rol}</h2>
        <p className='text-customGreen text-[12px] text-center'>{date}</p>
        <p className='text-customGreen text-[12px] text-center'>{time}</p>
        <p className='text-customGreen text-[12px] text-center'>{price}</p>
      </section>
      <section className='flex'>
        <div id="location-bar-icon" className="flex flex-col justify-center items-center gap-1 p-2">
          <img src={location} alt="location" className="w-[24px] h-[27px]" />
          <hr className="border-[1px] border-green-600 border-dashed w-[0px] h-[40px] " />
          <img src={location} alt="location" className="w-[24px] h-[27px]" />
        </div>
        <div id="location-text-container" className="min-h-[110px] flex flex-col justify-between gap-2 p-1 w-full">
          <p className='text-[12px]'>{startLocation}</p>
          <p className='text-[12px]'>{endLocation}</p>
        </div>
      </section>
    </article>
  )
}

LastTripCard.propTypes = {
  rol: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  price: PropTypes.string,
  startLocation: PropTypes.string.isRequired,
  endLocation: PropTypes.string.isRequired,
}

export default LastTripCard