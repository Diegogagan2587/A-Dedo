import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const PopupButtonGroup = ({ onCancel, onContinue, continueLink }) => {
  const navigate = useNavigate();
  const handleContinue = () => {
    onContinue && onContinue();
    continueLink && navigate(continueLink);
  };
  return (
    <div className="flex justify-around">
      <button
        onClick={onCancel}
        className="px-4 py-2 text-[#5F5C5C] rounded-md font-roboto-flex"
      >
        Cancelar
      </button>
      <button
        onClick={handleContinue}
        className="px-4 py-2 text-customGreen rounded-md font-roboto-flex"
      >
        Continuar
      </button>
    </div>
  );
};

PopupButtonGroup.propTypes = {
    onCancel: PropTypes.func,
    onContinue: PropTypes.func,
    continueLink: PropTypes.string,
  };

export default PopupButtonGroup;
