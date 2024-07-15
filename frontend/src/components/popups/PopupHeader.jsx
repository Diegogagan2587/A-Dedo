import PropTypes from 'prop-types';

const PopupHeader = ({ title, message }) => {
  return (
    <div className="popup-header">
      <h2 className="mb-4 text-lg font-roboto-flex">{title}</h2>
      <p className="mb-6 text-lg font-roboto-flex">{message}</p>
    </div>
  );
};

PopupHeader.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default PopupHeader;
