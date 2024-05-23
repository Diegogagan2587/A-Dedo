import RoundedBtn from "./RoundedBtn";

const ButtonGreen = ({ text, className, onClick }) => {
    return (
        <RoundedBtn
        onClick={onClick}
        text={text}
        className={`${className} text-[#00A66A] hover:text-white hover:bg-[#00A66A]`}
        />
    );
}  

export default ButtonGreen;