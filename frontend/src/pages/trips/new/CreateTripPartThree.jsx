import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setNavigationLayout } from '../../../store/slices/navigationSlice';
import volante from "../../../assets/volante.png"
import removeCricle from "../../../assets/remove_circle.png"
import addCricle from "../../../assets/add_circle.png"
import BtnNextIcon from "../../../components/BtnNextIcon"
import { setAvailableSeats } from '../../../store/slices/tripsSlice';

const CreateTripPartThree = () => {
  const dispatch = useDispatch();
  const [seats, setSeats] = useState(0);

  useEffect(() => {
    dispatch(setNavigationLayout("create-trip-3"));
    return () => dispatch(setNavigationLayout("main-nav"));
  }, [dispatch]);

  return (
    <div className="w-full">
      <main className="">
        <section className="m-4 flex items-center">
          <img src={volante} alt="" />
          <h2 className='text-textColor font-extrabold text-mainTitle text-[26px] m-2'>Acompañantes</h2>
        </section>
        <section className="m-4 mt-2 py-3">
        <h2 className="text-[18px] font-semibold">Cantidad de pasajeros</h2>
          <input 
          type="number" 
          placeholder="Pasajeros" 
          className='border-[1px] border-black px-4 my-2 py-2 rounded-md text-[#49454F] placeholder-[#49454F] placeholder:text-sm text-base'
          onChange={(e) => setSeats(e.target.value)}
          />
        </section>
        <section className="m-4 py-3">
          <h2 className="text-[18px] font-semibold">Selecciona el precio por pasajero</h2>
          <div className="flex items-center justify-around py-5">
            <img src={removeCricle} alt="" />
            <span className="font-semibold text-[26px]">$10.000</span>
            <img src={addCricle} alt="" />
          </div>
          <p className="text-center">
            <em className="text-[14px] py-4">Valor recomendado por persona</em>
          </p>
        </section>
        <span className="absolute right-4 bottom-30">
          <BtnNextIcon
          to="/trips/new/step-4"
          onClick={() => dispatch(setAvailableSeats(seats))}
          />
        </span>
      </main>
    </div>
  )
}

export default CreateTripPartThree
