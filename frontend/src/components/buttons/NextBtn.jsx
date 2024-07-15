import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

export const NextBtn = ({ to, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="w-[165px] h-14 bg-customGreen text-white rounded-full m-6 p-2 font-roboto-flex">
        <Link to={to} >Continuar</Link>
    </button>
  )
}

NextBtn.propTypes = {
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}