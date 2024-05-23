import logo from '../assets/logo.png'


const Navbar = () => {
  return (
  <nav className='flex items-center justify-center flex-row bg-customGreen p-4'>
    <div className="flex items-center ">
        <div className="flex flex-col items-center">
          <h1 className="font-title text-white text-4xl">a dedo</h1>
          <p className="text-white text-sm text-center ml-8">viajes compartidos</p>
        </div>
        <img src={logo} alt="logo" className="h-12 w-12" />
      </div>
  </nav>
  )
}

export default Navbar