import { PropTypes } from 'prop-types';
import auto from '../assets/auto.png'

const CarModel = ({text}) => {
  return (
    <div className='flex flex-row text-sm items-center mt-3'>
      <img src={auto} alt="auto icon" className="w-[25px] h-[25px]" />
      <h2 className='ml-2 font-roboto-flex'>{text}</h2>
    </div>
  )
}

CarModel.propTypes = {
  text: PropTypes.string,
}

export default CarModel