import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LibrosRecientes.css';

export function LibrosRecientes() {
  const libros = [
    { titulo: 'El Pescador Flautista', autor: 'Esteban Navarro', tipoLectura: 'Fábula', añoPublicacion: 2017, imagen: '/public/img/libros/infantil/flautista.jpg' },
    { titulo: 'El Pequén y el Sapo', autor: 'Renata Díaz', tipoLectura: 'Cuento', añoPublicacion: 2004, imagen: '/public/img/libros/infantil/secretos de las bestias.jpg' },
    { titulo: 'Poemas para Niños', autor: 'María Rodriguez', tipoLectura: 'Poesía', añoPublicacion: 2010, imagen: '/public/img/libros/infantil/poemas para niños.jpg' },
    { titulo: 'Ciudad Alfiler', autor: 'María Martinez', tipoLectura: 'Político', añoPublicacion: 1998, imagen: 'public/img/libros/recomendados/ciudad alfiler.jpg' },
    { titulo: 'Proezas del Amor', autor: 'Roberto Sánchez', tipoLectura: 'Novela', añoPublicacion: 2015, imagen: 'public/img/libros/recomendados/proezas del amor.jpg' },
    { titulo: 'A Sangre y Fuego', autor: 'Javier Morales', tipoLectura: 'Novela', añoPublicacion: 2009, imagen: 'public/img/libros/recomendados/a sangre y fuego.jpg' },
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

export default LibrosRecientes;
