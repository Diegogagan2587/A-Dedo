import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const GreenLinkButton = ({ to, text }) => {
  return (
    <Link
      className="w-[165px] h-14 bg-customGreen text-white rounded-full m-6 p-2 font-roboto-flex
      flex items-center justify-center"
      to={to}
    >
      {text}
    </Link>
  );
};

GreenLinkButton.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
};

export default GreenLinkButton;
