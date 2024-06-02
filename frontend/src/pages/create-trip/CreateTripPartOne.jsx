import Input from "../../components/Input"
import volante from "../../assets/volante.png"
import BtnNextIcon from "../../components/BtnNextIcon"

const CreateTripPartOne = () => {
  return (
    <main className="mt-28">
  
      <section className="m-4 mt-2">
        <div>
          <span className="absolute right-3">
            <img src={volante} alt="" />
          </span>
          <h2 className="text-[18px] font-semibold">Ingresa la dirección</h2>
        </div>
				<Input
				type="text"
        placeholder="Dirección"
				/>
			</section>

			<section className="m-4">
				<h2 className="text-[18px] font-semibold">Ingresa la fecha del viaje</h2>
				<Input
        type="date"
        />
			</section>

			<section className="m-4">
				<h2 className="text-[18px] font-semibold">Ingresa el horario</h2>
				<Input
        type="time"
        />
			</section>


      <span className="absolute right-12">
        <BtnNextIcon />
      </span>

    </main>
  )
}

export default CreateTripPartOne