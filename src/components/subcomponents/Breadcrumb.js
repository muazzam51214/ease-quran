import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = (props) => {
  return (
    <div className='container-fluid bdc'>
        <div className="row">
            <div className="col">
                <h2 className="heading">{props.pagename}</h2>
                <Link to='/'>Home</Link>
                <span>{props.pagename}</span>
            </div>
        </div>
      
    </div>
  )
}

export default Breadcrumb
