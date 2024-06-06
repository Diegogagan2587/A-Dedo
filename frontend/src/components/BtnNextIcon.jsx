import { Link } from 'react-router-dom';
import back from '../assets/back.png'
import { PropTypes } from 'prop-types';

const BtnNextIcon = ({ to }) => {
  return (
  <button className='bg-customGreen rounded-full'>
    <Link to={to}>
        <img src={back} alt="" className='w-[60px] h-[60px]' />
    </Link>
  </button>
  )
}

BtnNextIcon.propTypes = {
  to: PropTypes.string.isRequired
}

export default BtnNextIcon