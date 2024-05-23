import facebookSVG from '../assets/facebook.svg';
import RoundedBtn from './RoundedBtn';

const LoginWithFacebook = ({ text }) => {
  const handleLogin = () => {
    // Facebook login logic
  };
  return (
    <RoundedBtn
      text={text}
      onClick={handleLogin}
      className="bg-[#1877F2] text-white"
      logo={facebookSVG}
      alt="facebook logo"
    />
  );
};

export default LoginWithFacebook;
