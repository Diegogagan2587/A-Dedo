import { PropTypes } from 'prop-types';
import { Link } from "react-router-dom"

const SeeTripHistory = ({ onClick }) => {
  return (
    <button className="text-[#00A66A] font-semibold underline underline-offset-2 p-1">
      <Link to='/profile/user-history' onClick={onClick}>
        Ver historial
      </Link>
    </button>
  )
}

SeeTripHistory.propTypes = {
  onClick: PropTypes.func,
}

export default SeeTripHistory