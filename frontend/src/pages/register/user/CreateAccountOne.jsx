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

function CreateAccountOne() {
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
        <span className='font-semibold text-[#696969]'>1 de 2</span>
        <h2 className='text-textColor font-extrabold text-mainTitle text-[20px]'>Crea tu cuenta en 2 pasos</h2>
      </section>

      <form>
        <section id="name" className='m-4 mt-5'>
          <h2 className='font-semibold text-[18px]'>¿Cuál es tu nombre?</h2>
          <Input 
            id="name"
            type="text"
            placeholder="Nombre y apellido"
            onChange={(e) => setName(e.target.value)}
          />
        </section>
      
        <section id="email" className='m-4 mt-5'>
          <h2 className='font-semibold text-[18px]'>Email</h2>
          <Input 
            id="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setMail(e.target.value)}
          />
        </section>

        <section id="phone" className='m-4 mt-5'>
          <h2 className='font-semibold text-[18px]'>¿Cuál es tu número de teléfono?</h2>
          <div className='flex items-center gap-3 p-2'>
          <img src={argentina} alt="" />
          <Input 
            id="phone"
            type="phone"
            placeholder="Teléfono"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          </div>
        </section>
      </form>
      <button className='bg-customGreen rounded-full absolute right-10 mt-3'
        onClick={handleNext}>
        <Link to="/register/step-2">
            <img src={back} alt="" className='w-[60px] h-[60px]' />
        </Link>
      </button>
    </main>
  )
}

export default CreateAccountOne