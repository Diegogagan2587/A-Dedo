import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

export const NextBtn = ({ to }) => {
  return (
    <button className="w-[165px] h-14 bg-customGreen text-white rounded-full m-6 p-2">
        <Link to={to} >Continuar</Link>
    </button>
  )
}

NextBtn.propTypes = {
  to: PropTypes.string.isRequired
}