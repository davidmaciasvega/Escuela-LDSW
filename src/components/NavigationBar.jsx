import './NavigationBar.css';

import { Link } from 'react-router-dom';

export function NavigationBar() {
  return (
    <div className="navigation-bar">
      <ul>
        <li><Link to="/">INICIO</Link></li>
        <li><Link to="/nosotros">NOSOTROS</Link></li>
        <li><Link to="/recursos-educativos">RECURSOS EDUCATIVOS</Link></li>
        <li><Link to="/videos">VIDEOS</Link></li>
        <li><Link to="/juegos-educativos">JUEGOS EDUCATIVOS</Link></li>
        <li><Link to="/foros">FOROS</Link></li>
        <li><Link to="/eventos">EVENTOS</Link></li>
        <li><Link to="/colabora">COLABORA</Link></li>
        <li><Link to="/contacto">CONTACTO</Link></li>
      </ul>
    </div>
  );
}
