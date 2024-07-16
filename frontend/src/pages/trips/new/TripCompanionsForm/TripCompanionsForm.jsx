import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setNavigationLayout } from '../../../../store/slices/navigationSlice';
import volante from "../../../../assets/volante.png"
import BtnNextIcon from "../../../../components/buttons/BtnNextIcon"
import { setAvailableSeats } from '../../../../store/slices/tripsSlice';
import InputPricePerPassenger from './InputPricePerPassenger';

const TripCompanionsForm = () => {
  const dispatch = useDispatch();
  const [seats, setSeats] = useState(0);
  const [price, setPrice] = useState(10000);

  useEffect(() => {
    dispatch(setNavigationLayout("create-trip-3"));
    return () => dispatch(setNavigationLayout("main-nav"));
  }, [dispatch]);

  return (
    <div className="w-full">
      <main className="">
        <section className="m-4 flex items-center">
          <img src={volante} alt="" />
          <h2 className='text-textColor font-extrabold text-[26px] m-2 font-baloo'>Acompañantes</h2>
        </section>
        <section className="m-4 mt-2 py-3">
        <h2 className="text-[18px] font-semibold font-roboto-flex">Cantidad de pasajeros</h2>
          <input 
          type="number" 
          placeholder="Pasajeros" 
          className='border-[1px] border-black px-4 my-2 py-2 rounded-md text-[#49454F] placeholder-[#49454F] placeholder:text-sm text-base font-roboto-flex'
          onChange={(e) => setSeats(e.target.value)}
          />
        </section>
        <InputPricePerPassenger price={price} setPrice={setPrice}/>
        
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

export default TripCompanionsForm
