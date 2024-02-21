import React from 'react'

const Singlebox = (props) => {
  return (
    <div className="info-boxx">
      <h2 className="nmbr">{props.nmbr}</h2>
      <h2 id='a'>{props.heading}</h2>
      <p>{props.subheading}</p>
    </div>
  )
}

export default Singlebox
