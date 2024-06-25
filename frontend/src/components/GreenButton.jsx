import { PropTypes } from "prop-types";
import { Link } from 'react-router-dom'

const GreenButton = ({onClick}) => {
  return (
    <Link to="/login" onClick={onClick} className="w-36 h-14 bg-customGreen text-white rounded-full m-6 font-roboto-flex
    flex justify-center items-center">
      Ingresar
    </Link>
  )
}

GreenButton.propTypes = {
  onClick: PropTypes.func
};
export default GreenButton