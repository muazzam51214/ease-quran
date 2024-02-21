import React from 'react';
import aboutimg1 from '../../assets/img/quran-academy-11.jpg';
import aboutimg2 from '../../assets/img/quran-academy-12.jpg';
import aboutimg3 from '../../assets/img/quran-academy-13.jpg';
import { Link } from "react-router-dom";


const Aboutcomponent = () => {
  return (
    <div className='container my-5'>
        <div className="row">
            <div className="col-md-6 col-md-6 order-2 order-md-1">
                <p className='sub-heading'>Al Huda Ease Quran</p>
                <h2 className='heading' id='about-heading'>Introduction</h2>
                <p>Welcome to the Al Huda Ease Quran Academy, a place dedicated to embracing and disseminating the beauty and knowledge of the Quran with a community of searchers and believers on a global scale. I'm excited to introduce myself and tell the history of our academy as the founder and inspiration behind this project.</p>

                <h2 className='heading' id='about-heading'>My Journey</h2>
                <p>My name is Ahmad Sulaiman, and I first encountered the Quran when I was very young. I was exposed to the verses, recitations, and teachings of the Quran from a young age because I grew up in a family wholly committed to the principles of Islam. But it wasn't until I was a teenager that I really started to understand how powerful an influence the Quran could have on a person's life.</p>

                
            </div>
            <div className="col-md-6 my-3 order-1 order-md-2">
              <img src={aboutimg1} alt="Al Huda Ease Quran Academy About" className='w-100'/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 my-3">
              <img src={aboutimg2} alt="Al Huda Ease Quran Academy About" className='w-100'/>
            </div>


            <div className="col-md-6">
                <h2 className='heading mt-2' id='about-heading'>Mission & Vision</h2>
                <p>Our objective at Al Huda Ease Quran Academy is to deliver accessible, interesting, and thorough Quranic instruction to people of all ages and backgrounds. We consider the Quran to be a powerful source of wisdom, and our mission is to enable students to comprehend, relate to, and apply its lessons to their daily lives.</p>

                <h2 className='heading' id='about-heading'>Our Approach </h2>
                <p>We are aware that learning the Quran can be difficult, particularly for people who are unfamiliar with its concepts and language. Because of this, we carefully crafted our courses to accommodate students of different skill levels. We have a course designed specifically for you, whether you are a novice making your first steps in Quranic studies or an established student trying to enhance your comprehension.</p>

                
            </div>
            
        </div>

        <div className="row">
            <div className="col-md-6 col-md-6 order-2 order-md-1">
                <h2 className='heading mt-2' id='about-heading'>Our Team</h2>
                <p>At Al Huda Ease Quran Academy, we take great pride in having a group of knowledgeable, passionate teachers who are passionate about imparting the Quran. They bring years of experience and knowledge to our online classes, making sure that our students get the greatest education possible.</p>

                <h2 className='heading' id='about-heading'>Community & Support</h2>
                <p>The Al Huda Ease Quran Academy community is thriving in addition to its academic achievements. We urge our students to form relationships, communicate their experiences, and advance in their religion together. We provide ongoing assistance to our students, making that they have access to all the tools necessary for success.</p>

                
                <Link to="/contact" className='btnn'>Contact Us</Link>
            </div>
            <div className="col-md-6 my-3 order-1 order-md-2">
              <img src={aboutimg3} alt="Al Huda Ease Quran" className='w-100'/>
            </div>
        </div>
      
    </div>
  )
}

export default Aboutcomponent
