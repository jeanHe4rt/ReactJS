import React,{Fragment} from "react";
import "./index.css"

const DescriptionWithLink = (props) => {
  return (
    <Fragment className="DescriptionWithLink">
      <p>{props.text}</p>
      <div>
        <a className="link"href={props.url} taget="_blanck">{props.name_url}</a>
      </div>
    </Fragment>
  )
}

export default DescriptionWithLink;
