import { useEffect, useState } from "react";
import PassengerDriverBtn from "../../components/PassengerDriverBtn"
import { useDispatch } from "react-redux";
import { setNavigationLayout } from "../../store/slices/navigationSlice";
import NoTripsAvailable from "../../components/NoTripsAvailable";
import LastTripCard from "../../components/LastTripCard";

function UserTripHistory() {

  const dispatch = useDispatch();
  const [driverIsActive, setDriverIsActive] = useState(false);

  useEffect(()=>{
    dispatch( setNavigationLayout("back-nav-history") )
    return ()=> dispatch( setNavigationLayout("main-nav") )
  },[dispatch]);

  return (
    <main className="flex items-center justify-center flex-col">
    <PassengerDriverBtn setDriverIsActive={setDriverIsActive} />
      {driverIsActive ? (
        <NoTripsAvailable 
        text="Al momento no tienes ningun viaje realizado como conductor."
        />
      ) : (
        <LastTripCard 
        rol="Pasajero"
        date="21/05/2024"
        time="13:00hs"
        price="Valor: $890"
        startLocation="Barranca de los lobos 303, Santa Clara del mar, Prov de Bs. As."
        endLocation="Av. Colón 1186, Mar del plata, Prov de Bs. As."
        />
      )}
    </main>
  )
}

export default UserTripHistory