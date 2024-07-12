import { PropTypes } from 'prop-types';
import googleSVG from '../assets/google.svg';
import RoundedBtn from './buttons/RoundedBtn';

const LoginWGoogleBtn = ({text}) => {
  const handleLogin = () => {
    // Google login logic
  };
  return (
    <RoundedBtn
        text={text}
        onClick={handleLogin}
        className="w-[300px] h-[48px] bg-[#E6E6E6] text-[#49454F] text-xs font-roboto-flex"
        logo={googleSVG}
        alt="google logo"
    />
  );
};

LoginWGoogleBtn.propTypes = {
  text: PropTypes.string,
};

export default LoginWGoogleBtn;
