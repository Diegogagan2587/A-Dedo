import tarjetaIdentificacionLista from '../../../assets/documento.png'
import { NextBtn } from '../../../components/NextBtn'

const DriverRegistrationSuccess = () => {
  return (
    <main className='mt-20 flex flex-col items-center justify-center'>
      <img src={tarjetaIdentificacionLista} alt="" />
      <h2 className='text-[26px] text-textColor font-extrabold m-3 font-baloo'>¡Felicitaciones!</h2>
      <p className='text-center m-4 text-[20px]'>Tu documentación fue <br /> validada con exíto.</p>

      <NextBtn
      to='/register/vehicle'
      />
    </main>
  )
}

export default DriverRegistrationSuccess