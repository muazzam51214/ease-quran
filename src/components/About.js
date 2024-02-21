import React from 'react'
import Breadcrumb from './subcomponents/Breadcrumb'
import Aboutcomponent from './subcomponents/Aboutcomponent'
import Howwork from './subcomponents/Howwork'
import Infobox from './subcomponents/Infobox'

const About = () => {
  return (
    <>
      <Breadcrumb pagename="About Us"/>
      <Aboutcomponent/>
      <Howwork/>
      <Infobox/>
    </>
  )
}

export default About
