
import Banner from '../components/Banner';
import LibrosRecomendados from '../components/LibrosRecomendados';
import LibrosInfantiles from '../components/LibrosInfantiles';
import LibrosRecientes from '../components/LibrosRecientes';

export function Inicio() {
  return (
    <div className="inicio">
      <Banner />
      <div className="libros-recomendados">
        <h2>Libros Recomendados</h2>
        <LibrosRecomendados />
      </div>
      <div className="libros-infantiles">
        <h2>Libros Infantiles</h2>
        <LibrosInfantiles />
      </div>
      <div className="libros-recientes">
        <h2>Libros Recientes</h2>
        <LibrosRecientes />
      </div>
    </div>
  );
}