import PropTypes from 'prop-types';
import curve from '../../assets//navbar/curve-2.svg';
import BackBtn from '../../components/BackBtn';

const TripDetailsTop = ({ name, bio, driverProfile }) => {
  return (
    <section
      className="
    w-full  
    relative
    text-white"
    >
      <img
        src={curve}
        alt="curve"
        className="
        w-full 
        z-10 absolute"
      />
      <div
        className="
        relative z-20
        flex pt-4
        "
      >
        <div className="flex items-start">
          <BackBtn to="/trips" />
        </div>

        <div className="flex flex-col items-center">
          <img src={driverProfile} alt="driver profile picture" />
          <a className='underline'>Ver perfil</a>
        </div>
        <div className="w-2/3 p-2">
          <h2 className='text-xl font-bold'>{name}</h2>
          <p>{bio}</p>
        </div>
      </div>
    </section>
  );
};

TripDetailsTop.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  driverProfile: PropTypes.string,
};

export default TripDetailsTop;
