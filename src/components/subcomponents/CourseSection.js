import React from 'react';
import image1 from '../../assets/img/courses/nazra-quran-course.png';
import image2 from '../../assets/img/courses/tajweed-quran-course.png';
import image3 from '../../assets/img/courses/hifz-e-quran-course.png';
import image4 from '../../assets/img/courses/dua-quran-course.png';
import image5 from '../../assets/img/courses/noorani-qaida-course.png';
import image6 from '../../assets/img/courses/translation-quran-course.png';
import Coursebox from './Coursebox';

const CourseSection = () => {
  return (
    <div className="container-fluid my-5 ccccc">
    <p className='sub-heading why-sub'>Al Huda Ease Quran</p>
    <h2 className='heading'>Our Courses</h2>
   <div className="row gx-5">
       {/* <p className='sub-heading'>Al Huda Ease Quran</p>
       <h2 className="heading">Why Choose Us</h2> */}
       <Coursebox img={image5} heading="Basic Qaida" alt="Basic Qaida COurse" subheading="We offers a structured curriculum that covers essential Arabic phonetics, pronunciation rules, and the fundamental building blocks of reading the Quran. We provide engaging lessons, interactive exercises, and skilled instructor to ensure quality."/>
       <Coursebox img={image1} heading="Quran With Nazira" alt="Quran With Nazira Course" subheading="We offers a transformative online learning experience, guiding students towards a profound understanding of the Quran. Our expertly designed curriculum and dedicated instructors ensure a comprehensive Nazira education, helping learners"/>
       <Coursebox img={image2} heading="Quran With Tajweed" alt="Quran With Tajweed Course" subheading="Tajweed of the Holy Qur'an is the knowledge and application of the rules of recitation so the reading of the Qur'an is as the Prophet Mohammed peace and blesings be upon him, recited. We teach tajweed and focuses on the problems in reciting"/>
       <Coursebox img={image3} heading="Hifz - E - Quran" alt="Quran Memorization Course" subheading="This course is designed for those who want to memorize the Holy Quran online; our expert tutors will guide the learners step by step giving specific lessons every day as homework. The way would be just like physical classes."/>
       <Coursebox img={image4} heading="Namaz, Kalma, Dua's" alt="Namaz, Kalma, Dua's" subheading="We offer comprehensive guidance in essential aspects of Islamic practice, including Namaz (prayer), Kalma, and Dua's (supplications). Our dedicated instructors provide in-depth teachings on the proper techniques and meanings."/>
       <Coursebox img={image6} heading="Quran Translation" alt="Quran Translation Course" subheading="We provides a deep and insightful exploration of the meanings and messages conveyed within the Quranic verses. Through our online platform, students have the opportunity to study the translated Quranic text."/>
       
       

       
       
   </div>
</div> 
  )
}

export default CourseSection
