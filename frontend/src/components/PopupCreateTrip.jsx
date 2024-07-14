import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import PopupContainer from './popups/PopupContainer';
import PopupHeader from './popups/PopupHeader';
import PopupButtonGroup from './popups/PopupButtonGroup';
import createTrip from '../store/requests/createTrip'

const PopupCreateTrip = ({ show, onClose }) => {
  const dispatch = useDispatch();
  const trip = useSelector((state) => state.trips.new);
  const driver = useSelector((state) => state.user.data._id);
  const handleContinue = async () => {
    dispatch(createTrip({driver, ...trip}));
  };
  if (!show) return null;
  return (
    <PopupContainer >
        <PopupHeader 
          title="Estas por crear un nuevo viaje"
          message="¿Deseas continuar?"
        />
        <PopupButtonGroup 
          onCancel={onClose}
          onContinue={handleContinue}
          continueLink={"/trips/new/step-5"}
        />
    </PopupContainer>
  )
}

PopupCreateTrip.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default PopupCreateTrip