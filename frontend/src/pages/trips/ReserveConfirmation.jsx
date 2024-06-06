import reserveConfirm from '../../assets/reserve-confirm.png'
import BtnHomeGreen from '../../components/BtnHomeGreen'

function ReserveConfirmation() {
  return (
      <main className='mt-20 flex flex-col items-center justify-center'>
      <img src={reserveConfirm} alt="" />
      <h2 className='text-[26px] text-mainTitle text-textColor font-extrabold m-3'>¡Felicitaciones!</h2>
      <p className='text-center m-4 text-[20px]'>Has reservado tu viaje con exito.</p>
  
      <section className='mt-9 flex flex-col items-center'>
        <BtnHomeGreen />
      </section>
    </main>
  )
}

export default ReserveConfirmation