import React from "react";
import GreyImg from "../../../shared/grey-img";
import DescriptionWithLink from "../../../shared/desciptionWithLink";

const Planet = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <DescriptionWithLink
        text= {props.text}
        url = {props.url}
        name_url = {props.name_url}
      />
      <br/>
      <GreyImg img_url={props.img_url}/>
    </div>
  )
}

export default Planet;