import { PropTypes } from 'prop-types';

const Input = ({ type, placeholder }) => {
  return <input 
  className='border-[1px] border-black px-4 my-2 py-2 rounded-md text-[#49454F] placeholder-[#49454F] placeholder:text-sm text-base'
  type={type} 
  placeholder={placeholder} />;
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string
};

export default Input;