const TripFeature = ({ text, icon }) => {
    return (
      <li
        className="max-w-[55px]
      flex flex-col items-center"
      >
        <img src={icon} alt="icon" />
        <span>{text}</span>
      </li>
    );
  };

  export default TripFeature;