import React from 'react'

const Contactbox = (props) => {
  return (
    <div className="info-boxx" id='cbox'>
      <a href={props.link} rel="noopener noreferrer" target="_blank"><i className={props.icon}></i></a>
      <h2 id='a'>{props.heading}</h2>
      <a href={props.link} rel="noopener noreferrer" target="_blank">{props.subheading}</a>
    </div>
  )
}

export default Contactbox;
