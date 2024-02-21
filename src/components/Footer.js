import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/al-huda-logo.png'
const Footer = () => {
  return (
    <>
      <div className='container-fluid footer'>
       <div className="row">
        <div className="col-lg-3 col-md-6">
          <img src={logo} alt="Huda Ease Quran Academy Logo" />
          <p>Welcome to the Al Huda Ease Quran Academy, a place dedicated to embracing and disseminating the beauty and knowledge of the Quran with a community of searchers and believers on a global scale.</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h2 className="heading footer-heading">Company</h2>
          <ul className="footer-menu">
           
              <li><Link to='/about'><i className="fa fa-angle-right"></i> About Us </Link></li>
              <li><Link to='/contact'><i className="fa fa-angle-right"></i> Contact Us </Link></li>
              <li><Link to='/faq'><i className="fa fa-angle-right"></i> FAQs </Link></li>
              <li><Link to='/fee'><i className="fa fa-angle-right"></i> Price & Plans </Link></li>
              <li><Link to='/'><i className="fa fa-angle-right"></i> Privacy Policy </Link></li>
           
          </ul>
        </div>
        <div className="col-lg-3 col-md-6">
          <h2 className="heading footer-heading">Useful Links</h2>
          <ul className="footer-menu">
            
          <li><Link to='/'><i className="fa fa-angle-right"></i> Home </Link> </li>
          <li><Link to='/courses'><i className="fa fa-angle-right"></i> Courses </Link></li>
          <li> <Link to='/tutors'><i className="fa fa-angle-right"></i> Tutors </Link></li>
          <li><Link to='/register'><i className="fa fa-angle-right"></i> Register </Link></li>
          <li> <a href="tel:+923296565666"><i className="fa fa-angle-right"></i> Call Now </a> </li>
           
          </ul>
        </div>
        <div className="col-lg-3 col-md-6">
          <h2 className="heading footer-heading">Contact Info</h2>
          <ul className="footer-menu">
           
              
          <li> <Link to='/tutors'><i className="fa fa-map-marker-alt"></i> Pakistan </Link> </li>
          <li> <a href="tel:+923296565666"><i className="fa fa-phone-alt"></i> +923296565666 </a> </li>
          <li><a href="https://wa.me/+923296565666" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i> +923296565666</a> </li>
          <li><a href="mailto:Infoeasequran@gmail.com" target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i> Infoeasequran@gmail.com</a> </li>
          <li className='social'> <a href="https://www.facebook.com/EASEQURAN?mibextid=LQQJ4d" rel="noreferrer" target="_blank"> <i className="fab fa-facebook"></i></a> <a href="https://instagram.com/easequrann?igshid=MzRlODBiNWFlZA==" rel="noreferrer" target="_blank"> <i className="fab fa-instagram"></i></a></li>
           
          </ul>
        </div>
      </div>

    </div>
    <div className="copyright">
      <p>Copyright &copy; 2023 By Al Huda Ease Quran Academy | All Rights Reserved. </p>
    </div>
    
    <a
        href="https://wa.me/+923296565666"
        rel="noreferrer"
        target="_blank"
        class="whatsapp-icon"
      >
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 48 48"
        >
          <path
            fill="#fff"
            d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"
          ></path>
          <path
            fill="#fff"
            d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"
          ></path>
          <path
            fill="#cfd8dc"
            d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"
          ></path>
          <path
            fill="#40c351"
            d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"
          ></path>
          <path
            fill="#fff"
            fill-rule="evenodd"
            d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <p className='trial-text-style'>Start your Free trial now</p>
      </a>


    
    </>
  )
}

export default Footer
