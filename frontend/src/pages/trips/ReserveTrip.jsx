import Date from "../../components/Date"
import Time from "../../components/Time"
import auto from '../../assets/auto.png'
import LocationBarIcons from "../../components/LocationBarIcons"
import ButtonGreen from "../../components/ButtonGreen"
import { useState } from "react"
import PopupReserveTrip from "../../components/PopupReserveTrip"

const ReserveTrip = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  }

  return (
    <main className="mt-20 p-3">
      <section className="min-h-[139px] flex flex-col justify-between gap-4 p-1 w-full">
        <h2 className='text-textColor font-extrabold text-mainTitle text-center text-[26px]'>Reserva de viaje</h2>
        <div className="flex text-sm items-center justify-between w-full mt-2">
          <Date date="Miercoles 21 de Mayo del 2024" />
          <Time time="13:00 hrs"/>
        </div>
        <div className='flex flex-row text-sm items-center'>
          <img src={auto} alt="auto icon" className="w-[25px] h-[25px]" />
            <h2 className='ml-2'>EcoSport, Ford, Blanco, año 2010</h2>
        </div>
      </section>
      <section id="locations" className="flex items-center justify-center w-full mt-4">
          <LocationBarIcons />
          <div id="location-text-container" className="min-h-[139px] flex flex-col justify-between gap-4 p-1 w-full">
            <p>Barranca de los lobos 303, Santa Clara del mar, Prov de Bs. As.
              <br />
              <a className="text-[#00A66A]">Ver punto de encuentro</a>
            </p>
            <p>Av. Colón 1186, Mar del plata, Prov de Bs. As.</p>
          </div>
        </section>
      <section className="mt-4">
        <h2 className="font-semibold text-[18px]">Medios de pago</h2>
        <p>Efectivo</p>
        <p>Coordinar con el conductor</p>
      </section>
      <section className="mt-8 flex items-center justify-center">
      <ButtonGreen
            onClick={togglePopup}
            text="Reservar viaje"
            className="bg-[#00A66A] text-white"
          />
      </section>
      <PopupReserveTrip show={showPopup} onClose={togglePopup} />
    </main>
  )
}

export default ReserveTrip