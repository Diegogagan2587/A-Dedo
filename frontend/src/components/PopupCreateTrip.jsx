import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import PopupContainer from './PopupContainer';
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
        <h2 className="mb-4 text-lg font-roboto-flex">Estas por crear un nuevo viaje</h2>
        <p className="mb-6 text-lg font-roboto-flex">¿Deseas continuar?</p>
        <div className="flex justify-around">
          <button 
          onClick={onClose}
          className="px-4 py-2 text-[#5F5C5C] rounded-md font-roboto-flex">
            Cancelar
          </button >
          <button 
          onClick={handleContinue}
            className="px-4 py-2 text-customGreen rounded-md font-roboto-flex">
            <Link to="/trips/new/step-5"> Continuar</Link>
          </button>
        </div>
    </PopupContainer>
  )
}

PopupCreateTrip.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default PopupCreateTrip