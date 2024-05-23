import googleSVG from '../assets/google.svg';
import RoundedBtn from './RoundedBtn';

const LoginWGoogleBtn = ({text}) => {
  const handleLogin = () => {
    // Google login logic
  };
  return (
    <RoundedBtn
        text={text}
        onClick={handleLogin}
        className="bg-[#E6E6E6] text-[#49454F] text-xs"
        logo={googleSVG}
        alt="google logo"
    />
  );
};

export default LoginWGoogleBtn;
