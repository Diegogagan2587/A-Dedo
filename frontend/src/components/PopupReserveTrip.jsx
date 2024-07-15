import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import postReservation from '../store/requests/postReservation';
import PopupContainer from './popups/PopupContainer';
import PopupHeader from './popups/PopupHeader';
import PopupButtonGroup from './popups/PopupButtonGroup';

const PopupReserveTrip = ({ show, onClose }) => {
  
  const dispatch = useDispatch();
  const reservation = useSelector((state) => state.trips.reserve);
  const handleReserve = () => {
    dispatch(postReservation(reservation));
  };

  if (!show) return null;
  return (
    <PopupContainer >
        <PopupHeader
          title="Estas por reservar un viaje"
          message="¿Deseas continuar?"
        />
        <PopupButtonGroup 
          onCancel={onClose}
          onContinue={handleReserve}
          continueLink={"/trips/:id/reserve/confirmation"}
        />
    </PopupContainer>
  )
}

PopupReserveTrip.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default PopupReserveTrip