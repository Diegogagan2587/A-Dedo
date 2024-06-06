import car from '../../../assets/car.png'

function CarWait() {
  return (
    <main className='mt-[100px] flex flex-col items-center justify-center'>
    <img src={car} alt="" />
    <h2 className='text-[26px] text-mainTitle text-textColor font-extrabold'>¡Ya falta poco!</h2>
    <p className='text-center m-4'>Estamos guardando la información <br /> de tu auto.</p>
  </main>
  )
}

export default CarWait