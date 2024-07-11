import { Link } from 'react-router-dom'

const DriverButton = () => {
  return (
    <button className="w-[163px] h-[45px] text-sm border border-customGreen text-customGreen bg-transparent rounded-full font-roboto-flex">
        <Link to="/register/driver">Quiero ser conductor</Link>
    </button>
  )
}

export default DriverButton