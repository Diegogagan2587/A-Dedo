import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPassword, acceptTerms } from "../../../store/slices/userSlice";
import Input from "../../../components/Input";
import PopupCreateAccount from "../../../components/PopupCreateAccount";

const CreateAccountTwo = () => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const [passwordA, setPasswordA] = useState("");
  const [passwordB, setPasswordB] = useState("");
  const [terms, setTerms] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleNext = () => {
    console.log("handle next-->", passwordA, passwordB);
    dispatch(setPassword({ passwordA, passwordB }));
    dispatch(acceptTerms(terms));
    togglePopup();
  };

  return (
    <main className="mt-20">
      <section className="flex flex-col items-center">
        <span className="font-semibold text-[#696969]">2 de 2</span>
        <h2 className="text-textColor font-extrabold text-mainTitle text-[20px]">
          Crea tu contraseña
        </h2>
        <em className="text-[14px] m-4">
          La contraseña debe tener mínimo 8 caracteres, una mayúscula, una
          minúscula y un número.
        </em>
      </section>
      <section className="m-4">
        <Input
          id="password"
          type="password"
          autoComplete="password"
          placeholder="Contraseña"
          onChange={(e) => setPasswordA(e.target.value)}
        />
      </section>
      <section className="m-4">
        <h2 className="font-semibold text-[18px] mb-2">
          Escribe nuevamente tu contraseña
        </h2>
        <Input
          id="password"
          autoComplete="password"
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPasswordB(e.target.value)}
        />
      </section>
      <section className="m-4 flex items-center">
        <input
          type="checkbox"
          className="w-[21px] h-[20px] border border-black"
          checked={terms}
          onChange={() => setTerms(!terms)}
        />
        <p className="m-3">
          He leído y acepto los{" "}
          <span className="text-customGreen">TÉRMINOS Y CONDICIONES</span>
        </p>
      </section>
      <section className="flex items-center justify-center">
        <button
          onClick={handleNext}
          className="w-[165px] h-14 bg-customGreen text-white rounded-full m-6 p-2"
        >
          Registrarme
        </button>
      </section>
      <PopupCreateAccount show={showPopup} onClose={togglePopup} />
    </main>
  );
};

export default CreateAccountTwo;
