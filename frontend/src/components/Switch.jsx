
const Switch = () => {
  return (
    <label className="relative inline-flex items-center cursor-pointer mr-4">
    <input type="checkbox" value="" className="sr-only peer" />
    <div className="group peer ring-0 bg-slate-300  rounded-full outline-none duration-300 after:duration-300 w-[52px] h-[27px]  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-[20px] after:w-[20px] after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-6 peer-hover:after:scale-95 peer-checked:after:rotate-0">
    </div>
  </label>
  )
}

export default Switch