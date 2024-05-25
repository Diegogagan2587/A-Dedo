import { PropTypes } from 'prop-types';
import calendar from '../assets/calendar.png'

const Date = ({ date }) => {
  return (
    <div className='flex flex-row items-center m-4'>
        <img src={calendar} alt="calendar picture" />
        <h2 className='ml-2 text-base'>{date}</h2>
    </div>
  )
}

Date.propTypes = {
    date: PropTypes.string.isRequired
}

export default Date