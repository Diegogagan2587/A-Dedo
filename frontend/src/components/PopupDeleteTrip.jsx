import { PropTypes } from 'prop-types';
import PopupContainer from './popups/PopupContainer';

const PopupDeleteTrip = ({ show, onClose, onContinue }) => {
  if (!show) return null;

  return (
    <PopupContainer >
        <h2 className="mb-4 text-lg font-roboto-flex">Estas por eliminar el viaje</h2>
        <p className="mb-6 text-lg">¿Deseas continuar?</p>
        <div className="flex justify-around">
          <button 
          onClick={onClose}
          className="px-4 py-2 text-[#5F5C5C] rounded-md font-roboto-flex">
            Cancelar
          </button>
          <button 
          onClick={onContinue}
          className="px-4 py-2 text-customGreen rounded-md font-roboto-flex">
            Continuar
          </button>
        </div>
    </PopupContainer>
  )
}

PopupDeleteTrip.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
}

export default PopupDeleteTrip