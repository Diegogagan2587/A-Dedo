import GreenLinkButton from "../components/buttons/GreenLinkButton"
import './Main.css'
import mainDriver from '../assets/main-driver.png'
import mainTrip from '../assets/main-trip.png'
import numero1 from '../assets/numero-1.png'
import numero2 from '../assets/numero-2.png'
import numero3 from '../assets/numero-3.png'
import ahorroDinero from '../assets/ahorrar-dinero.png'
import ahorroTiempo from '../assets/ahorrar-tiempo.png'
import amigos from '../assets/convencion.png'
import medioAmbiente from '../assets/medioambiente.png'
import imageEnd from '../assets/image-end.png'
import { useNavigate } from "react-router-dom"

function LandingPage() {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/login');
  }

  return (
    <div>
        <main className="h-screen bg-main-image flex items-center flex-col justify-center ">
              <h1 className="font-baloo text-white text-center text-5xl font-extrabold mb-4">Viaja <br /> ahorrando</h1>
              <p className="font-roboto-flex text-white w-1/2 text-1xl mb-4 ">Conectate con personas que van al mismo lugar que vos y ahorra dinero.</p>
              <GreenLinkButton 
                to="/login"
                text="Ingresar"/>
        </main>
    <section className="flex flex-col">
        <h2 className="mt-3 p-4 text-center text-2xl font-roboto-flex">¿Qué es <span className="text-customGreen font-title">a dedo</span>?</h2>
        <p className="ml-4 mb-4 font-roboto-flex"><span className="text-customGreen font-title">a dedo</span> es una plataforma que te permite contactarte de manera facil y segura con otras personas que van al mismo destino que vos.</p>
    
        <section id="seguridad-confianza">
          <h2 className="text-[20px] text-customGreen ml-4 font-baloo">Seguridad y confianza</h2>
          <article className="flex p-4">
            <img src={mainDriver} alt="" />
            <p className="ml-4 font-roboto-flex">Como <span className="text-customGreen font-title">conductor</span>, tener el derecho de elegir con quien viajar, aceptando o cancelando las solicitudes. </p>
          </article>
          <article className="flex p-4">
            <p className="mr-4 font-roboto-flex">Como <span className="text-customGreen font-title">pasajero</span>, tendras disponible, toda la informacion del conductor y quienes seran tus compañeros de viaje. </p>
            <img src={mainTrip} alt="" />
          </article>
        </section>
    
      <section id="como-funciona">
        <h2 className="text-[24px] ml-4 mt-6 font-bold font-baloo">¿Cómo funciona?</h2>
        <article className="flex items-center justify-center p-4">
          <img src={numero1} alt="" />
          <p className="ml-3 font-roboto-flex">Crea tu usuario</p>
        </article>
        <article className="flex items-center ml-10 p-4">
          <img src={numero2} alt="" />
          <p className="ml-3 font-roboto-flex">Elegí si queres ver los viajes disponibles o crear un viaje</p>
        </article>
        <article className="flex items-center ml-3 justify-center p-4">
          <img src={numero3} alt="" />
          <p className="ml-3 font-roboto-flex">Carga tus datos y <br /> comenza a ahorrar</p>
        </article>
      </section>

      <section id="beneficios">
        <h2 className="text-[24px] ml-4 mt-6 font-bold font-baloo">Beneficios</h2>
            <article className="flex items-center m-3 gap-[5px] p-3">
              <img src={ahorroDinero} alt="" className="min-w-[60px] min-h-[60px]"/>
              <div className="flex items-center flex-col ml-2">
                <h3 className="text-customGreen font-bold text-center font-roboto-flex">Ahorra dinero</h3>
                <p className="text-center font-roboto-flex">Dividí gastos con otros pasajeros.</p>
              </div>
            </article>
            <article className="flex items-center m-3 gap-[5px] p-3">
              <img src={ahorroTiempo} alt="" className="min-w-[60px] min-h-[60px]" />
              <div className="flex items-center flex-col ml-2">
                <h3 className="text-customGreen font-bold text-center font-roboto-flex">Ahorra tiempo</h3>
                <p className="text-center">Decile chau a esperar el colectivo, coordina un horario, te subis y listo.</p>
              </div>
            </article>
            <article className="flex items-center m-3 gap-[5px] p-3">
              <img src={amigos} alt="" className="min-w-[60px] min-h-[60px]" />
              <div className="flex items-center flex-col ml-2">
                <h3 className="text-customGreen font-bold text-center font-roboto-flex">Hace amigos nuevos</h3>
                <p className="text-center">Viaja acompañado y conoce nuevas personas.</p>
              </div>
            </article>
            <article className="flex items-center m-3 gap-[5px] p-3">
              <img src={medioAmbiente} alt="" className="min-w-[60px] min-h-[60px]"/>
              <div className="flex items-center flex-col ml-2">
                <h3 className="text-customGreen font-bold text-center font-roboto-flex">Cuida el medio ambiente</h3>
                <p className="text-center">Hay menos trafico y autos, juntos creamos ambiente libre de contaminacion.</p>
              </div>
            </article>
        </section>
    

      <section id="imagen"> 
        <picture>
          <img src={imageEnd} alt="" className="w-full" />
        </picture>
      </section>

    </section>
    </div>
  )
}

export default LandingPage