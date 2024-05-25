import logo from '../../assets/logo.png';
import bgNavCurve from '../../assets/nav-background.svg';

const Navbar = () => {
  return (
    <nav
      className="relative"
    >
      <img src={bgNavCurve} alt="background" className="z-0  absolute w-full" />
      <div className="flex items-center justify-center z-10 relative top-0 pt-2 w-full">
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
