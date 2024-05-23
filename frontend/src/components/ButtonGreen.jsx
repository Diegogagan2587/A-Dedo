import RoundedBtn from "./RoundedBtn";

const ButtonGreen = ({ text }) => {
    return (
        <RoundedBtn
        text={text}
        className="text-[#00A66A] hover:text-white hover:bg-[#00A66A]"
        />
    );
}  

export default ButtonGreen;