import { PropTypes } from "prop-types";

const GreenButton = ({onClick}) => {
  return (
    <button onClick={onClick} className="w-36 h-14 bg-customGreen text-white rounded-full m-6 font-roboto-flex">
      Ingresar
    </button>
  )
}

GreenButton.propTypes = {
  onClick: PropTypes.func
};
export default GreenButton