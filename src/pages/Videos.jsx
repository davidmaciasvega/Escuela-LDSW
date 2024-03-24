
export function Videos() {
  return (
    <div className="videos">
      <h2>Videos</h2>
      <p>Explora nuestra colección de videos educativos para enriquecer tu aprendizaje.</p>
      <div className="video-list">
        <div className="video">
          <h3>Video 1</h3>
          <p>Descripción del video 1</p>
          <iframe width="560" height="315" src="https://www.youtube.com/watch?v=XRZtCePhM6M" title="Video 1"  allowfullscreen></iframe>
        </div>
        <div className="video">
          <h3>Video 2</h3>
          <p>Descripción del video 2</p>
          <iframe width="560" height="315" src="https://www.youtube.com/watch?v=XRZtCePhM6M" title="Video 2"  allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

