import logo from '../../assets/logo.png';
import bgNavCurve from '../../assets/nav-background.svg';
import menuIcon from '../../assets/menu-icon-hamb.svg';

const Navbar = () => {
  return (
    <nav
      className="relative"
    >
      <img src={bgNavCurve} alt="background" className="z-0  absolute w-full" />
      <div className="flex items-center justify-center z-10 relative top-0 pt-2 w-full">
        <div className="flex items-center border-white w-3/4 justify-center">
          <div className='flex flex-col'>
            <h1 className="font-title text-white text-4xl">a dedo</h1>
            <p className="text-white text-sm text-center ml-8">
              viajes compartidos
            </p>
          </div>
          <img src={logo} alt="logo" className="h-12 w-12" />
        </div>
        <div className="flex justify-center w-1/4 border-white">
          <button className="z-10 w-[24px]">
            <img src={menuIcon} alt="menu" className="h-8 w-8" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
