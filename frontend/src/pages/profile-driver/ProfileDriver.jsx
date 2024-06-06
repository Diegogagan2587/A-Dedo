import driverProfile from '../../assets/main-profilepic.png'

const ProfileDriver = () => {
  return (
    <main className='mt-20 flex flex-col'>
      <section className="flex flex-row items-center justify-center">
          <img src={driverProfile} alt=""/>
          <div className="m-4">
            <h1 className="text-center text-2xl font-extrabold text-mainTitle text-textColor mb-2">Marcos</h1>
          </div>
        </section>

        <div className="flex flex-row items-center justify-center">
          <h1 className="text-customGreen font-extrabold text-mainTitle text-xl m-2">Viajes disponibles</h1>
        </div>

    </main>
  )
}

export default ProfileDriver