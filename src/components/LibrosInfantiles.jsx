import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LibrosRecientes.css';

export function LibrosInfantiles() {

  const libros = [
    { titulo: 'El Pescador Flautista', autor: 'Esteban Navarro', tipoLectura: 'Fábula', añoPublicacion: 2017, imagen: '/public/img/libros/infantil/flautista.jpg' },
    { titulo: 'El Pequén y el Sapo', autor: 'Renata Díaz', tipoLectura: 'Cuento', añoPublicacion: 2004, imagen: '/public/img/libros/infantil/secretos de las bestias.jpg' },
    { titulo: 'Poemas para Niños', autor: 'María Rodriguez', tipoLectura: 'Poesía', añoPublicacion: 2010, imagen: '/public/img/libros/infantil/poemas para niños.jpg' },
    { titulo: 'Los Secretos de las Bestias', autor: 'Guillermo Sánchez', tipoLectura: 'Novela', añoPublicacion: 2018, imagen: '/public/img/libros/infantil/secretos de las bestias.jpg' },
    { titulo: 'Dos Hmobres Disputando Acerca de los Dioses', autor: 'Eduardo López', tipoLectura: 'Filosofía', añoPublicacion: 2005, imagen: '/public/img/libros/infantil/dos hombres.jpg' },
    { titulo: 'El Ladrón y su Madre', autor: 'Juan Pablo Ramos', tipoLectura: 'Novela', añoPublicacion: 2013, imagen: '/public/img/libros/infantil/el ladron.jpg' },
    { titulo: '¿Por qué debo usar Cubiertos?', autor: 'Claudia Garcia', tipoLectura: 'Cuento', añoPublicacion: 2019, imagen: '/public/img/libros/infantil/cubiertos.jpg' },
    { titulo: 'El Batanero y el Carbonero', autor: 'Martín López García', tipoLectura: 'Cuento', añoPublicacion: 2008, imagen: '/public/img/libros/infantil/batanero.jpg' },
    { titulo: 'Precisamente Así', autor: 'Carolina Martínez', tipoLectura: 'Novela', añoPublicacion: 2020, imagen: '/public/img/libros/infantil/precisamente asi.jpg' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5, 
    slidesToScroll: 1
  };

  return (
    <div className="libros-recientes">
      <Slider {...settings}>
        {libros.map((libro, index) => (
          <div key={index} className="libro">
            <img src={libro.imagen} alt={libro.titulo} />
            <h3>{libro.titulo}</h3>
            <p>Autor: {libro.autor}</p>
            <p>Tipo de lectura: {libro.tipoLectura}</p>
            <p>Año de publicación: {libro.añoPublicacion}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default LibrosInfantiles;
