const Login = () => {
  return (
    <section>
      <h1>Iniciar sesion</h1>
      <form>
        <input type="text" placeholder="Mail" />
        <input type="password" placeholder="Contraseña" />
        <button type="button">Crear cuenta</button>
        <button type="button">Ingresar</button>
      </form>
      <p>Olvidaste tu contrasena?</p>
      <button type="button">Ingresar con FAcebook</button>
      <button type="button">Ingresar con Google</button>
    </section>
  );
};

export default Login;
