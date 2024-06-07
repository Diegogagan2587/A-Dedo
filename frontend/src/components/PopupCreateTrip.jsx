import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
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
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="mb-4 text-lg">Estas por crear un nuevo viaje</h2>
        <p className="mb-6 text-lg">¿Deseas continuar?</p>
        <div className="flex justify-around">
          <button 
          onClick={onClose}
          className="px-4 py-2 text-[#5F5C5C] rounded-md">
            Cancelar
          </button >
          <button 
          onClick={handleContinue}
            className="px-4 py-2 text-customGreen rounded-md">
            <Link to="/trips/new/step-5"> Continuar</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

PopupCreateTrip.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default PopupCreateTrip