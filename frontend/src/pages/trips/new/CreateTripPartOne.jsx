import Input from "../../../components/Input"
import volante from "../../../assets/volante.png"
import BtnNextIcon from "../../../components/BtnNextIcon"

const CreateTripPartOne = () => {
  return (
    <main className="mt-20">
      <section className="m-4 flex items-center">
        <img src={volante} alt="" />
        <h2 className='text-textColor font-extrabold text-mainTitle text-[26px] m-2'>Punto de partida</h2>
			</section>
      <section className="m-4">
        <h2 className="text-[18px] font-semibold">Domicilio</h2>
				<Input
				type="text"
        placeholder="Calle y número"
				/>
      </section>
      <section className="m-4">
        <h2 className="text-[18px] font-semibold">Localidad</h2>
        <Input
        type="text"
        />
      </section>
      <section className="m-4">
        <h2 className="text-[18px] font-semibold">Código Postal</h2>
        <input 
        type="number"
        className="w-[100px] border-[1px] border-black px-4 my-2 py-2 rounded-md text-[#49454F]"
        />
      </section>
			<section className="m-4 flex items-center justify-between">
        <div>
          <h2 className="text-[18px] font-semibold">Fecha</h2>
          <Input
          type="date"
          />
        </div>
        <div>
          <h2 className="text-[18px] font-semibold">Horario</h2>
          <Input
          type="time"
          />
        </div>
			</section>
      <span className="absolute right-12">
        <BtnNextIcon
        to="/trips/new/step-2"
        />
      </span>
    </main>
  )
}

export default CreateTripPartOne