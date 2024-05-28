import GreenButton from "../components/GreenButton"
import './Main.css'
import mainDriver from '../assets/main-driver.png'

function Main() {
  return (
    <div>
        <main className="h-screen bg-main-image flex items-center flex-col justify-center ">
              <h1 className="text-white font-mainTitle text-center text-5xl font-bold mb-4">Viaja <br /> ahorrando</h1>
              <p className="text-white w-1/2 text-1xl mb-4 ">Conectate con personas que van al mismo lugar que vos y ahorra dinero.</p>
              <GreenButton />
        </main>
    <section className="flex flex-col">
        <h2 className="mt-3 p-4 text-center text-2xl">¿Qué es <span className="text-customGreen font-title">a dedo</span>?</h2>
        <p className="text-center mb-4"><span className="text-customGreen font-title">a dedo</span> es una plataforma que te permite contactarte de manera facil y segura con otras personas que van al mismo destino que vos.</p>
    
        <section>
          <h2>Seguridad y confianza</h2>
          <article>
            <img src={mainDriver} alt="" />
            <p>Como conductor, tener el derecho de elegir con quien viajar, aceptando o cancelando las solicitudes. </p>
          </article>
          <article>
            
          </article>
        </section>
    
    </section>
    </div>
  )
}

export default Main