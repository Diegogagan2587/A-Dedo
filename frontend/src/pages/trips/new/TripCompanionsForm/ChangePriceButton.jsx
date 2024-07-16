import { PropTypes } from 'prop-types';

const ChangePriceButton = ({ id, iconSrc, altText, onClick, ariaLabel }) => {
  return (
    <button id={id} onClick={onClick} aria-label={ariaLabel}>
      <img src={iconSrc} alt={altText} />
    </button>
  );
};

ChangePriceButton.propTypes = {
  iconSrc: PropTypes.string,
  altText: PropTypes.string,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
  id: PropTypes.string,
};

export default ChangePriceButton;
