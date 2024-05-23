import RoundedBtn from "./RoundedBtn";

const ButtonGreen = ({ text, className }) => {
    return (
        <RoundedBtn
        text={text}
        className={`${className} text-[#00A66A] hover:text-white hover:bg-[#00A66A]`}
        />
    );
}  

export default ButtonGreen;