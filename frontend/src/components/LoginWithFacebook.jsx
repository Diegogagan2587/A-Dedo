import { PropTypes } from 'prop-types';
import facebookSVG from '../assets/facebook.svg';
import RoundedBtn from './RoundedBtn';

const LoginWithFacebook = ({ text, handleLogin }) => {
  return (
    <RoundedBtn
      text={text}
      onClick={handleLogin}
      className="bg-[#1877F2] text-white text-xs"
      logo={facebookSVG}
      alt="facebook logo"
    />
  );
};

LoginWithFacebook.propTypes = {
  text: PropTypes.string,
  handleLogin: PropTypes.func
};

export default LoginWithFacebook;
