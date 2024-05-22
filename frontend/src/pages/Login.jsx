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
      <p>Olvidaste tu contrasena?</p>
      <button type="button">Ingresar con Facebook</button>
      <button type="button">Ingresar con Google</button>
    </section>
  );
};

export default Login;
