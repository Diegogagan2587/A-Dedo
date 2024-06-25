import { PropTypes } from 'prop-types';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import PopupContainer from './popups/PopupContainer';
import PopupButtonGroup from './popups/PopupButtonGroup';
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
        <PopupButtonGroup 
          onCancel={onClose}
          onContinue={handleContinue}
          continueLink={"/register/step-3"} 
          />
      </PopupContainer>
  )
}

PopupCreateAccount.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default PopupCreateAccount