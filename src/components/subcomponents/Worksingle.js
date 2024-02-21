import React from 'react'

const Worksingle = (props) => {
  return (
    <div className="info-boxx">
    <i className={props.icon}></i>
    <h2 id='a'>{props.heading}</h2>
    <p>{props.subheading}</p>
  </div>
  )
}

export default Worksingle
