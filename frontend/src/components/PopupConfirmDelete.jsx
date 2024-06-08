import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

const PopupConfirmDelete = ({ show }) => {
  const navigate = useNavigate();

  if (!show) return null;

  const goToProfileDriver = () => {
    navigate("/profile/driver", {state: {tripDeleted: true}});
  }

  const goToCreateTrip = () => {
    navigate("/trips/new/step-1"), {state: {tripDeleted: false}}
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="mb-4 text-lg">Tu viaje ha sido <br /> eliminado con exito.</h2>
        <div className="flex justify-around">
          <button 
          className="px-4 py-2 text-[#5F5C5C] rounded-md"
          onClick={goToProfileDriver}>
            Ir a inicio
          </button>
          <button className="px-4 py-2 text-customGreen rounded-md"
          onClick={goToCreateTrip}>
            Crear viaje
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