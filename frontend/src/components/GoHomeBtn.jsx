import { Link } from "react-router-dom"

const GoHomeBtn = () => {
  return (
    <button className="w-[103px] h-14 border border-customGreen text-customGreen rounded-full m-6 p-2">
    <Link to="/trips">ir a inicio</Link>
    </button>
  )
}

export default GoHomeBtn