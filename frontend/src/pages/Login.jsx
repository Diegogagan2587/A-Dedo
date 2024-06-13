import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authenticateUser from "../store/requests/authenticateUser";
import LoginWGoogleBtn from "../components/LoginWGoogleBtn";
import ButtonGreen from "../components/ButtonGreen";
import Input from "../components/Input";

const Login = ({ setIsLoggedIn }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const userStatus = useSelector((state) => state.user.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (e) => {
    //place holder to prevent default
    e.preventDefault();
    setIsLoggedIn(true);
  };

  useEffect(() => {
    userStatus === "logged" && navigate("/trips");
  }, [navigate, userStatus, dispatch]);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(authenticateUser(user));
    setIsLoggedIn(true);
  };
  const handleCreateAccount = () => {
    navigate("/register/step-1");
  };
  return (
    <section className="flex flex-col w-full h-full m-0 items-center gap-4 pl-[48px] pr-[40px] pt-[20vw] sm:pt-20">
      <h1 className="my-2 text-[22px] font-medium">Iniciar sesión</h1>
      <form
        className="flex flex-col w-full items-center justify-around"
        onSubmit={handleLogin}
      >
        <Input
          type="email"
          value={user.email}
          autoComplete="username"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="e-mail"
          required={true}
        />
        <Input
          type="password"
          autoComplete="current-password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Contraseña"
          required={true}
        />
        <div className="flex gap-2 items-center my-2 w-full">
          <ButtonGreen
            onClick={handleCreateAccount}
            text={"Crear Cuenta"}
            type="button"
            className={"text-base w-1/2"}
          />
          <ButtonGreen
            onClick={handleLogin}
            type="submit"
            text={"Ingresar"}
            className={"text-sm w-[113px] h-[41px] bg-customGreen text-white"}
          />
        </div>
      </form>
      <div className="flex flex-col gap-7 w-full items-center my-2">
        <p className="text-sm font-medium">¿Olvidaste tu contraseña?</p>
        <LoginWGoogleBtn onClick={handleClick} text={"Ingresar con Google"} />
      </div>
    </section>
  );
};

Login.propTypes = {
  setIsLoggedIn: PropTypes.func,
};

export default Login;
