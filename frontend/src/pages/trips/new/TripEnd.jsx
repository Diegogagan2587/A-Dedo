import viajeCreado from '../../../assets/viaje-creado.png'
import BtnHomeGreen from '../../../components/BtnHomeGreen'
import DeleteTripBtn from '../../../components/DeleteTripBtn'

const TripEnd = () => {
  return (
    <main className='mt-20 flex flex-col items-center justify-center'>
    <img src={viajeCreado} alt="" />
    <h2 className='text-[26px] text-mainTitle text-textColor font-extrabold m-3'>¡Felicitaciones!</h2>
    <p className='text-center m-4 text-[20px]'>Has creado con exito tu viaje</p>

    <section className='mt-10 flex flex-col items-center'>
      <BtnHomeGreen />
      <DeleteTripBtn />
    </section>
  </main>
  )
}

export default TripEnd