import { PropTypes } from 'prop-types';
import { Link } from "react-router-dom"

const PopupCreateAccount = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="mb-4 text-lg">Estas por registarte en <span className="text-customGreen font-title">a dedo</span></h2>
        <p className="mb-6 text-lg">¿Deseas continuar?</p>
        <div className="flex justify-around">
          <button 
          onClick={onClose}
          className="px-4 py-2 text-[#5F5C5C] rounded-md">
            Cancelar
          </button>
          <button className="px-4 py-2 text-customGreen rounded-md">
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