import React, { useState, useEffect } from "react";
import GreyImg from "../../../shared/grey-img";
import DescriptionWithLink from "../../../shared/desciptionWithLink";


async function getSatellites(id) {
  const response = await fetch(`http://localhost:3000/api/${id}.json`)
  const data = await response.json()
  return data;
}

const Planet = (props) =>{

  const [satellites, setSatellites] = useState([])
  
  let title = props.title_width_underline ? <h4><u>{props.name}</u></h4> : <h4>{props.name}</h4>
  useEffect(() => {
    getSatellites(props.id).then( data => {
      setSatellites(data['satellites'])
    })
  },[]);

    return (
      <div>
        {title}
        <DescriptionWithLink
          description= {props.description}
          link = {props.link}
        />
        <br/>
        <GreyImg
        img_url={props.img_url}
        grey = {props.grey}
        />
        <h3>Satélites</h3>
        <ul>{
          satellites.map((element,index) => 
            <li key={index}>{element.name}</li>
            )
          }</ul>
        </div>
    )
  }

export default Planet;