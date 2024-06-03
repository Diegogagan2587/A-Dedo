import navbg from "../assets/nav-background.svg"
import arrow from '../assets/leading-icon.png'

function CreateTripNav() {
  return (
    <nav >
      <img src={navbg} alt="background" className=" w-full" />
      <div className="flex items-center z-10 relative top-0 w-full ">
        <a href=""><img src={arrow} alt="arrow" /></a> 
        <h2 className="text-white text-[20px] py-6">Crear viaje</h2>
      </div>
    </nav>
  )
}

export default CreateTripNav