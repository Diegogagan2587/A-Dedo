import { PropTypes } from 'prop-types';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import PopupContainer from './popups/PopupContainer';
import registerUser from '../store/requests/registerUser';

const PopupCreateAccount = ({ show, onClose }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.new);
  const handleContinue = async () => {
    dispatch(registerUser(user))
  };
  if (!show) return null;

  return (
    <PopupContainer >
        <h2 className="mb-4 text-lg font-roboto-flex">Estas por registarte en <span className="text-customGreen font-title">a dedo</span></h2>
        <p className="mb-6 text-lg">¿Deseas continuar?</p>
        <div className="flex justify-around">
          <button 
          onClick={onClose}
          className="px-4 py-2 text-[#5F5C5C] rounded-md font-roboto-flex">
            Cancelar
          </button>
          <Link 
            className="px-4 py-2 text-customGreen rounded-md font-roboto-flex"
            onClick={handleContinue}  
            to="/register/step-3"
          > Continuar</Link>
        </div>
      </PopupContainer>
  )
}

PopupCreateAccount.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default PopupCreateAccount