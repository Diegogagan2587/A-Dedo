
import TripFeature from '../../components/TripFeature'
import LocationBarIcons from '../../components/LocationBarIcons'
import Time from '../../components/Time'
import Date from '../../components/Date'
import freeSeats from '../../assets/free-seats.svg';
import hand from '../../assets/back_hand.svg';
import kids from '../../assets/kids.svg';
import pets from '../../assets/pets.svg';
import food from '../../assets/food.svg';
import NavDetailsTrip from './NavDetailsTrip'

const DriverDetailTrip = () => {
  return (
    <main>
        <div className="absolute top-0">
      <NavDetailsTrip 
      name="Marcos"
      />

      <section className="mt-[10vw] sm:pt-[10vw] sm:mt-[20vw] px-4 flex flex-col gap-8 items-center">
        <h1 className="text-[#696969]">Detalle del Viaje</h1>
        <div className="flex text-sm items-center justify-between w-full">
          <Date date="Jueves 13 de junio 2024" />
          <Time />
        </div>
        <div id="locations" className="flex items-center justify-center w-full">
          <LocationBarIcons />
          <div
            id="location-text-container"
            className="min-h-[139px]
        flex flex-col justify-between gap-4 p-1 w-full
        "
          >
            <p>
              Mar del plata, Provincia de Buenos Aires, Argentina
              <br />
              <a className="text-[#00A66A] underline">Ver punto de encuentro</a>
            </p>
            <p>Capital Federal, Provincia de Buenos Aires, Argentina</p>
          </div>
        </div>
        <ul className="w-full flex justify-between text-xs">
          <TripFeature text="Asientos libres 3" icon={freeSeats} />
          <TripFeature text="Acepta paradas" icon={hand} />
          <TripFeature text="Viaja con niños" icon={kids} />
          <TripFeature text="Mascotas" icon={pets} />
          <TripFeature text="Comida" icon={food} />
        </ul>
        <section className="flex items-center justify-center w-full">
          <div className="flex flex-col items-center ">
            <p>Precio por pasajero</p>
            <span
            className="font-bold text-[#00A66A] text-2xl"
            >$10.000</span>
          </div>
        </section>
      </section>
    </div>
    </main>
  )
}

export default DriverDetailTrip


