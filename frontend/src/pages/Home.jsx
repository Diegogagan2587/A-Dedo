import CardTrip from "../components/CardTrip"
import DriverButton from "../components/DriverButton";
import mainProfilePicture from '../assets/main-profilepic.png'
import auto from '../assets/auto.png'
import Date from "../components/Date";

const Home = () => {
  return (
    <main className="mt-10">
        <section className="flex flex-row items-center justify-center">
          <img src={mainProfilePicture} alt=""/>
          <div className="m-4">
            <h1 className="text-center text-2xl font-extrabold text-mainTitle text-textColor mb-2">Hola Marcos</h1>
            <DriverButton />
          </div>
        </section>

        <div className="flex flex-row items-center justify-center">
          <h1 className="text-customGreen font-extrabold text-mainTitle text-xl m-2">Viajes disponibles</h1>
          <img src={auto} alt="auto icon" />
        </div>

        <Date
            date="Miercoles 21 de Mayo 2024"
            />

        <section className="flex flex-col items-center">
            <CardTrip 
            profilePicture="src\assets\profile1.png"
            name="Elena"
            seatsAvailable="3"
            startLocation="Santa Clara del Mar"
            startTime="13:00hs"
            endLocation="Mar del Plata"
            endTime="14:00hs"
            />

            <CardTrip 
            profilePicture="src\assets\profile2.png"
            name="Mario"
            seatsAvailable="4"
            startLocation="Mar del Plata"
            startTime="18:00hs"
            endLocation="Santa Clara del Mar"
            endTime="19:00hs"
            />
          
        </section>
            <Date
            date="Jueves 22 de Mayo 2024"
            />

        <section className="flex flex-col items-center">
            <CardTrip 
            profilePicture="src\assets\profile1.png"
            name="Elena"
            seatsAvailable="1"
            startLocation="Buenos Aires"
            startTime="18:00hs"
            endLocation="Santa Clara del Mar"
            endTime="19:00hs"
            />
            
        </section>
    </main>
    )
}

export default Home