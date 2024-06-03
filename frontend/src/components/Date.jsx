import { PropTypes } from 'prop-types';
import calendar from '../assets/calendargreen.png'

const Date = ({ date }) => {
  return (
    <div className='flex flex-row' >
        <img src={calendar} alt="calendar picture" />
        <h2 className='ml-2'>{date}</h2>
    </div>
  )
}

Date.propTypes = {
    date: PropTypes.string.isRequired
}

export default Date