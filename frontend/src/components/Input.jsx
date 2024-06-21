import { PropTypes } from 'prop-types';

const Input = ({ type, placeholder, value, onChange, required = false, ariaLabel }) => {
  return (
    <>
      <input
        className="border-[1px] border-black px-4 my-2 py-2 rounded-md text-[#49454F] placeholder-[#49454F] placeholder:text-sm text-base"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        aria-label={ariaLabel}
      />
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  ariaLabel: PropTypes.string,
};

export default Input;
