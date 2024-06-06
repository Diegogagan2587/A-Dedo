import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const PopupConfirmDelete = ({ show }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="mb-4 text-lg">Tu viaje ha sido <br /> eliminado con exito.</h2>
        <div className="flex justify-around">
          <button 
          className="px-4 py-2 text-[#5F5C5C] rounded-md">
            <Link to={"/profile/driver"}>Ir al inicio</Link> 
          </button>
          <button className="px-4 py-2 text-customGreen rounded-md">
            <Link to={"/trips/new/step-1"}>Crear viaje</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

PopupConfirmDelete.propTypes = {
  show: PropTypes.bool.isRequired,
}

export default PopupConfirmDelete