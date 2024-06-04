import imagenAdjuntar from '../../assets/Imagen-adjuntar.png'
import { NextBtn } from '../../components/NextBtn'

const DriverDNI = () => {
  return (
    <main className="mt-20">
        <h2 className='text-textColor font-extrabold text-mainTitle text-center text-[26px]' >Adjunta</h2>
        <section className='m-4'>
          <h2 className='text-[20px]'>Foto del frente y dorso de tu DNI</h2>
          <div className='flex flex-row items-center justify-around m-4 p-3'>
            <img src={imagenAdjuntar} alt="" />
            <img src={imagenAdjuntar} alt="" />
          </div>
        </section>

        <section className='m-4'>
          <h2 className='text-[20px]'>Foto del frente y dorso de tu licencia de conducir</h2>
          <div className='flex flex-row items-center justify-around m-4 p-3'>
            <img src={imagenAdjuntar} alt="" />
            <img src={imagenAdjuntar} alt="" />
          </div>
        </section>

        <section className='flex justify-center'>
          <NextBtn 
          href="DriverWait"
          />
        </section>
    </main>
  )
}

export default DriverDNI