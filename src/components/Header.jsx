import './Header.css';
export function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/img/logo1.png" alt="Logo de Saber en Línea" />
      </div>
      
      <div className="search-bar">
        <input type="text" placeholder="Buscar por título, autor o contenido" />
        <button type="button"><img src="/img/lupa.png" alt="Buscar" /></button>
      </div>
      
      <button className="login-btn" type="button">Iniciar sesión</button>
      
      <div className="user-icon">
        <img src="/img/usuario-de-perfil.png" alt="Usuario" />
      </div>
    </header>
  );
}

export default Header;