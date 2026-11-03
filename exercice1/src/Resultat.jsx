function Resultat() {
  const moyenne = 14; // jarreb 8

  const styleAdmis = {
    backgroundColor: "lightgreen",
    color: "green",
    padding: "20px",
    borderRadius: "10px",
  };
  const styleRefuse = {
    backgroundColor: "lightcoral",
    color: "red",
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <div style={moyenne >= 10 ? styleAdmis : styleRefuse}>
      <h2>{moyenne >= 10 ? "Admis" : "Refusé"}</h2>
      <p>Moyenne : {moyenne}</p>
    </div>
  );
}

export default Resultat;