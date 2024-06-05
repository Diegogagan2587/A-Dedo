import papelpicado1 from '../../assets/papel-picado1.png'
import papelpicado2 from '../../assets/papel-picado2.png'
import papelpicado3 from '../../assets/papel-picado3.png'
import createaccountIMG from '../../assets/createaccountIMG.png'

const CreateAccountEnd = () => {
  return (
    <main className="mt-20">
      <section className="m-4 flex flex-col items-center">
        <h2 className="text-textColor font-extrabold text-mainTitle text-[26px]">¡Felicitaciones!</h2>
        <p>Que alegría que seas parte de <span className="text-customGreen font-title">a dedo</span></p>
      </section>
      <section className='flex items-center justify-center m-5'>
        <div >
          <img src={papelpicado1} alt="" className='p-3' />
          <img src={papelpicado2} alt="" className='p-3' />
          <img src={papelpicado3} alt="" className='p-3' />
        </div>
        <img src={createaccountIMG} alt="" />
      </section>
      <section className='m-5 flex justify-center'>
        <button className="w-[103px] h-14 border border-customGreen text-customGreen rounded-full m-6 p-2">
          <a href="">Crear viaje</a>
        </button>
        <button className='w-[103px] h-14 bg-customGreen text-white rounded-full m-6'>
          <a href="">Ver viajes</a>
        </button>
      </section>
    </main>
  )
}

export default CreateAccountEnd