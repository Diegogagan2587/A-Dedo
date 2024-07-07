import { Link } from "react-router-dom"

const BtnHomeGreen = () => {
  return (
    <button className="w-36 h-14 bg-customGreen text-white rounded-full m-6 font-roboto-flex">
      <Link to="/trips">Ir a inicio</Link>
    </button>
  )
}

export default BtnHomeGreen