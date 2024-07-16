import { PropTypes } from 'prop-types';
import removeCircle from '../../../../assets/remove_circle.png';
import addCircle from '../../../../assets/add_circle.png';

const InputPricePerPassenger = () => {
  return (
    <section className="m-4 py-3">
    <h2 className="text-[18px] font-semibold font-roboto-flex">Selecciona el precio por pasajero</h2>
    <div className="flex items-center justify-around py-5">
      <img src={removeCircle} alt="" />
      <span className="font-semibold text-[26px] font-roboto-flex">$10.000</span>
      <img src={addCircle} alt="" />
    </div>
    <p className="text-center">
      <em className="text-[14px] py-4 font-roboto-flex">Valor recomendado por persona</em>
    </p>
  </section>
  );
};

InputPricePerPassenger.propTypes = {
  price: PropTypes.number.isRequired,
  setPrice: PropTypes.func.isRequired,
};

export default InputPricePerPassenger;
