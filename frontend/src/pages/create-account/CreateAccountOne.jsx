import Input from '../../components/Input';
import argentina from '../../assets/argentina.png'

function CreateAccountOne() {
  return (
    <main className='mt-20'>
      <section className='flex flex-col items-center'>
        <span className='font-semibold text-[#696969]'>1 de 2</span>
        <h2 className='text-textColor font-extrabold text-mainTitle text-[20px]'>Crea tu cuenta en 2 pasos</h2>
      </section>

      <form>
        <section id="name" className='m-4 mt-5'>
          <h2 className='font-semibold text-[18px]'>¿Cuál es tu nombre?</h2>
          <Input 
            id="name"
            type="text"
            placeholder="Nombre y apellido"
          />
        </section>
      
        <section id="email" className='m-4 mt-5'>
          <h2 className='font-semibold text-[18px]'>Email</h2>
          <Input 
            id="email"
            type="email"
            placeholder="Email"
          />
        </section>

        <section id="phone" className='m-4 mt-5'>
          <h2 className='font-semibold text-[18px]'>¿Cuál es tu número de teléfono?</h2>
          <div className='flex items-center gap-3 p-2'>
          <img src={argentina} alt="" />
          <Input 
            id="phone"
            type="phone"
            placeholder="Teléfono"
          />
          </div>
        </section>
      </form>
      
    </main>
  )
}

export default CreateAccountOne