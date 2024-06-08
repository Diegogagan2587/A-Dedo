import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Item = ({ text, icon, to, onClick }) => {
  return (
    <li className="font-sans text-[#49454F] font-medium">
      <Link className="flex gap-2 py-3 pl-4 items-center" to={to} onClick={onClick}>
        {icon && <img src={icon} alt="icon" />}
        <span>{text}</span>
      </Link>
    </li>
  );
};

Item.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

export default Item;
