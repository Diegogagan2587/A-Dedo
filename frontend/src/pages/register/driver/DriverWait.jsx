import car from '../../assets/car.png'

const DriverWait = () => {
  return (
    <main className='mt-[100px] flex flex-col items-center justify-center'>
      <img src={car} alt="" />
      <h2 className='text-[26px] text-mainTitle text-textColor font-extrabold'>¡Ya falta menos!</h2>
      <p className='text-center m-4'>Estamos validando tu documentación. <br />
      Este proceso puede demorar unos <br /> segundos.</p>
    </main>
  )
}


export default DriverWait