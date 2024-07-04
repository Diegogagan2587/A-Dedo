import { PropTypes } from "prop-types";
import navbg from "../../assets/nav-background.svg"
import arrow from '../assets/leading-icon.png'
import { Link } from "react-router-dom";

const BackNav = ({text, to}) => {
  return (
    <nav className="relative z-20 top-0">
    <img src={navbg} alt="background" className="z-10 absolute w-full" />
    <div className="flex items-center z-10 relative top-0 w-full">
      <Link to={to}><img src={arrow} alt="arrow" /></Link> 
      <h2 className="text-white text-[20px] py-6 font-roboto-flex">{text}</h2>
    </div>
  </nav>
  )
}

BackNav.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string
};

export default BackNav