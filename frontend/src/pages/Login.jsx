import PropTypes from 'prop-types';
import LoginWithFacebook from '../components/LoginWithFacebook';
import LoginWGoogleBtn from '../components/LoginWGoogleBtn';
import ButtonGreen from '../components/ButtonGreen';
import Input from '../components/Input';

const Login = ({setIsLoggedIn}) => {
  const handleClick = (e) => {
    //place holder to prevent default
    e.preventDefault();
    setIsLoggedIn(true);
  }
  return (
    <section className="flex flex-col w-screen h-screen m-0 items-center gap-4 pl-[48px] pr-[40px] pt-[20vw]">
      <h1 className="my-2 text-xl text-black">Iniciar sesion</h1>
      <form className="flex flex-col w-full items-center justify-around">
        <Input 
        type="email" 
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
        placeholder="e-mail"
      required={true}
        />
        <Input 
        type="password" 
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
        placeholder="Contraseña"
        required={true} 
        />
        <div className="flex gap-2 items-center my-2 w-full">
          <ButtonGreen onClick={handleClick} text={'Crear Cuenta'} className={"text-lg w-1/2"}/>
          <ButtonGreen onClick={handleClick} text={'Ingresar'} className={"text-sm w-1/2"}/>
        </div>
      </form>
      <div className='flex flex-col gap-2 w-full items-center my-2'>
        <p className='text-sm'>Olvidaste tu contrasena?</p>
        <LoginWithFacebook onClick={handleClick} text={'Ingresar con facebook'} />
        <LoginWGoogleBtn onClick={handleClick} text={'Ingresar con Google'} />
      </div>
    </section>
  );
};

Login.propTypes = {
  setIsLoggedIn: PropTypes.func,
};

export default Login;
