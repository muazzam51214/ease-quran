import React from 'react'
import Breadcrumb from './subcomponents/Breadcrumb'

const Faqs = (props) => {
  return (
    <>
      <Breadcrumb pagename="FAQs"/>
      <div className="container-fluid faq">
        <div className="row">
        <p className="sub-heading fee-sub">Al Huda Ease Quran</p>
        <h2 className="heading">FAQs</h2>
      <div className="accordion accordion-flush mt-4" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            How long will it take to learn Tajweed/Arabic?
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample" 
        >
          <div className="accordion-body show">
          Depending on the intensity of the studies (how many classes you take), it will take adults 8 to 12 weeks for a Tajweed course. For Arabic, a course can last anywhere from 6 to 12 months. For children, it depends on their age, aptitude and the support given by parents.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            What is the duration of each class?
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
          You and your tutor can decide how long each session should last. The Virtual Classroom logs the time you spend with your tutor for billing purposes, so there is no restriction on session length.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            I have never taken an online course before; will i be able to cope with this?
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
          Allah makes it easier when we strive to follow His path and learn the Quran. The Classroom sessions are one-on-one and your tutor will teach you at a pace that is comfortable for you inshaAllah.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            Do we have any course meterials?
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
          A digital Quran, tajweed book and other tools like whiteboard and file uploading are present in the Virtual Classroom. Your tutor will upload any materials you need into the classroom and will organise your course materials for you.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFive"
            aria-expanded="false"
            aria-controls="flush-collapseFive"
          >
            How can I start learing on Al Huda Ease Quran Academy?
          </button>
        </h2>
        <div
          id="flush-collapseFive"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
          You need to Register or Contact us to start learning at  Al Huda Ease Quran Academy.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseSix"
            aria-expanded="false"
            aria-controls="flush-collapseSix"
          >
            Do you have female tutors as well as male tutors on Al Huda Ease Quran Academy?
          </button>
        </h2>
        <div
          id="flush-collapseSix"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
          Yes, we have Qariahs from all over the world who teach students.
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </>
  )
}

export default Faqs
