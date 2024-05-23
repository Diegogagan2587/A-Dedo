import { PropTypes } from 'prop-types';

const RoundedBtn = ({ text, onClick, className, logo, alt }) => {
  return (
    <button
      className={`${className} flex items-center justify-center p-2 rounded-full gap-2`}
      onClick={onClick}
    >
      {logo && <img src={logo} alt={alt} />}
      <span>{text}</span>
    </button>
  );
}

RoundedBtn.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  logo: PropTypes.string,
  alt: PropTypes.string
};

export default RoundedBtn;