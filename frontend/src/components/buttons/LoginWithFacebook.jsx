import { PropTypes } from 'prop-types';
import facebookSVG from '../assets/facebook.svg';
import RoundedBtn from './RoundedBtn';

const LoginWithFacebook = ({ text, handleLogin }) => {
  return (
    <RoundedBtn
      text={text}
      onClick={handleLogin}
      className="w-[300px] h-[48px] bg-[#1877F2] text-white text-xs font-roboto-flex"
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
