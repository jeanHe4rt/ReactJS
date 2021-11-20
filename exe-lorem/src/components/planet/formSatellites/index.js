import React,{Fragment, useState} from "react";

const initialState ={ name:''}

const FormSatellites = (props) => {
  const [name,setName] = useState(initialState);

  const handleChange = e => {
    setName(e.target.value)
  }

  const handleSubmit = event => {
    props.addSatellites({name:name});
    event.preventDefault();
    setName(initialState);
  }


  return(
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input id ="name"type="text" name="name" onChange={handleChange} value ={name}/>
        </div>
        <br/>
        <input type="submit"/>
      </form>
    </Fragment>
  )
}

export default FormSatellites;