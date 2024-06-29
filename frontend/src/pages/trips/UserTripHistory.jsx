import { useEffect } from "react";
import PassengerDriverBtn from "../../components/PassengerDriverBtn"
import { useDispatch } from "react-redux";
import { setNavigationLayout } from "../../store/slices/navigationSlice";

function UserTripHistory() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch( setNavigationLayout("back-nav-history") )
    return ()=> dispatch( setNavigationLayout("main-nav") )
  },[dispatch]);

  return (
    <main className="mt-20">
      <PassengerDriverBtn />
    </main>
  )
}

export default UserTripHistory