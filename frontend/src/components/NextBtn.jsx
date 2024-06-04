import { PropTypes } from 'prop-types';

export const NextBtn = ({ href }) => {
  return (
    <button className="w-[165px] h-14 bg-customGreen text-white rounded-full m-6 p-2">
        <a href={href} >Continuar</a>
    </button>
  )
}

NextBtn.propTypes = {
  href: PropTypes.string.isRequired
}