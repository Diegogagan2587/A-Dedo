import back from '../assets/back.png'

const BtnNextIcon = () => {
  return (
  <button className='bg-customGreen rounded-full'>
    <a href="">
        <img src={back} alt="" className='w-[60px] h-[60px]' />
    </a>
  </button>
  )
}

export default BtnNextIcon