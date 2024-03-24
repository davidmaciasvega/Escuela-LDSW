import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Header} from './components/Header';
import {NavigationBar} from './components/NavigationBar';
import {Footer} from './components/Footer';
import {Inicio} from './pages/Inicio';
import {Nosotros} from './pages/Nosotros.jsx';
import {RecursosEducativos} from './pages/RecursosEducativos';
import {Videos} from './pages/Videos';
import {JuegosEducativos} from './pages/JuegosEducativos';
import {Foros} from './pages/Foros';
import {Eventos} from './pages/Eventos';
import {Colabora} from './pages/Colabora';
import {Contacto} from './pages/Contacto';
import {MapaDeSitio} from './pages/MapaDeSitio';
import {AvisoDePrivacidad} from './pages/AvisoDePrivacidad';
import {TerminosDelServicio} from './pages/TerminosDelServicio';
import {MarcoLegal} from './pages/MarcoLegal';
import {PreguntasFrecuentes} from './pages/PreguntasFrecuentes.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Inicio/>} />
          <Route path="/nosotros/" element={<Nosotros/>} />
          <Route path="/recursos-educativos/" element={<RecursosEducativos/>} />
          <Route path="/videos/" element={<Videos/>} />
          <Route path="/juegos-educativos/" element={<JuegosEducativos/>} />
          <Route path="/foros/" element={<Foros/>} />
          <Route path="/eventos/" element={<Eventos/>} />
          <Route path="/colabora" element={<Colabora/>} />
          <Route path="/contacto/" element={<Contacto/>} />
          <Route path="/mapa-de-sitio/" element={<MapaDeSitio/>} />
          <Route path="/aviso-de-privacidad/" element={<AvisoDePrivacidad/>} />
          <Route path="/terminos-del-servicio/" element={<TerminosDelServicio/>} />
          <Route path="/marco-legal/" element={<MarcoLegal/>} />
          <Route path='/preguntas-frecuentes/' element={<PreguntasFrecuentes/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
