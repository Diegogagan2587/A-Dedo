import LoginWithFacebook from '../components/LoginWithFacebook';
import LoginWGoogleBtn from '../components/LoginWGoogleBtn';
import ButtonGreen from '../components/ButtonGreen';

const Login = () => {
  return (
    <section className="flex flex-col border-2 w-screen h-screen m-0 gap-2 items-center justify-center">
      <h1 className="text-xl text-black">Iniciar sesion</h1>
      <form className="flex flex-col gap-2 items-center">
        <input type="text" placeholder="Mail" />
        <input type="password" placeholder="Contraseña" />
        <div className="flex gap-2 items-center">
          <ButtonGreen text={'Crear Cuenta'} className={"text-lg"}/>
          <ButtonGreen text={'Ingresar'} className={"text-sm"}/>
        </div>
      </form>
      <div className='flex flex-col gap-2'>
        <p className='text-sm'>Olvidaste tu contrasena?</p>
        <LoginWithFacebook text={'Ingresar con facebook'} />
        <LoginWGoogleBtn text={'Ingresar con Google'} />
      </div>
    </section>
  );
};

export default Login;
