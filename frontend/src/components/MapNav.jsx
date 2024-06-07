import navbg from "../assets/nav-background.svg"
import arrow from '../assets/leading-icon.png'

function MapNav() {
  return (
  <nav className="relative">
    <img src={navbg} alt="background" className="z-0 absolute w-full" />
    <div className="flex items-center z-10 relative top-0 w-full ">
      <a href=""><img src={arrow} alt="arrow" /></a> 
      <h2 className="text-white text-[20px] py-6">Punto de encuentro</h2>
    </div>
  </nav>
  )
}


export default MapNav