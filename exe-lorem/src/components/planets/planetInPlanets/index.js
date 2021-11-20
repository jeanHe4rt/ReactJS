import React from "react";
import GreyImg from "../../../shared/grey-img";
import DescriptionWithLink from "../../../shared/descriptionWithLink";

import { Link } from "react-router-dom";

const Planet = (props) =>{
  
  let title = props.title_width_underline ? <h4><u>{props.name}</u></h4> : <h4>{props.name}</h4>

    return (
      <div>
        <Link to={`/planet/${props.id}`}>{title}</Link>
        <DescriptionWithLink
          description={props.description}
          link={props.link}
        />
        <br />
        <GreyImg img_url={props.img_url} grey={props.grey} />
      </div>
    );
  }

export default Planet;