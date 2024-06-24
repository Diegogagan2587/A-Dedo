import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const GreenLinkButton = ({ to, text, onClick }) => {
  return (
    <Link
      className="w-[165px] h-14 bg-customGreen text-white rounded-full m-6 p-2 font-roboto-flex
      flex items-center justify-center"
      to={to}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

GreenLinkButton.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default GreenLinkButton;
