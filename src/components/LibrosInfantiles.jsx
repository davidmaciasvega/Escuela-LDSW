
export function LibrosInfantiles() {
  const libros = [
    { titulo: 'Libro 1', autor: 'Autor 1', tipoLectura: 'Ficción', añoPublicacion: 2020, imagen: '/ruta/imagen1.jpg' },
    { titulo: 'Libro 2', autor: 'Autor 2', tipoLectura: 'No ficción', añoPublicacion: 2019, imagen: '/ruta/imagen2.jpg' },
    { titulo: 'Libro 3', autor: 'Autor 3', tipoLectura: 'Ficción', añoPublicacion: 2021, imagen: '/ruta/imagen3.jpg' },
    { titulo: 'Libro 4', autor: 'Autor 4', tipoLectura: 'Ficción', añoPublicacion: 2022, imagen: '/ruta/imagen4.jpg' },
    { titulo: 'Libro 5', autor: 'Autor 5', tipoLectura: 'No ficción', añoPublicacion: 2020, imagen: '/ruta/imagen5.jpg' },
    { titulo: 'Libro 6', autor: 'Autor 6', tipoLectura: 'Ficción', añoPublicacion: 2019, imagen: '/ruta/imagen6.jpg' },
    { titulo: 'Libro 7', autor: 'Autor 7', tipoLectura: 'No ficción', añoPublicacion: 2021, imagen: '/ruta/imagen7.jpg' },
    { titulo: 'Libro 8', autor: 'Autor 8', tipoLectura: 'Ficción', añoPublicacion: 2018, imagen: '/ruta/imagen8.jpg' },
    { titulo: 'Libro 9', autor: 'Autor 9', tipoLectura: 'No ficción', añoPublicacion: 2017, imagen: '/ruta/imagen9.jpg' },
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
