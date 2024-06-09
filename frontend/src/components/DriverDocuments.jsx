import checkCircle from '../assets/check_circle.png'
import edit from '../assets/editar.png'

const DriverDocuments = () => {
  return (
    <article className="border border-gray-400 rounded-md m-4 p-3">
				<div className='flex justify-between py-2'>
					<h2 className="font-semibold text-customGreen text-[16px]">Documento de identidad</h2>
					<img src={checkCircle} alt="" />
				</div>
				<div className='flex justify-between py-2'>
					<h2 className="font-semibold text-customGreen text-[16px]">Licencia de conducir</h2>
					<img src={checkCircle} alt="" />
				</div>
				<div className='flex justify-between py-2'>
					<h2 className="font-semibold text-customGreen text-[16px]">Foto del auto y patente</h2>
					<img src={checkCircle} alt="" />
				</div>
				<div className='flex justify-between py-2'>
					<h2 className="font-semibold text-gray-500 text-[16px]">Seguro del auto</h2>
					<img src={edit} alt="" />
				</div>
		</article>
  )
}

export default DriverDocuments