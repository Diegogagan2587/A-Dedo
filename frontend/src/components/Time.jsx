import clock from "../assets/clock.svg";
import { PropTypes } from 'prop-types';

const Time = ({ time }) => {
    return (
      <div className="flex gap-2 items-center">
        <img src={clock} alt="clock" className="w-[20px] " />
        <span>{time}</span>
      </div>
    );
  };

  Time.propTypes = {
    time: PropTypes.string.isRequired,
  }

  export default Time;