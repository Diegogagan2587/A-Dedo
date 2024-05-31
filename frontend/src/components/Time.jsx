import clock from "../assets/clock.svg";

const Time = () => {
    return (
      <div className="flex gap-2 items-center">
        <img src={clock} alt="clock" className="w-[20px] " />
        <span>13:00 hrs</span>
      </div>
    );
  };

  export default Time;