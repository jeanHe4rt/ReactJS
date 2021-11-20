import React from "react";
import './index.css';


const GreyImg = (props) => {
  return (
    <img className={props.grey ? 'grey-img': 'color-img'} src={props.img_url} alt="Planeta Mercurio"/>
  )
}

export default GreyImg;