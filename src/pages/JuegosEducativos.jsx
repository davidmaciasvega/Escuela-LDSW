
export function JuegosEducativos() {
  const juegos = [
    { nombre: 'Juego 1', descripcion: 'Descripción del juego 1', enlace: '/ruta/juego1' },
    { nombre: 'Juego 2', descripcion: 'Descripción del juego 2', enlace: '/ruta/juego2' },
    { nombre: 'Juego 3', descripcion: 'Descripción del juego 3', enlace: '/ruta/juego3' },
  ];

  return (
    <div className="juegos-educativos">
      <h2>Juegos Educativos</h2>
      <ul>
        {juegos.map((juego, index) => (
          <li key={index}>
            <h3>{juego.nombre}</h3>
            <p>{juego.descripcion}</p>
            <a href={juego.enlace}>Jugar ahora</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

