import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setNavigationLayout } from '../../../store/slices/navigationSlice';
import {setAdditionalOptions} from '../../../store/slices/tripsSlice';
import volante from "../../../assets/volante.png"
import Input from "../../../components/Input"
import paradas from "../../../assets/paradas.png"
import petsImg from "../../../assets/pets.png"
import family from "../../../assets/family.png"
import fastFood from "../../../assets/fastfood.png"
import PopupCreateTrip from "../../../components/PopupCreateTrip"
import BackNav from '../../../components/BackNav';

const CreateTripPartFour = () => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const [stops, setStops] = useState(false);
  const [pets, setPets] = useState(false);
  const [childrens, setchildrens] = useState(false);
  const [acceptFood, setAcceptFood] = useState(false);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    dispatch(setNavigationLayout("create-trip-4"));
    return () => dispatch(setNavigationLayout("main-nav"));
  }, [dispatch]);

  const handleCreateTrip = () => {
    setShowPopup(!showPopup);
    dispatch(setAdditionalOptions({stops, pets, childrens, acceptFood, notes}));
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  
  return (
    <div className="">
      <main className="">
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
            checked={stops}
            onChange={() => setStops(!stops)}
            className="w-[20px] h-[20px]"/>
          </article>
          <article className="flex items-center gap-4 m-7">
          <img src={petsImg} alt="" className="w-[23px] h-[25px]" />
            <p>Aceptas viajar con mascotas</p>
            <input 
            type="checkbox"
            checked={pets}
            onChange={() => setPets(!pets)} 
            className="w-[20px] h-[20px]"/>
          </article>
          <article className="flex items-center gap-4 m-7">
          <img src={family} alt="" className="w-[23px] h-[25px]" />
            <p>Aceptas viajar con niños</p>
            <input 
            type="checkbox" 
            checked={childrens}
            onChange={() => setchildrens(!childrens)}
            className="w-[20px] h-[20px]"/>
          </article>
          <article className="flex items-center gap-4 m-7">
          <img src={fastFood} alt="" />
            <p>Aceptas comer durante el viaje</p>
            <input 
            type="checkbox"
            checked={acceptFood}
            onChange={() => setAcceptFood(!acceptFood)} 
            className="w-[20px] h-[20px]"/>
          </article>
        </section>
        <section className="m-4 mt-10">
          <h2 className="text-[18px] font-semibold mb-3">¿Queres informar algo más?</h2>
          <Input 
          onChange={(e) => setNotes(e.target.value)}
          />
        </section>
        {/* esto despues lo cambio por el componente crear viaje bnt */}
        <section className="absolute right-3">
          <button 
            onClick={handleCreateTrip}
            className="w-36 h-14 bg-customGreen text-white rounded-full m-6">
            Crear Viaje
          </button>
        </section>
        <PopupCreateTrip show={showPopup} onClose={togglePopup} />
      </main>
    </div>
  )
}

export default CreateTripPartFour