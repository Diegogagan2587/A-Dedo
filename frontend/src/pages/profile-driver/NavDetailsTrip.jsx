import PropTypes from 'prop-types';
import BackBtn from "../../components/BackBtn"
import curve from '../../assets//navbar/curve-2.svg';
import driverProfile from '../../assets/main-profilepic.png'

const NavDetailsTrip = ({ name }) => {
  return (
    <section className="w-screen relative text-white">
      <img src={curve} alt="curve" className="w-full z-10 absolute"/>
      <div className="relative z-20 flex pt-4">
        <div className="flex items-start">
        <BackBtn to="/profile/driver" />
        </div>
        <div className='flex justify-center m-3'>
          <div className="flex flex-col items-center justify-around">
            <img src={driverProfile} alt="driver profile picture" />
          </div>
          <div className="flex items-center justify-center m-8">
            <h2 className='text-xl font-bold'>{name}</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

NavDetailsTrip.propTypes = {
  name: PropTypes.string.isRequired,
};


export default NavDetailsTrip