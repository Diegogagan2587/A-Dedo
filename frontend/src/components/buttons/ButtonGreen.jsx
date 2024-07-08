import { PropTypes } from "prop-types";
import RoundedBtn from "../RoundedBtn";

const ButtonGreen = ({ text, className, onClick }) => {
    return (
        <RoundedBtn
        onClick={onClick}
        text={text}
        className={`${className} text-[#00A66A] w-[135px] h-[43px] text-[14px] font-roboto-flex`}
        />
    );
}  

ButtonGreen.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
};

export default ButtonGreen;