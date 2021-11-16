import React, { Fragment, useState, useEffect } from "react";
import Planet from "./planet";
// import Mercurio from '../../shared/grey-img/Mercurio.png'
import Form from "./form";

export async function getPlanets(){
  let response = await fetch('http://localhost:3000/api/planets.json')
  let data = await response.json();
  return data;
}

const Planets = () => {
  const [ planets, setPlanets] = useState([])

  useEffect(() =>{
    getPlanets().then(data => {
      setPlanets(data['planets'])            
    })
  }, []) // Roda só na hora da montagem.

  const addPlanet = (newPLanet) => {
    setPlanets([...planets, newPLanet])
  }


  console.log(planets);

  return (
    <Fragment>
      <h3>Planet List</h3>
      <hr/>
      <Form addPlanet={addPlanet}/>
      <hr/>
        {planets.map( (planet, index) => 
        <Planet 
        id ={planet.id}
        name={planet.name}
        description ={planet.description}
        link={planet.link}
        name_url={planet.name}
        img_url={planet.img_url}
        // title_width_underline={planet.title_width_underline}
        grey={planet.grey}
        key={index}
        /> 
      )}
    </Fragment>
  )
}


export default Planets;
