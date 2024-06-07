import TripDetailsTop from "../trips/TripDetailsTop";
import DateDisplay from '../../components/DateDisplay';
import Time from '../../components/Time';
import LocationBarIcons from '../../components/LocationBarIcons';
import TripFeature from '../../components/TripFeature';
import ButtonGreen from '../../components/ButtonGreen';

import driverProfile from '../../assets/navbar/driver-profile.png';
import freeSeats from '../../assets/free-seats.svg';
import hand from '../../assets/back_hand.svg';
import kids from '../../assets/kids.svg';
import pets from '../../assets/pets.svg';
import food from '../../assets/food.svg';

const TripDetails = () => {
  return (
    <div className="absolute top-0">
      <TripDetailsTop 
      name="Elena"
      bio="“Tengo 45 años y viajo todos los dias por mi trabajo a mardel.”"
      driverProfile={driverProfile}
      />
      <div className="
      pt-[10vw] mt-[10vw] sm:pt-[10vw] sm:mt-[20vw]
      px-4 flex flex-col gap-8 items-center">
        <h1 className="text-[#696969]">Detalle del Viaje</h1>
        <div className="flex text-sm items-center justify-between w-full">
          <DateDisplay date="Miercoles 21 de Mayo del 2024" />
          <Time time="13:00 hrs"/>
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
              Santa clara del mar, Provincia de Buenos Aires, Argentina
              <br />
              <a className="text-[#00A66A]">Ver punto de encuentro</a>
            </p>
            <p>Mar del Plata, Provincia de Buenos Aires, Argentina</p>
          </div>
        </div>
        <ul className="w-full flex justify-between text-xs">
          <TripFeature text="Asientos libres 3" icon={freeSeats} />
          <TripFeature text="Acepta paradas" icon={hand} />
          <TripFeature text="Viaja con ninos " icon={kids} />
          <TripFeature text="Mascotas" icon={pets} />
          <TripFeature text="Comida" icon={food} />
        </ul>
        <section className="flex items-center justify-between w-full">
          <div className="flex flex-col items-center">
            <p>Precio por pasajero</p>
            <span
            className="font-bold text-[#00A66A] text-2xl"
            >$890</span>
          </div>
          <ButtonGreen
            text="Reserva tu lugar"
            className="bg-[#00A66A] text-white"
          />
        </section>
      </div>
    </div>
  );
};

export default TripDetails;
