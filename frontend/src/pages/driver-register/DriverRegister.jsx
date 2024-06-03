import tarjetadeidentificacion from '../../assets/tarjeta-de-identificacion.png'
import RegisterBtn from '../../components/RegisterBtn'

const DriverRegister = () => {
  return (
    <main className='mt-20 flex items-center flex-col'>
      <h2 className='text-textColor font-extrabold text-mainTitle text-[26px]' >¿Queres ser conductor?</h2>
      <p className='font-semibold text-[#696969]'>Regístrate en solo 2 pasos</p>
      <section className='mt-[50px] flex flex-col items-center justify-center'>
        <h2 className='text-[20px]'>Prepara tu DNI y licencia de conducir</h2>
        <img src={tarjetadeidentificacion} alt="" className='m-3 p-4' />
        <RegisterBtn />
      </section>
    </main>
  )
}

export default DriverRegister