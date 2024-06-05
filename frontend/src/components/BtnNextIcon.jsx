import back from '../assets/back.png'
import { PropTypes } from 'prop-types';

const BtnNextIcon = ({ href }) => {
  return (
  <button className='bg-customGreen rounded-full'>
    <a href={href}>
        <img src={back} alt="" className='w-[60px] h-[60px]' />
    </a>
  </button>
  )
}

BtnNextIcon.propTypes = {
  href: PropTypes.string.isRequired
}

export default BtnNextIcon