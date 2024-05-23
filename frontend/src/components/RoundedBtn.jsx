const RoundedBtn = ({ text, onClick, className, logo, alt }) => {
  return (
    <button
      className={`${className} flex items-center justify-center p-2 rounded-full gap-2`}
      onClick={onClick}
    >
      {logo && <img src={logo} alt={alt} />}
      <span>{text}</span>
    </button>
  );
}

export default RoundedBtn;