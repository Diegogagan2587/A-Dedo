import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  setFullName,
  setEmail,
  setPhone,
} from "../../../store/slices/userSlice";
import Input from '../../../components/Input';
import argentina from '../../../assets/argentina.png'
import back from '../../../assets/back.png'

function UserDetailsForm () {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNext = () => {
    dispatch(setFullName(name));
    dispatch(setEmail(mail));
    dispatch(setPhone(phoneNumber));
  };

  return (
    <main className='mt-20'>
      <section className='flex flex-col items-center'>
        <span className='font-semibold text-[#696969] font-roboto-flex'>1 de 2</span>
        <h2 className='text-textColor font-extrabold font-baloo text-[20px]'>Crea tu cuenta en 2 pasos</h2>
      </section>

      <form>
        <section id="name" className='m-4 mt-5'>
          <h2 className='font-semibold text-[18px] font-roboto-flex'>¿Cuál es tu nombre?</h2>
          <Input
            id="name"
            ariaLabel="nombre y apellido"
            type="text"
            placeholder="Nombre y apellido"
            onChange={(e) => setName(e.target.value)}
          />
        </section>
      
        <section id="email" className='m-4 mt-5'>
          <h2 className='font-semibold text-[18px] font-roboto-flex'>Email</h2>
          <Input
            id="email"
            ariaLabel="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setMail(e.target.value)}
          />
        </section>

        <section id="phone" className='m-4 mt-5'>
          <h2 className='font-semibold text-[18px] font-roboto-flex'>¿Cuál es tu número de teléfono?</h2>
          <div className='flex items-center gap-3 p-2'>
            <img src={argentina} alt="" />
            <Input
              id="phone"
              ariaLabel="teléfono"
              type="phone"
              placeholder="Teléfono"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </section>
      </form>
      <Link
        className='bg-customGreen rounded-full absolute right-10 mt-3'
        to="/register/step-2"
        onClick={handleNext}
        aria-label="siguiente"
      >
        <img src={back} alt="" className="w-[60px] h-[60px]" />
      </Link>
    </main>
  )
}

export default UserDetailsForm;