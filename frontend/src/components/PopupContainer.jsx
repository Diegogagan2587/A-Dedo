import { PropTypes } from 'prop-types';

const PopupContainer = ({ children }) => {
  return (
    <div
      className="popup-container
      fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        {children}
      </div>
    </div>
  );
};

export default PopupContainer;

PopupContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
