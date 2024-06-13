import { PropTypes } from 'prop-types';
import calendar from '../assets/calendargreen.png'
import formatDate from '../store/utils/formatDate';

const DateDisplay = ({ date }) => {
  return (
    <div className='flex flex-row' >
        <img src={calendar} alt="calendar picture" />
        <h2 className='ml-2 font-roboto-flex'>{formatDate(date)}</h2>
    </div>
  )
}

DateDisplay.propTypes = {
    date: PropTypes.string.isRequired
}

export default DateDisplay;