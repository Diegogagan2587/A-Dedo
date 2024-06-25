import { PropTypes } from 'prop-types';
import PopupContainer from './popups/PopupContainer';
import PopupHeader from './popups/PopupHeader';
import PopupButtonGroup from './popups/PopupButtonGroup';

const PopupDeleteTrip = ({ show, onClose, onContinue }) => {
  if (!show) return null;

  return (
    <PopupContainer >
        <PopupHeader
          title="Estas por eliminar el viaje"
          message="¿Deseas continuar?"
        />
        <PopupButtonGroup 
          onCancel={onClose}
          onContinue={onContinue}
        />
    </PopupContainer>
  )
}

PopupDeleteTrip.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
}

export default PopupDeleteTrip