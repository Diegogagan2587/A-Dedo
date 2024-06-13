import carEnd from '../../../assets/carEnd.png'
import CreateTripBtn from '../../../components/CreateTripBtn'
import GoHomeBtn from '../../../components/GoHomeBtn'

const CarEnd = () => {
  return (
    <main className='mt-20 flex flex-col items-center justify-center'>
    <img src={carEnd} alt="" />
    <h2 className='text-[26px] text-mainTitle text-textColor font-extrabold m-3 font-baloo'>¡Felicitaciones!</h2>
    <p className='text-center m-4 text-[20px]'>Los datos de tu auto fueron <br /> cargados con exito. </p>
    <div>
      <GoHomeBtn />
      <CreateTripBtn />
    </div>

    
  </main>
  )
}

export default CarEnd