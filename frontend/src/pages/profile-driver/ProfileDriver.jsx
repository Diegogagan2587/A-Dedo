import { useEffect, useState } from 'react'
import CardDriverTrip from '../../components/CardDriverTrip'
import DriverDocuments from '../../components/DriverDocuments'
import LastTripCard from '../../components/LastTripCard'
import { Link, useLocation } from 'react-router-dom'

const ProfileDriver = () => {
  const [isTripDeleted, setIstripDeleted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if(location.state && location.state.tripDeleted) {
    setIstripDeleted(true);
    }
  }, [location]);

  return (
    <div className='flex flex-col '>
        <div className="flex flex-row items-center justify-center mt-4">
          <h1 className="text-customGreen font-extrabold text-mainTitle text-xl m-2">Viajes disponibles</h1>
        </div>
        <section>
          { isTripDeleted ? (
              <div className='flex items-center justify-between'>
                <h2 className='font-semibold text-[18px] ml-4'>Comenza a ahorrar</h2>
                <button className="w-[100px] h-[45px] bg-customGreen text-white rounded-full m-6 p-2">
                  <Link to="/trips/new/step-1">Crear viaje</Link>
                </button>
              </div>
            ) : (
              <CardDriverTrip />
          )}
        </section>
        <section>
          <h2 className='font-semibold text-[18px] ml-4'>Mis documentos</h2>
          <DriverDocuments />
        </section>
        <section>
          <h2 className='font-semibold text-[18px] ml-4'>Último viaje realizado</h2>
          <LastTripCard />
        </section>
        </div>
  )
}

export default ProfileDriver