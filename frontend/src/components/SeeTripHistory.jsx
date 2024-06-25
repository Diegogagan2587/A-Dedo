import { PropTypes } from 'prop-types';
import { Link } from "react-router-dom"

const SeeTripHistory = ({ to }) => {
  return (
    <button className="text-[#00A66A] font-semibold underline underline-offset-2 p-1">
      <Link to={to}>
        Ver historial
      </Link>
    </button>
  )
}

SeeTripHistory.propTypes = {
  to: PropTypes.string.isRequired,
}

export default SeeTripHistory