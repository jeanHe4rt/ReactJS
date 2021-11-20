import React, { useState, useEffect } from "react";
import GreyImg from "../../shared/grey-img";
import DescriptionWithLink from "../../shared/descriptionWithLink";
import FormSatellites from "../planet/formSatellites";

import { useParams, useNavigate, Navigate } from 'react-router-dom';


async function getPlanet(id) {
  const response = await fetch(`http://localhost:3000/api/${id}.json`)
  const data = await response.json()
  return data;
}

// eslint-disable-next-line
const Planet = () =>{

  const [satellites, setSatellites] = useState([])
  const [ planet, setPlanet] = useState({})
  const [ redirect, setRedirect ] = useState(false)
  let { id } = useParams();
  let navigate = useNavigate();
  
  let title = planet.title_width_underline ? <h4><u>{planet.name}</u></h4> : <h4>{planet.name}</h4>
  useEffect(() => {
    getPlanet(id).then( data => {
      setSatellites(data['satellites'])
      setPlanet(data['data'])
    }, error => {
      setRedirect(true);
    })
  },[]);

  const goToPlanets = ()=>{
    navigate('/');
  }

  const addSatellites = (newSatellites) => {
    setSatellites([...satellites, newSatellites])
  }

  if(redirect)
    return <Navigate to='/'/>
    
    return (
      <div>
        {title}
        <DescriptionWithLink
          description= {planet.description}
          link = {planet.link}
        />
        <br/>
        <GreyImg
        img_url={planet.img_url}
        grey = {planet.grey}
        />
        <h3>Satélites</h3>
        <FormSatellites addSatellites ={addSatellites}/>
        <ul>{
          satellites.map((element,index) => 
            <li key={index}>{element.name}</li>
            )
          }</ul>
          <button type="button" onClick={goToPlanets}>Voltar a listagem</button>
        </div>
    )
  }

export default Planet;