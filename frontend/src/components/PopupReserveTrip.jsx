import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import postReservation from '../store/requests/postReservation';
import PopupContainer from './PopupContainer';

const PopupReserveTrip = ({ show, onClose }) => {
  
  const dispatch = useDispatch();
  const reservation = useSelector((state) => state.trips.reserve);
  const handleReserve = () => {
    dispatch(postReservation(reservation));
  };

  if (!show) return null;
  return (
    <PopupContainer >
        <h2 className="mb-4 text-lg font-roboto-flex">Estas por reservar un viaje</h2>
        <p className="mb-6 text-lg">¿Deseas continuar?</p>
        <div className="flex justify-around">
          <button 
          onClick={onClose}
          className="px-4 py-2 text-[#5F5C5C] rounded-md font-roboto-flex">
            Cancelar
          </button>
          <button className="px-4 py-2 text-customGreen rounded-md font-roboto-flex"
            onClick={handleReserve}
          >
            <Link to={"/trips/:id/reserve/confirmation"}>Continuar</Link>
          </button>
        </div>
    </PopupContainer>
  )
}

PopupReserveTrip.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default PopupReserveTrip