import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const BackBtn = ({to}) => {
    return (
      <button>
        <Link to={to}>
        <svg
          width="41"
          height="41"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_527_2072)">
            <path
              d="M28.2382 19.1656L16.0688 19.2926L21.6002 13.6446L20.1656 12.2495L12.2495 20.3325L20.3325 28.2486L21.7277 26.824L16.0897 21.2925L28.259 21.1655L28.2382 19.1656Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_527_2072">
              <rect
                x="0.0415039"
                y="0.45871"
                width="40"
                height="40"
                rx="20"
                transform="rotate(-0.597608 0.0415039 0.45871)"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
        </Link>
      </button>
    );
  };

BackBtn.propTypes = {
    to: PropTypes.string.isRequired,
};

  export default BackBtn;