/* import React, { useEffect, useState } from 'react';

function Formulario(props) {
const url = process.env.REACT_APP_API_URL + '/partidas/categoria';
const [resultados, setResultados] = useState()

useEffect(() => {
  console.log("clasificacion dentro del useeffect");
  console.log("entra en el useEffect");
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: props.categoria })
};
fetch(url, requestOptions)
    .then(response => response.json())
    .then(json => setResultados(json))
}, []);

  return (

    <div className='w-full'>
      <DataTable responsiveLayout="scroll" value={resultados}>
        <Column field="Index" header="Pos." body={listaPosicion}></Column>
        <Column field="nombre" header="Jugador"></Column>
        <Column field={categoria} header="Categoria"></Column>
        <Column field="puntuacion" header="Puntos"></Column>
        <Column field="fecha" header="Fecha"></Column>
      </DataTable></div>
  );

}

export default Clasificacion
*/