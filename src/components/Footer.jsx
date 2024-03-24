import { Link } from 'react-router-dom';
import './Footer.css';

export function Footer() {
  return (
    <div className="footer">
      <div className="barra-separadora"></div>
      <div className="column">
        <h4>MAS INFORMACIÓN</h4>
        <p>Escribenos: contacto@saberenlinea.com</p>
        <p>Tel: (01 33) 33 22 11 44</p>
        <p>Ext. 45512, 45513, 45514</p>
      </div>
      <div className="column">
        <h4>AYUDA</h4>
        <ul>
          <li><Link to="/mapa-de-sitio">Mapa de sitio</Link></li>
          <li><Link to="/aviso-de-privacidad">Aviso de Privacidad</Link></li>
          <li><Link to="/terminos-del-servicio">Términos del Servicio</Link></li>
          <li><Link to="/marco-legal">Marco Legal</Link></li>
        </ul>
      </div>
      <div className="column">
        <h4>SABER EN LINEA</h4>
        <ul>
          <li><Link to="/recursos-educativos">Recursos Educativos</Link></li>
          <li><Link to="/preguntas-frecuentes">Preguntas Frecuentes</Link></li>
          <li><Link to="/foros">Foros de Discusión</Link></li>
          <li><Link to="/eventos">Eventos</Link></li>
        </ul>
      </div>
      <div className="column">
        <h4>SUSCRÍBETE</h4>
        <p>Recibe noticias y novedades</p>
        <input type="email" placeholder="Tu correo electrónico" />
        <button className="subscribe-button">Suscríbase a</button>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer"><img src="/img/facebook.png" alt="Facebook" /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><img src="/img/twitter.png" alt="Twitter" /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><img src="/img/whatsapp.png" alt="WhatsApp" /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><img src="/img/instagram.png" alt="Instagram" /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><img src="/img/tik-tok.png" alt="TikTok" /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><img src="/img/youtube.png" alt="YouTube" /></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;