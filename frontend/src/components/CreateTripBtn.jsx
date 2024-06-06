import { Link } from 'react-router-dom'

const CreateTripBtn = () => {
  return (
    <button className="w-[103px] h-14 bg-customGreen text-white rounded-full m-6 p-2">
      <Link to="/trips/new/step-1">Crear viaje</Link>
    </button>
  )
}

export default CreateTripBtn