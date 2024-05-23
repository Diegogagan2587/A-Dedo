import LoginWithFacebook from '../components/LoginWithFacebook';
import LoginWGoogleBtn from '../components/LoginWGoogleBtn';

const Login = () => {
  return (
    <section className="flex flex-col">
      <h1 className="text-xl text-black">Iniciar sesion</h1>
      <form className="flex flex-col">
        <input type="text" placeholder="Mail" />
        <input type="password" placeholder="Contraseña" />
        <div className="flex">
          <button type="button">Crear cuenta</button>
          <button type="button">Ingresar</button>
        </div>
      </form>
      <div className='flex flex-col border-2 w-3/ gap-2'>
        <p>Olvidaste tu contrasena?</p>
        <LoginWithFacebook text={'Ingresar con facebook'} />
        <LoginWGoogleBtn text={'Ingresar con Google'} />
      </div>
    </section>
  );
};

export default Login;
