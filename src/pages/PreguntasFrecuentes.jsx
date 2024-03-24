
export function PreguntasFrecuentes() {
  return (
    <div className="preguntas-frecuentes">
      <h1>Preguntas Frecuentes</h1>
      <div className="pregunta">
        <h3>¿Cómo me registro en el sitio?</h3>
        <p>Para registrarte en nuestro sitio, ve a la página de registro y completa el formulario con tus datos personales.</p>
      </div>
      <div className="pregunta">
        <h3>¿Cómo puedo restablecer mi contraseña?</h3>
        <p>Si olvidaste tu contraseña, puedes restablecerla haciendo clic en el enlace ¿Olvidaste tu contraseña? en la página de inicio de sesión.</p>
      </div>
      <div className="pregunta">
        <h3>¿Cómo puedo acceder a los recursos educativos?</h3>
        <p>Para acceder a los recursos educativos, navega hasta la sección correspondiente en el menú de navegación y selecciona la categoría que te interese.</p>
      </div>
      {/* Agrega más preguntas y respuestas aquí */}
    </div>
  );
}

export default PreguntasFrecuentes;