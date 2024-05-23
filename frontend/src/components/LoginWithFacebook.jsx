import facebookSVG from '../assets/facebook.svg';

const LoginWithFacebook = () => {
  const handleLogin = () => {
    // Facebook login logic
  };
  return (
    <button
     className="bg-blue-500 text-white " 
    onClick={handleLogin}>
      <img src={facebookSVG} alt="facebook logo" />
      <span>Ingresar con facebook</span>
    </button>
  );
};

export default LoginWithFacebook;
