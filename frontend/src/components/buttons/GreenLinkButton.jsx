import { Link } from 'react-router-dom'

const RegisterBtn = () => {
  return (
    <button className="w-[165px] h-14 bg-customGreen text-white rounded-full m-6 p-2 font-roboto-flex">
        <Link to='/register/driver-dni'>Comenzar el registro</Link>
    </button>
  )
}

export default RegisterBtn