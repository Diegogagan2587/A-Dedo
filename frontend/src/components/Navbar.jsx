import './Navbar.css'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
   <nav className='w-48'>
    <h1>a dedo</h1>
    <img src={logo} alt="logo" />
    <p>viajes compartidos</p>
   </nav>
  )
}

export default Navbar