import { useSelector, useDispatch } from "react-redux"
import { setReserve } from "../../store/slices/tripsSlice"
import DateDisplay from "../../components/DateDisplay"
import Time from "../../components/Time"
import LocationBarIcons from "../../components/LocationBarIcons"
import ButtonGreen from "../../components/ButtonGreen"
import { useState } from "react"
import PopupReserveTrip from "../../components/PopupReserveTrip"
import Switch from "../../components/Switch"
import BackNav from "../../components/BackNav"
import CarModel from "../../components/CarModel"

const ReserveTrip = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [cash, setCash] = useState(false);
  const [ coordinateWithDriver, setCoordinateWithDriver ] = useState(false);
  const tripId = useSelector((state) => state.trips.selectedTripId);
  const userId = useSelector((state) => state.user.data._id);
  const trip = useSelector((state) => state.trips.list.find((trip) => trip._id === tripId));
  const dispatch = useDispatch();
  const handleReserve = () => {
    dispatch(setReserve({userId, tripId, cash, coordinateWithDriver }));
    togglePopup();
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  }

  return (
    <div className="absolute top-[-25vw] z-40 bg-white">
      <BackNav 
      text="Reservar viaje"
      to={"/trips/:id/details"}
      />
      <main className="mt-10 p-4">
        <section className="min-h-[139px] flex flex-col justify-between gap-4 p-1 w-full">
          <h2 className='text-textColor font-extrabold text-mainTitle text-center text-[26px]'>Reserva de viaje</h2>
          <div className="flex text-sm items-center justify-between w-full mt-2 flex-wrap">
            <DateDisplay date={trip.origin.date} />
            <Time time={trip.origin.time} />
            <CarModel text="EcoSport, Ford, Blanco, año 2010" />
          </div>
        </section>
        <section id="locations" className="flex items-center justify-center w-full mt-4">
            <LocationBarIcons />
            <div id="location-text-container" className="min-h-[139px] flex flex-col justify-between gap-4 p-1 w-full">
              <p>{trip.origin.address+", "+trip.origin.city}
                <br />
                <a className="text-[#00A66A]">Ver punto de encuentro</a>
              </p>
              <p>{trip.destination.address+", "+trip.destination.city}</p>
            </div>
          </section>
        <section className="mt-10">
          <h2 className="font-semibold text-[18px]">Medios de pago</h2>
          <div className="flex items-center justify-between py-3">
            <p className="text-[15px]">Efectivo</p>
            <Switch 
            checked={cash}
            onChange={() => setCash(!cash)}
            />
          </div>
          <div className="flex items-center justify-between py-3"> 
            <p className="text-[15px]">Coordinar con el conductor</p>
            <Switch 
            checked={coordinateWithDriver}
            onChange={() => setCoordinateWithDriver(!coordinateWithDriver)}
            />
          </div>
        </section>
        <section className="mt-8 flex items-center justify-center">
        <ButtonGreen
              onClick={handleReserve}
              text="Reservar viaje"
              className="bg-[#00A66A] text-white"
            />
        </section>
        <PopupReserveTrip show={showPopup} onClose={togglePopup} />
      </main>
    </div>
  )
}

export default ReserveTrip