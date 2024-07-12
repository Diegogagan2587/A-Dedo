import { Link } from 'react-router-dom';
import back from '../../assets/back.png'
import { PropTypes } from 'prop-types';

const BtnNextIcon = ({ to, onClick }) => {
  return (
  <button className='bg-customGreen rounded-full'
  onClick={onClick}>
    <Link to={to}>
        <img src={back} alt="" className='w-[60px] h-[60px]' />
    </Link>
  </button>
  )
}

BtnNextIcon.propTypes = {
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default BtnNextIcon