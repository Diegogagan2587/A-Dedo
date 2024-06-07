import Date from "../../components/Date"
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

  const togglePopup = () => {
    setShowPopup(!showPopup);
  }

  return (
    <div className="absolute top-0">
      <BackNav 
      text="Reservar viaje"
      to={"/trips/:id/details"}
      />
      <main className="mt-10 p-4">
        <section className="min-h-[139px] flex flex-col justify-between gap-4 p-1 w-full">
          <h2 className='text-textColor font-extrabold text-mainTitle text-center text-[26px]'>Reserva de viaje</h2>
          <div className="flex text-sm items-center justify-between w-full mt-2 flex-wrap">
            <Date date="Miercoles 21 de Mayo del 2024" />
            <Time time="13:00 hrs" />
            <CarModel text="EcoSport, Ford, Blanco, año 2010" />
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
        <section className="mt-10">
          <h2 className="font-semibold text-[18px]">Medios de pago</h2>
          <div className="flex items-center justify-between py-3">
            <p className="text-[15px]">Efectivo</p>
            <Switch />
          </div>
          <div className="flex items-center justify-between py-3"> 
            <p className="text-[15px]">Coordinar con el conductor</p>
            <Switch />
          </div>
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
    </div>
  )
}

export default ReserveTrip