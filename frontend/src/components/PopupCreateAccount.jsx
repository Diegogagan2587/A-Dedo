import { PropTypes } from 'prop-types';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import registerUser from '../store/requests/registerUser';

const PopupCreateAccount = ({ show, onClose }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.new);
  const handleContinue = async () => {
    dispatch(registerUser(user))
  };
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="mb-4 text-lg font-roboto-flex">Estas por registarte en <span className="text-customGreen font-title">a dedo</span></h2>
        <p className="mb-6 text-lg">¿Deseas continuar?</p>
        <div className="flex justify-around">
          <button 
          onClick={onClose}
          className="px-4 py-2 text-[#5F5C5C] rounded-md font-roboto-flex">
            Cancelar
          </button>
          <button 
            onClick={handleContinue}
            className="px-4 py-2 text-customGreen rounded-md font-roboto-flex">
            <Link to="/register/step-3"> Continuar</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

PopupCreateAccount.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default PopupCreateAccount