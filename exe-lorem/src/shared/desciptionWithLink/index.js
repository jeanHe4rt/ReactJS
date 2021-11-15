import React,{Fragment} from "react";
import "./index.css"

const DescriptionWithLink = (props) => {
  if(!props.text)
  return null;
  if(props.url){
    return (
      <Fragment>
        <p>{props.text}</p>
        <p>
          <a className="link"href={props.url} taget="_blanck">{props.name_url}</a>
        </p>
      </Fragment>
    )
  }else {
    return (
      <Fragment>
        <p><u>{props.text}</u></p>
      </Fragment>
    )
  }
}

export default DescriptionWithLink;
