import { PropTypes } from 'prop-types';

const LocationAndTime = ({id, location, time }) => {
    return (
      <div id={id} className="flex flex-col items-center">
        <p className="text-[13px] text-textColor font-semibold">
          {location}
        </p>
        <time className="text-gray-700 text-[11px]">{time}</time>
      </div>
    );
  };

  LocationAndTime.propTypes = {
    id: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
  };

  export default LocationAndTime;
