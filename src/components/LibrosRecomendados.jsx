
export function LibrosRecientes() {
  const libros = [
    { titulo: 'El homre que quiso ser Rey', autor: 'Rudyard Kipling', tipoLectura: 'Cuento', añoPublicacion: 1888, imagen: '/public/img/libros/recomendados/el hombre que quiso ser rey.jpg' },
    { titulo: 'Voluntad', autor: 'Miguel de Unamuno', tipoLectura: 'Novela', añoPublicacion: 1902, imagen: 'public/img/libros/recomendados/voluntad.jpg' },
    { titulo: 'Don Carlos Infante de España', autor: 'Friedrich Schiller', tipoLectura: 'Teatro', añoPublicacion: 1787, imagen: '/ruta/imagenC.jpg' },
    { titulo: 'Los Primeros Principios', autor: 'Herbert Spencer', tipoLectura: 'Filosofía', añoPublicacion: 1862, imagen: 'public/img/libros/recomendados/los primeros principios.jpg' },
    { titulo: 'Eutidemo o El Disputador', autor: 'Platón', tipoLectura: 'Filosofía', añoPublicacion: 1871, imagen: 'public/img/libros/recomendados/eutidemo o el disputador.jpg' },
    { titulo: 'Breve Antología Literaria', autor: 'Varios', tipoLectura: 'Antologia', añoPublicacion: 1940, imagen: 'public/img/libros/recomendados/Breve antologia literaria.jpg' },
    { titulo: 'Ciudad Alfiler', autor: 'María Martinez', tipoLectura: 'Político', añoPublicacion: 1998, imagen: 'public/img/libros/recomendados/ciudad alfiler.jpg' },
    { titulo: 'Proezas del Amor', autor: 'Roberto Sánchez', tipoLectura: 'Novela', añoPublicacion: 2015, imagen: 'public/img/libros/recomendados/proezas del amor.jpg' },
    { titulo: 'A Sangre y Fuego', autor: 'Javier Morales', tipoLectura: 'Novela', añoPublicacion: 2009, imagen: 'public/img/libros/recomendados/a sangre y fuego.jpg' },
  ];
  return (
    <div className="libros-recientes">
      {libros.map((libro, index) => (
        <div key={index} className="libro">
          <img src={libro.imagen} alt={libro.titulo} />
          <h3>{libro.titulo}</h3>
          <p>Autor: {libro.autor}</p>
          <p>Tipo de lectura: {libro.tipoLectura}</p>
          <p>Año de publicación: {libro.añoPublicacion}</p>
        </div>
      ))}
    </div>
  );
}

export default LibrosRecientes;
