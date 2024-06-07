import driverProfile from '../../assets/main-profilepic.png'
import CardDriverTrip from '../../components/CardDriverTrip'
import DriverDocuments from '../../components/DriverDocuments'
import LastTripCard from '../../components/LastTripCard'
import PassengerDriverBtn from '../../components/PassengerDriverBtn'

const ProfileDriver = () => {
  return (
    <main className='mt-10 flex flex-col'>
      <section className="flex flex-row items-center justify-center">
          <img src={driverProfile} alt=""/>
          <div className="m-4">
            <h1 className="text-center text-2xl font-extrabold text-mainTitle text-textColor mb-2">Marcos</h1>
            <PassengerDriverBtn />
          </div>
        </section>
        <div className="flex flex-row items-center justify-center mt-4">
          <h1 className="text-customGreen font-extrabold text-mainTitle text-xl m-2">Viajes disponibles</h1>
        </div>
        <section>
          <CardDriverTrip />
        </section>
        <section>
          <h2 className='font-semibold text-[18px] ml-4'>Mis documentos</h2>
          <DriverDocuments />
        </section>
        <section>
          <h2 className='font-semibold text-[18px] ml-4'>Último viaje realizado</h2>
          <LastTripCard />
        </section>
    </main>
  )
}

export default ProfileDriver