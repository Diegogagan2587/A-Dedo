
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import registerDriver from '../../../store/requests/registerDriver'
import Input from "../../../components/Input"
import imagenAdjuntar from '../../../assets/Imagen-adjuntar.png'
import { NextBtn } from "../../../components/NextBtn"

const CarRegister = () => {
  const dispatch = useDispatch();
  const [makeAndModel, setMakeAndModel] = useState("");
  const driver = useSelector((state)=> state.user.data._id)
  const handleSubmit = ()=>{
    dispatch(registerDriver({driver, makeAndModel}));
  }
  return (
    <main className="mt-20">
      <h2 className='text-textColor font-extrabold text-mainTitle text-[26px] text-center'>Ultimo paso</h2>
      <p className="text-center text-[18px]">Carga los datos de tu auto</p>

      <section className="flex flex-col m-6">
        <form action="">
          <h2 className="font-semibold">Marca y modelo</h2>
          <Input 
            type="text"
            placeholder='volkswagen - Golf'
            value={makeAndModel}
            onChange={(e) => setMakeAndModel(e.target.value)}
            required={true}
          />
        </form>
      </section>

      <section className="m-6">
        <h2 className="text-[20px]">Foto del auto y la patente</h2>
          <div className='flex flex-row items-center justify-around m-4 p-3'>
            <img src={imagenAdjuntar} alt="" />
            <img src={imagenAdjuntar} alt="" />
          </div>
      </section>
      <section className="flex items-center justify-center">
        <NextBtn 
         onClick={handleSubmit}
         to="/register/vehicle-end"
        />
      </section>
    </main>
  )
}

export default CarRegister