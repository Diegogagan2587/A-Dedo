import location from '../assets/location.png';

function LastTripCard() {
  return (
    <article className='min-w-[328px] min-h-[140px] border border-gray-400 rounded-lg flex p-4 items-center space-x-4 shadow-lg m-4'>
      <section>
        <h2 className='text-customGreen font-semibold text-[14px] p-2'>Pasajero</h2>
        <p className='text-customGreen text-[12px] text-center'>21/05/2024</p>
        <p className='text-customGreen text-[12px] text-center'>13:00hs</p>
        <p className='text-customGreen text-[12px] text-center'>Valor: $890</p>
      </section>
      <section className='flex'>
        <div id="location-bar-icon" className="flex flex-col justify-center items-center gap-1 p-2">
          <img src={location} alt="location" className="w-[24px] h-[27px]" />
          <hr className="border-[1px] border-green-600 border-dashed w-[0px] h-[40px] " />
          <img src={location} alt="location" className="w-[24px] h-[27px]" />
        </div>
        <div id="location-text-container" className="min-h-[110px] flex flex-col justify-between gap-2 p-1 w-full">
          <p className='text-[12px]'>Barranca de los lobos 303, Santa Clara del mar, Prov de Bs. As.</p>
          <p className='text-[12px]'>Av. Colón 1186, Mar del plata, Prov de Bs. As.</p>
        </div>
      </section>
    </article>
  )
}

export default LastTripCard