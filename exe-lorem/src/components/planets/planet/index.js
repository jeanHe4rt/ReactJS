import React from "react";
import GreyImg from "../../../shared/grey-img";


const Planet = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <GreyImg img_url={props.img_url}/>
    </div>
  )
}

export default Planet;