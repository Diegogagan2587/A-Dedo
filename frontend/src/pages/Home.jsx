import CardTrip from "../components/CardTrip"


const Home = () => {
  return (
    <div>
        
        <section>
            <CardTrip 
            profilePicture="src\assets\profile1.png"
            name="Elena"
            seatsAvailable="3"
            startLocation="Santa Clara del Mar"
            startTime="13:00hs"
            endLocation="Mar del Plata"
            endTime="14:00hs"
            />
    </section>

  </div>
  )
}

export default Home