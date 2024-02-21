import React from 'react';
import { Link } from 'react-router-dom';

const Coursebox = (props) => {
  return (
    <div className="course-boxx">
      <img src={props.img} alt={props.alt} className='w-100'/>
      <h2>{props.heading}</h2>
      <p>{props.subheading}</p>
      <Link to="/register" className='btnn'>Enroll</Link>

    </div>
  )
}

export default Coursebox
