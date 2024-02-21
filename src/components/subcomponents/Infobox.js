import React from 'react'
import Singlebox from './Singlebox'

const Infobox = () => {
  return (
    <div className="container my-5 whyus">
         <p className='sub-heading why-sub'>Al Huda Ease Quran</p>
         <h2 className='heading'>Why Choose Us</h2>
        <div className="row gx-5">
            {/* <p className='sub-heading' style={{textAlign:'center'}}>Al Quran E-Learning</p>
            <h2 className="heading">Why Choose Us</h2> */}
            <Singlebox nmbr="1" heading="Classes" subheading="We provides you the facility of choice either to take one to one classes or join in a grouped class."/>

            <Singlebox nmbr="2" heading="Male / Female Tutors" subheading=" We have a group of trained male / female teachers who are available for all students of any age."/>

            <Singlebox nmbr="3" heading="Multilingual Teachers" subheading="Our Quran tutors have proficiency in different languages such as English, Arabic, Urdu etc."/>

            <Singlebox nmbr="4" heading="Device Convenience" subheading="We make for you to take Quran learning lessons on Computer, tablet or mobile."/>

            <Singlebox nmbr="5" heading="Flexible Timings" subheading="We provide flexiable timing to Learn Quran, A student can take class at any hour."/>

            <Singlebox nmbr="6" heading="Online Support" subheading="Our teachers also provides you knowledge based information of the Islamic teachings."/>
            
        </div>
    </div> 
  )
}

export default Infobox
