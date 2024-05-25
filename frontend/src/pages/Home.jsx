// import CardTrip from "../components/CardTrip"

import DriverButton from "../components/DriverButton";
import mainProfilePicture from '../assets/main-profilepic.png'

const Home = () => {
  return (
    <main className="mt-20">
        <section className="flex flex-row items-center justify-between">
          <img src={mainProfilePicture} alt="" />
          <div>
            <h1>Hola Marcos</h1>
            <DriverButton />
          </div>
        </section>
        <section>
            {/* <CardTrip 
            profilePicture="src\assets\profile1.png"
            name="Elena"
            seatsAvailable="3"
            startLocation="Santa Clara del Mar"
            startTime="13:00hs"
            endLocation="Mar del Plata"
            endTime="14:00hs"
            /> */}
        </section>

    </main>
    )
}

export default Home