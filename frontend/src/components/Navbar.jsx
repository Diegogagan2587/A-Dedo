import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav
      className={`flex flex-col bg-nav-curve bg-cover bg-no-repeat min-h-[137.5px] p-4 bg-center'`}
    >
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="font-title text-white text-4xl">a dedo</h1>
          <p className="text-white text-sm text-center ml-8">
            viajes compartidos
          </p>
        </div>
        <img src={logo} alt="logo" className="h-12 w-12" />
      </div>
    </nav>
  );
};

export default Navbar;
