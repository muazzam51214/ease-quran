import React from 'react';
import imgg from '../../assets/img/signup.webp'

const Registerform = (props) => {
  return (
    <>
      
      <div className="col-lg-6">
        <form action="" onSubmit={props.submitFunction}>
            <input type="text" name="name" id="name" placeholder='Enter Your Name' required/>
            <input type="email" name="eamil" id="eamil" placeholder='Enter Your Eamil' required/>
            <input type="tel" name="phone" id="phone" placeholder='Enter Your Phone' required/>
            <select name="course" id="course">
                <option disabled value="Select Your Course">Select Your Course</option>
                <option value="Basic Qaida">Basic Qaida</option>
                <option value="Quran With Nazira">Quran With Nazira</option>
                <option value="Quran With Tajweed">Quran With Tajweed</option>
                <option value="Hifz - E - Quran">Hifz - E - Quran</option>
                <option value="Namaz, Kalma, Dua's">Namaz, Kalma, Dua's</option>
                <option value="Quran Translation">Quran Translation</option>
            </select>
            <input type="text" name="country" id="country" placeholder='Enter Your Country' />

            
              <input type="submit" className='btnn submit' value="Submit" />
        </form>
    </div>
    <div className="col-lg-6 d-none d-lg-block">
        <img src={imgg} className='w-100' alt="Register For Online Quran Academy" />
      </div>
    
    </>
  )
}

export default Registerform
