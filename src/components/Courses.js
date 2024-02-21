import React from 'react'
import Breadcrumb from './subcomponents/Breadcrumb'
import CourseSection from './subcomponents/CourseSection'
import Howwork from './subcomponents/Howwork'

const Courses = (props) => {
  return (
    <>
      <Breadcrumb pagename="Our Courses"/>|
      <CourseSection/>
      <Howwork/>
    </>
  )
}

export default Courses
