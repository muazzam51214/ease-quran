import React from 'react';
import { Link } from "react-router-dom";
const Homehero = (props) => {
  return (
   
    <div className="container-fluid" id='hero' style={{background:`url(${props.img})`, backgroundPosition:'center center', backgroundSize:'cover'}}>
      <div className="row">
        <div className="col her-col">
          <h2 className='mainHeading'>{props.heading}</h2>
          <p className='h-desc'>{props.subHeading}</p>
          <Link to={props.btnUrl} className='btnn'>{props.btnText}</Link>

        </div>
      </div>
    </div>
   
  )
}

export default Homehero
