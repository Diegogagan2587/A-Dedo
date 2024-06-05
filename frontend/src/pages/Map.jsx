import map from '../assets/mapa.png'
import MapNav from '../components/MapNav'

const Map = () => {
  return (
    <main>
      <MapNav />
      <img src={map} alt="" />
    </main>
  )
}

export default Map