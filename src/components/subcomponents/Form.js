import React from 'react'

const Form = (props) => {
  return (
    <div className="row form">
        <p className="sub-heading fee-sub">Al Huda Ease Quran</p>
        <h2 className="heading contact-heading">Get In Touch</h2>
        <div className="col-lg-6">
            <form action="" onSubmit={props.submitFunction}>
              <input type="text" name="name" id="name" placeholder='Enter Your Name' required/>
              <input type="email" name="eamil" id="eamil" placeholder='Enter Your Eamil' required/>
              <input type="tel" name="phone" id="phone" placeholder='Enter Your Phone' required/>
              <input type="text" name="subject" id="subject" placeholder='Enter Subject' />
              <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter Your Message'></textarea>
              <input type="submit" className='btnn submit' value="Submit" />
            </form>
        </div>
        <div className="col-lg-6 d-none d-lg-block">
            <img src={props.img} className='w-100' alt="" />
        </div>
    </div>
  )
}

export default Form
