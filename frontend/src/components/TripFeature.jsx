import PropTypes from 'prop-types';

const TripFeature = ({ text, icon }) => {
    return (
      <li
        className="max-w-[55px]
      flex flex-col items-center"
      >
        <img src={icon} alt="icon" />
        <span className='text-center font-roboto-flex'>{text}</span>
      </li>
    );
  };

TripFeature.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

  export default TripFeature;