
export function LibrosInfantiles() {
  const libros = [
    { titulo: 'Harry Potter', autor: 'J. K. Rowling', tipoLectura: 'Ficción', añoPublicacion: 2020, imagen: '/public/img/libros/infantil/flautista.jpg' },
    { titulo: 'Libro 2', autor: 'Autor 2', tipoLectura: 'No ficción', añoPublicacion: 2019, imagen: '/public/img/libros/infantil/secretos de las bestias.jpg' },
    { titulo: 'Libro 3', autor: 'Autor 3', tipoLectura: 'Ficción', añoPublicacion: 2021, imagen: '/public/img/libros/infantil/poemas para niños.jpg' },
    { titulo: 'Libro 4', autor: 'Autor 4', tipoLectura: 'Ficción', añoPublicacion: 2022, imagen: '/public/img/libros/infantil/secretos de las bestias.jpg' },
    { titulo: 'Libro 5', autor: 'Autor 5', tipoLectura: 'No ficción', añoPublicacion: 2020, imagen: '/public/img/libros/infantil/dos hombres.jpg' },
    { titulo: 'Libro 6', autor: 'Autor 6', tipoLectura: 'Ficción', añoPublicacion: 2019, imagen: '/public/img/libros/infantil/el ladron.jpg' },
    { titulo: 'Libro 7', autor: 'Autor 7', tipoLectura: 'No ficción', añoPublicacion: 2021, imagen: '/public/img/libros/infantil/cubiertos.jpg' },
    { titulo: 'Libro 8', autor: 'Autor 8', tipoLectura: 'Ficción', añoPublicacion: 2018, imagen: '/public/img/libros/infantil/batanero.jpg' },
    { titulo: 'Libro 9', autor: 'Autor 9', tipoLectura: 'No ficción', añoPublicacion: 2017, imagen: '/public/img/libros/infantil/precisamente asi.jpg' },
  ];

  return (
    <div className="libros-infantiles">
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

export default LibrosInfantiles;
