import React from 'react';
import Breadcrumb from './subcomponents/Breadcrumb'
import Registerform from './subcomponents/Registerform';
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';

const Register = () => {
  const sendEmail = (e)=>{
    e.preventDefault();
    emailjs.sendForm('service_92l188y','template_1xzwe2s',e.target,'8jeBR7mzvstELklP2').then(()=>{
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
      document.getElementById('country').value="";
    });
  }
  return (
    <div>
      <Breadcrumb pagename="Register Now"/>
      <div className="container-contact register">
        <div className="row form">
        <p className="sub-heading fee-sub">Ease Quran Academy</p>
        <h2 className="heading contact-heading">Student Registeration</h2>
          <Registerform submitFunction={sendEmail}/>
        </div>
      </div>
    </div>
  )
}

export default Register
