import React from 'react'
import Breadcrumb from './subcomponents/Breadcrumb';
import img from '../assets/img/team-img.png'
import img2 from '../assets/img/team-img-f.png'
import Tutorsection from './subcomponents/Tutorsection';

const Tutors = (props) => {
  return (
    <>
      <Breadcrumb pagename="Our Tutors"/>
      <div className="container-fluid tutor">
        <div className="row">
          <p className="sub-heading">Al Huda Ease Quran</p>
          <h2 className="heading">Professional Tutors</h2>
        <Tutorsection img={img} name="Qari Abdullah" subheading="Qari Abdullah is our hardworking tutor with 3 Year experience and he is available for you all time. He is Qari of Quan." whatsapp="+923296565666"/>
        <Tutorsection img={img} name="Hafiz Ahmad" subheading="Hafiz Ahmad is our hardworking tutor with 5 Year experience and he is available for you all time. He is Hafiz of Quan." whatsapp="+923296565666"/>
        <Tutorsection img={img} name="Muhammad Farooq" subheading="Muhammad Farooq is our hardworking tutor with 4 Year experience and he is available for you all time. He is Mufti too." whatsapp="+923296565666"/>
        <Tutorsection img={img} name="Muhammad Asif" subheading="Muhammad Asif is our hardworking tutor with 5 Year experience and he is available for you all time. His field is Tafseer." whatsapp="+923296565666"/>
        <Tutorsection img={img2} name="Qaria Ayesha" subheading="Qaria Ayesha is our hardworking tutor with 7 Year experience and she is available for you all time. She is Qaria & Alima." whatsapp="+923296565666"/>
        <Tutorsection img={img2} name="Hafiza Zainab" subheading="Hafiza Zainab is our hardworking tutor with 3 Year experience and she is available for you all time. She is Hafiza." whatsapp="+923296565666"/>

          
        </div>
      </div>
    </>
  )
}

export default Tutors
