import location from '../assets/location.png';

const LocationBarIcons = () => {
    return (
      <div
        id="location-bar-icon"
        className="flex flex-col justify-center items-center gap-1 p-2 h-[62px]"
      >
        <img src={location} alt="location" className="w-[24px] h-[27px]" />
        <hr className="border-[1px] border-green-600 border-dashed w-[0px] min-h-[50px] h-full" />
        <img src={location} alt="location" className="w-[24px] h-[27px]" />
      </div>
    );
  };

export default LocationBarIcons;