import React from "react";
import GreyImg from "../../../shared/grey-img";
import DescriptionWithLink from "../../../shared/desciptionWithLink";



const Planet = (props) => {
  
  const names =['a','b','c','d','e','f'] //
  // const satellites

  let title = props.title_width_underline ? <h4><u>{props.name}</u></h4> : <h4>{props.name}</h4>
  return (
    <div>
      {title}
      <DescriptionWithLink
        text= {props.text}
        url = {props.url}
        name_url = {props.name_url}
      />
      <br/>
      <GreyImg
      img_url={props.img_url}
      grey = {props.grey}
      />

      {/* Renderizando multiplos componentes no jsx */}
      <h3> Satélites</h3>
      <ul>{['a','b','c','d','e','f'].map(n =>
          <li>Satelite {n}</li>
        )}
        </ul>
      <hr/>
    </div>
  )
}

export default Planet;