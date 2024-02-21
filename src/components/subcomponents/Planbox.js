import React from 'react';
import { Link } from 'react-router-dom';

const Planbox = (props) => {
  return (
    <div className="info-boxx plan-box" id='pbox'>
      <div className="price-top">
      <h2>{props.planname}</h2>
      <h2 className='price'><s>{props.oldprice}</s> {props.price}</h2>
      </div>
  
      <ul className="features">
        <li><i className="fa fa-clock"></i> {props.feature1}</li>
        <li><i className="fa fa-clock"></i> {props.feature2}</li>
        <li><i className="fa fa-laptop"></i> {props.feature3}</li>
        <li><i className="fa fa-user"></i> {props.feature4}</li>
      </ul>
   
      <Link to='/register' className='btnn'>Enroll Now</Link>
      
    </div>
  )
}

export default Planbox
