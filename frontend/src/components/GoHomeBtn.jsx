import { Link } from "react-router-dom"
// I need to import porp types below:
import { PropTypes } from 'prop-types'

const GoHomeBtn = ({to}) => {
  return (
    <button className="w-[103px] h-14 border border-customGreen text-customGreen rounded-full m-6 p-2">
    <Link to={to||"/trips"}>ir a inicio</Link>
    </button>
  )
}

GoHomeBtn.propTypes = {
  to: PropTypes.string
}

export default GoHomeBtn