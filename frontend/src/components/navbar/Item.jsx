import { PropTypes } from 'prop-types';

const Item = ({ text, icon }) => {
  return (
    <li className="flex gap-2 py-3 pl-4 items-center font-sans text-[#49454F] font-medium">
      {icon && <img src={icon} alt="icon" />}
      <span>{text}</span>
    </li>
  );
};

Item.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default Item;
