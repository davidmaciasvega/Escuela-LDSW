
export function LibrosRecientes() {
  const libros = [
    { titulo: 'Libro A', autor: 'Autor A', tipoLectura: 'Ficción', añoPublicacion: 2022, imagen: '/ruta/imagenA.jpg' },
    { titulo: 'Libro B', autor: 'Autor B', tipoLectura: 'No ficción', añoPublicacion: 2023, imagen: '/ruta/imagenB.jpg' },
    { titulo: 'Libro C', autor: 'Autor C', tipoLectura: 'Ficción', añoPublicacion: 2024, imagen: '/ruta/imagenC.jpg' },
    { titulo: 'Libro D', autor: 'Autor D', tipoLectura: 'No ficción', añoPublicacion: 2025, imagen: '/ruta/imagenD.jpg' },
    { titulo: 'Libro E', autor: 'Autor E', tipoLectura: 'Ficción', añoPublicacion: 2026, imagen: '/ruta/imagenE.jpg' },
    { titulo: 'Libro F', autor: 'Autor F', tipoLectura: 'No ficción', añoPublicacion: 2027, imagen: '/ruta/imagenF.jpg' },
    { titulo: 'Libro G', autor: 'Autor G', tipoLectura: 'Ficción', añoPublicacion: 2028, imagen: '/ruta/imagenG.jpg' },
    { titulo: 'Libro H', autor: 'Autor H', tipoLectura: 'No ficción', añoPublicacion: 2029, imagen: '/ruta/imagenH.jpg' },
    { titulo: 'Libro I', autor: 'Autor I', tipoLectura: 'Ficción', añoPublicacion: 2030, imagen: '/ruta/imagenI.jpg' },
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
