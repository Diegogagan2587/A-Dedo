import { PropTypes } from "prop-types";
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

ButtonGreen.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
};

export default ButtonGreen;