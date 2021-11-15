import React,{Fragment} from "react";
import "./index.css"

const DescriptionWithLink = (props) => {
  return (
    <Fragment>
      <p>{props.text}</p>
      <p>
        <a className="link"href={props.url} taget="_blanck">{props.name_url}</a>
      </p>
    </Fragment>
  )
}

export default DescriptionWithLink;
