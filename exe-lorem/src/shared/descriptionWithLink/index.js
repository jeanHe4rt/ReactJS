import React,{Fragment} from "react";
import "./index.css"

const DescriptionWithLink = (props) => {
  if(!props.description)
  return null;
  if(props.link){
    return (
      <Fragment>
        <p>{props.description} </p>
        <p>
          <a className="link"href={props.link} taget="_blanck">{props.link}</a>
        </p>
      </Fragment>
    )
  }else {
    return (
      <Fragment>
        <p><u>{props.description}</u></p>
      </Fragment>
    )
  }
}

export default DescriptionWithLink;
