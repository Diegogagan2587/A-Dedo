import volante from "../../../assets/volante.png"
import Input from "../../../components/Input"
import paradas from "../../../assets/paradas.png"
import pets from "../../../assets/pets.png"
import family from "../../../assets/family.png"
import fastFood from "../../../assets/fastfood.png"
import { useState } from "react"
import PopupCreateTrip from "../../../components/PopupCreateTrip"

const CreateTripPartFour = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  }

  return (
    <main className="mt-20">
      <section className="m-4 flex items-center">
        <img src={volante} alt="" />
        <h2 className='text-textColor font-extrabold text-mainTitle text-[26px] m-2'>Observaciones</h2>
			</section>
      <section>
        <h2 className="text-[18px] font-semibold m-4">Selecciona la opción que prefieras</h2>
        <article className="flex items-center gap-4 m-7">
          <img src={paradas} alt="" />
          <p>Aceptas paradas intermedias</p>
          <input 
          type="checkbox" 
          className="w-[20px] h-[20px]"/>
        </article>
        <article className="flex items-center gap-4 m-7">
        <img src={pets} alt="" className="w-[23px] h-[25px]" />
          <p>Aceptas viajar con mascotas</p>
          <input 
          type="checkbox" 
          className="w-[20px] h-[20px]"/>
        </article>
        <article className="flex items-center gap-4 m-7">
        <img src={family} alt="" className="w-[23px] h-[25px]" />
          <p>Aceptas viajar con niños</p>
          <input 
          type="checkbox" 
          className="w-[20px] h-[20px]"/>
        </article>
        <article className="flex items-center gap-4 m-7">
        <img src={fastFood} alt="" />
          <p>Aceptas comer durante el viaje</p>
          <input 
          type="checkbox" 
          className="w-[20px] h-[20px]"/>
        </article>
      </section>
      <section className="m-4 mt-10">
        <h2 className="text-[18px] font-semibold mb-3">¿Queres informar algo más?</h2>
        <Input />
      </section>
      {/* esto despues lo cambio por el componente crear viaje bnt */}
      <section className="absolute right-3">
        <button 
          onClick={togglePopup}
        className="w-36 h-14 bg-customGreen text-white rounded-full m-6">
          Crear Viaje
        </button>
      </section>
      <PopupCreateTrip show={showPopup} onClose={togglePopup} />
    </main>
  )
}

export default CreateTripPartFour