import React from 'react'

const Tutorsection = (props) => {
  return (
    <div className="info-boxx">
      <img src={props.img} alt="" />
      <h2>{props.name}</h2>
      <p>{props.subheading}</p>
      <a href={`https://wa.me/${props.whatsapp}`} className='btnn'> Whatsapp</a>
    </div>
  )
}

export default Tutorsection
