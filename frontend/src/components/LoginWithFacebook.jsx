import facebookSVG from '../assets/facebook.svg';

const LoginWithFacebook = () => {
  const handleLogin = () => {
    // Facebook login logic
  };
  return (
    <button
     className="bg-[#1877F2] text-white flex items-center justify-center p-2 rounded-full gap-2" 
    onClick={handleLogin}>
      <img src={facebookSVG} alt="facebook logo" />
      <span>Ingresar con facebook</span>
    </button>
  );
};

export default LoginWithFacebook;
