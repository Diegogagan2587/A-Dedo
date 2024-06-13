import { useSelector } from 'react-redux';
import sortTripsByDate from '../store/utils/sortTripsByDate';
import CardTrip from '../components/CardTrip';
import DriverButton from '../components/DriverButton';
import mainProfilePicture from '../assets/main-profilepic.png';
import auto from '../assets/auto.png';
import DateDisplay from '../components/DateDisplay';
import PassengerDriverBtn from '../components/PassengerDriverBtn';
import ProfileDriver from './profile-driver/ProfileDriver';
import { useState } from 'react';

const Home = () => {
  const { fullName, rol } = useSelector((state) => state.user.data || {});
  const isDriver = rol && rol.length > 1 ? true : false;
  const [driverIsActive, setDriverIsActive] = useState(false);
  console.log('si driver active?', driverIsActive);
  const trips = useSelector((state) => state.trips.list);
  const tripsByDate = sortTripsByDate(trips);
  const sortedDates = Object.keys(tripsByDate).sort(
    (a, b) => new Date(a) - new Date(b)
  );
  

  return (
    <main className="mt-10">
      <section className="flex flex-row items-center justify-center">
        <img src={mainProfilePicture} alt="" />
        <div className="m-4">
          <h1 className="text-center text-2xl font-extrabold text-mainTitle text-textColor mb-2 font-baloo">
            {`¡Hola, ${fullName || 'invitado'}!`}
          </h1>
          {rol && rol[1] === 'driver' ? null : <DriverButton />}
          { isDriver && <PassengerDriverBtn setDriverIsActive={setDriverIsActive} />}
        </div>
      </section>
      {driverIsActive && <ProfileDriver />}
      {!driverIsActive && <>
      <div className="flex flex-row items-center justify-center">
        

        <h1 className="text-customGreen font-extrabold text-mainTitle text-xl m-2 font-baloo">
          Viajes disponibles
        </h1>
        <img src={auto} alt="auto icon" />
      </div>

      <section className="flex flex-col items-center">
        {sortedDates.map((date) => (
          <section key={date} className="flex flex-col py-3">
            <DateDisplay date={date} />
            {tripsByDate[date].map((trip) => (
              <CardTrip
                key={trip._id}
                id={`${trip._id}`}
                name="Elena"
                seatsAvailable={`${trip.seats}`}
                startLocation={trip.origin.city}
                startTime={trip.origin.time}
                endLocation={trip.destination.city}
                endTime={trip.destination.time}
              />
            ))}
          </section>
        ))}
      </section>
      </>
      }
    </main>
  );
};

export default Home;
