import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import PopupContainer from './popups/PopupContainer';

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
    <PopupContainer >
        <h2 className="mb-4 text-lg font-roboto-flex">Tu viaje ha sido <br /> eliminado con exito.</h2>
        <div className="flex justify-around">
          <button 
          className="px-4 py-2 text-[#5F5C5C] rounded-md font-roboto-flex"
          onClick={goToProfileDriver}>
            Ir a inicio
          </button>
          <button className="px-4 py-2 text-customGreen rounded-md font-roboto-flex"
          onClick={goToCreateTrip}>
            Crear viaje
          </button>
        </div>
    </PopupContainer>
  )
}

PopupConfirmDelete.propTypes = {
  show: PropTypes.bool.isRequired,
}

export default PopupConfirmDelete