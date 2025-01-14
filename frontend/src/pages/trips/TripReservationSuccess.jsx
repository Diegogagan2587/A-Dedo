import reserveConfirm from '../../assets/reserve-confirm.png'
import GreenLinkButton from '../../components/buttons/GreenLinkButton'

function TripReservationSuccess() {
  return (
      <main className='mt-20 flex flex-col items-center justify-center'>
      <img src={reserveConfirm} alt="" />
      <h2 className='text-[26px] font-baloo text-textColor font-extrabold m-3'>¡Felicitaciones!</h2>
      <p className='text-center m-4 text-[20px]'>Has reservado tu viaje con exito.</p>
  
      <section className='mt-9 flex flex-col items-center'>
        <GreenLinkButton to='/trips' text='Ir a inicio' />
      </section>
    </main>
  )
}

export default TripReservationSuccess