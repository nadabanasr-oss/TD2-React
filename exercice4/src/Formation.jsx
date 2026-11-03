function Formation() {
  const disponible = true;
  const places = 5;

  return (
    <div>
      <h2>React JS</h2>
      {disponible && <p>Inscriptions ouvertes</p>}
      {disponible && places > 0 && <p>Il reste des places</p>}
    </div>
  );
}

export default Formation;