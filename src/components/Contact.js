import React from 'react'
import Breadcrumb from './subcomponents/Breadcrumb'
import Contactbox from './subcomponents/Contactbox'
import Form from './subcomponents/Form'
import img from '../assets/img/new-about-imgg.jpg'
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';


const Contact = (props) => {
  const sendEmail = (e)=>{
    e.preventDefault();
    emailjs.sendForm('service_ocy5eik','template_7w2o7ta',e.target,'8jeBR7mzvstELklP2').then(()=>{
      Swal.fire({
        title: 'Form Submitted Successfully!',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#f48b11',
        cancelButtonColor: '#f48b11',
        confirmButtonText: 'Go To Whatsapp',
        cancelButtonText: 'OK',
    }).then((result) => {
        if (result.isConfirmed) {
            window.open('https://wa.me/+923296565666', '_blank');
        }
    });
      document.getElementById('name').value="";
      document.getElementById('eamil').value="";
      document.getElementById('phone').value="";
      document.getElementById('subject').value="";
      document.getElementById('message').value="";
    });
  }
  return (
    <>
     <Breadcrumb pagename="Contact Us"/>
      <div className="contaner contact">
        <div className="row">
        <p className="sub-heading fee-sub">Al Huda Ease Quran</p>
        <h2 className="heading">Contact Details</h2>
          <Contactbox icon="fab fa-facebook" heading="Facebook Page" subheading="Al Huda Ease Quran Academy " link="https://www.facebook.com/EASEQURAN?mibextid=LQQJ4d"/>
          <Contactbox icon="fab fa-whatsapp" heading="Whatsapp" subheading="+923296565666" link="https://wa.me/+923296565666"/>
          <Contactbox icon="fa fa-envelope" heading="Email" subheading="Infoeasequran@gmail.com" link="mailto:Infoeasequran@gmail.com"/>
        </div>
        <Form img={img} submitFunction={sendEmail}/>
      </div>
    </>
  )
}

export default Contact
