import { PropTypes } from 'prop-types';
import volante from "../assets/volante.svg"

function NoTripsAvailable({ text }) {
  return (
    <section className='flex flex-col justify-center items-center'>
      <img src={volante} alt="volante" className='py-3' />
      <h2 className='text-center font-roboto-flex text-[20px] px-4'>{text}</h2>
    </section>
  )
}

NoTripsAvailable.propTypes = {
  text: PropTypes.string,
}

export default NoTripsAvailable