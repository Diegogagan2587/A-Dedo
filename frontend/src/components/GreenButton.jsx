import { Link } from 'react-router-dom'

const GreenButton = () => {
  return (
    <button className="w-36 h-14 bg-customGreen text-white rounded-full m-6">
        <Link to="/login">Ingresar</Link>
    </button>
  )
}

export default GreenButton