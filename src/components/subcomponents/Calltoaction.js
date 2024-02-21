import React from 'react';
import { Link } from 'react-router-dom';

const Calltoaction = () => {
  return (
    <div className='container-fluid cat'>
        <div className="row">
            <div className="col">
                <p className='sub-heading why-sub'>Al Huda Ease Quran</p>
                <h2 className="heading">
                    Get In Touch
                </h2>
                <Link to="/contact" className='btnn'>Contact Us</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Calltoaction
