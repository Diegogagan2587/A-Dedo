import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DateDisplay from '../../components/DateDisplay';
import Time from '../../components/Time';
import LocationBarIcons from '../../components/LocationBarIcons';
import TripFeature from '../../components/TripFeature';
import ButtonGreen from '../../components/ButtonGreen';
import freeSeats from '../../assets/free-seats.svg';
import hand from '../../assets/back_hand.svg';
import kids from '../../assets/kids.svg';
import pets from '../../assets/pets.svg';
import food from '../../assets/food.svg';
import CarModel from "../../components/CarModel";
import { setNavigationLayout } from "../../store/slices/navigationSlice"
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const TripDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tripId = useSelector((state) => state.trips.selectedTripId);
  const trip = useSelector((state) => state.trips.list.find((trip) => trip._id === tripId));
  
  useEffect(()=>{
    dispatch( setNavigationLayout("trip-details-nav") )
    return ()=> dispatch( setNavigationLayout("main-nav") )
  },[dispatch]);
  
  const handleRedirect = () => {
    navigate('/trips/:id/reserve')
  }

  return (
    <div className="">
      <div className=" px-4 flex flex-col gap-8 items-center">
        <h1 className="text-[#696969] font-roboto-flex">Detalle del Viaje</h1>
        <div className="flex text-sm items-center justify-between w-full flex-wrap">
          <DateDisplay date={trip.origin.date} />
          <Time time={trip.origin.time} />
          <CarModel text="EcoSport - Ford" />
        </div>
        <div id="locations" className="flex items-center justify-center w-full">
          <LocationBarIcons />
          <div id="location-text-container" className="min-h-[139px] flex flex-col justify-between gap-4 p-1 w-full">
            <p>
              {trip.origin.address+", "+trip.origin.city}
              <br />
              <a className="text-[#00A66A]">Ver punto de encuentro</a>
            </p>
            <p>{trip.destination.address+", "+trip.destination.city}</p>
          </div>
        </div>
        <ul className="w-full flex justify-between text-xs">
          <TripFeature text="Asientos libres 3" icon={freeSeats} />
          <TripFeature text="Acepta paradas" icon={hand} />
          <TripFeature text="Viaja con niños" icon={kids} />
          <TripFeature text="Mascotas" icon={pets} />
          <TripFeature text="Comida" icon={food} />
        </ul>
        <section className="flex items-center justify-between w-full">
          <div className="flex flex-col items-center">
            <p>Precio por pasajero</p>
            <span
            className="font-bold text-[#00A66A] text-2xl font-roboto-flex"
            >{trip.price}</span>
          </div>
          <ButtonGreen
            onClick={handleRedirect}
            text="Reserva tu lugar"
            className="bg-[#00A66A] text-white font-roboto-flex"
          />
        </section>
      </div>
    </div>
  );
};

export default TripDetails;
