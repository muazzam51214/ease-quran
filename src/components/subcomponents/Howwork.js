import React from 'react'
import Worksingle from './Worksingle'

const Infobox = () => {
  return (
    <div className="container my-5 whyus">
         <p className='sub-heading why-sub'>Al Huda Ease Quran</p>
         <h2 className='heading'>How We Work</h2>
        <div className="row gx-5">
            {/* <p className='sub-heading' style={{textAlign:'center'}}>Al Huda Ease Quran</p>
            <h2 className="heading">Why Choose Us</h2> */}
            <Worksingle icon="fa fa-mouse" heading="Apply Online" subheading="First step to get start with Al Huda Ease Quran Academy is apply online on register page."/>

            <Worksingle icon="fa fa-globe" heading="Online Class" subheading=" After applying online the team of Al Huda Ease Quran Academy contact with you and your class started."/>

            <Worksingle icon="fa fa-certificate" heading="Certification" subheading="After completing your course we will get official certificate from Al Huda Ease Quran Academy."/>

            
            
        </div>
    </div> 
  )
}

export default Infobox
