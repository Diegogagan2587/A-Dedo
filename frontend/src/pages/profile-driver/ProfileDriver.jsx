import CardDriverTrip from '../../components/CardDriverTrip'
import DriverDocuments from '../../components/DriverDocuments'
import LastTripCard from '../../components/LastTripCard'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SeeTripHistory from '../../components/SeeTripHistory'

const ProfileDriver = () => {
  const myDriverID = useSelector((state)=>state.user.data._id)
  const trips = useSelector((state)=>state.trips.list)
  const myTrips = trips.filter((trip) => trip.driver && trip.driver._id === myDriverID) || [];

  return (
    <div className="flex flex-col ">
      <div className="flex flex-row items-center justify-center mt-4">
        <h1 className="text-customGreen font-extrabold font-baloo text-xl m-2">
          Viajes disponibles
        </h1>
      </div>
      <section>
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-[18px] ml-4 font-roboto-flex">
              Comenza a ahorrar
            </h2>
            <button className="w-[100px] h-[45px] bg-customGreen text-white rounded-full m-6 p-2 font-roboto-flex">
              <Link to="/trips/new/step-1">Crear viaje</Link>
            </button>
          </div>
        {myTrips.map((trip) => (
          <CardDriverTrip 
          key={trip._id}
          date={trip.origin.date}
          origin={trip.origin.address + ", " + trip.origin.city}
          destination={trip.destination.address + ", " + trip.destination.city}
          startTime={trip.origin.time}
          endTime={trip.destination.time}
          />
        ))}

        
      </section>
      <section>
        <h2 className="font-semibold text-[18px] ml-4 font-roboto-flex">Mis documentos</h2>
        <DriverDocuments />
      </section>
      <section>
        <h2 className="font-semibold text-[18px] ml-4 font-roboto-flex">
          Último viaje realizado
        </h2>
        <LastTripCard 
        rol="Pasajero"
        date="21/05/2024"
        time="13:00hs"
        price="Valor: $890"
        startLocation="Barranca de los lobos 303, Santa Clara del mar, Prov de Bs. As."
        endLocation="Av. Colón 1186, Mar del plata, Prov de Bs. As."
        />
        <div className='flex justify-center items-center'>
          <SeeTripHistory />
        </div>
      </section>
    </div>
  );
}

export default ProfileDriver