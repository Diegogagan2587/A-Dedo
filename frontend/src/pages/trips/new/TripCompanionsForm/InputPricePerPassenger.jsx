import { PropTypes } from 'prop-types';
import ChangePriceButton from './ChangePriceButton';
import removeCircle from '../../../../assets/remove_circle.png';
import addCircle from '../../../../assets/add_circle.png';

const InputPricePerPassenger = ({ price, setPrice }) => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { minimumFractionDigits: 0 }).format(
      value
    );
  };
  const handlePriceChange = (e) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, '');
    setPrice(Number(inputValue));
  };

  return (
    <section className="m-4 py-3">
      <label htmlFor="" className="text-[18px] font-semibold font-roboto-flex">
        Selecciona el precio por pasajero
      </label>
      <div className="flex items-center justify-around py-5">
        <ChangePriceButton 
          id="decrease-price"
          onClick={() => setPrice(price - 1)}
          iconSrc={removeCircle} 
          alt=""/>
        <div
          className="flex gap-2 items-center
              font-semibold font-roboto-flex text-[26px] px-4
              border-[1px] border-black py-2 rounded-md"
        >
          <span>$</span>
          <input
            className="w-full outline-none"
            type="text"
            value={formatCurrency(price)}
            onChange={handlePriceChange}
          />
        </div>
        <ChangePriceButton 
          id="increase-price"
          onClick={() => setPrice(price + 1)}
          iconSrc={addCircle} 
          alt=""
        />
      </div>
      <p className="text-center">
        <em className="text-[14px] py-4 font-roboto-flex">
          Valor recomendado por persona
        </em>
      </p>
    </section>
  );
};

InputPricePerPassenger.propTypes = {
  price: PropTypes.number.isRequired,
  setPrice: PropTypes.func.isRequired,
};

export default InputPricePerPassenger;
