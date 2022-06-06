import React from 'react';


const App = () => {
    const nimi = "Joni"
    const henkilo = {"etunimi" : "Kalle",
"ika":33}
const henkilot = [ 
    {"etunimi" : "Krista",
    "ika":29},
    {"etunimi" : "Tytti",
    "ika":31}
]
const sayHi = (nimi) => 'Heippa ' + nimi;


  return (
    <div>
      {nimi} {henkilo.etunimi} {henkilo.ika} <br />
    {sayHi(henkilot[0].etunimi)}
    </div>
  );
}

export default App;
