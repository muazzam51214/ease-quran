import React from 'react'
import Breadcrumb from './subcomponents/Breadcrumb'
import Planbox from './subcomponents/Planbox'

const Fee = (props) => {
  return (
    <>
      <Breadcrumb pagename="Fee & Plans"/>
      <div className="container-fluid plan">
        <div className="row">
        <p className="sub-heading fee-sub">Ease Quran Academy</p>
          <h2 className="heading">Price & Plans</h2>
        <Planbox planname="Basic Qaida" price="$30 / Month" feature1="5 Days A Week" feature2="30 Minutes" feature3="Screen Sharing" feature4="Male/Female"/>
        <Planbox planname="Quran With Nazira" price="$38 / Month" feature1="5 Days A Week" feature2="30 Minutes" feature3="Screen Sharing" feature4="Male/Female"/>
        <Planbox planname="Quran With Tajweed" price="$40 / Month" oldprice="$50" feature1="5 Days A Week" feature2="30 Minutes" feature3="Screen Sharing" feature4="Male/Female"/>
        <Planbox planname="Hifz - E - Quran" price="$65 / Month" feature1="5 Days A Week" feature2="30 Minutes" feature3="Screen Sharing" feature4="Male/Female"/>
        <Planbox planname="Namaz, Kalma, Dua's" price="$20 / Month" feature1="5 Days A Week" feature2="30 Minutes" feature3="Screen Sharing" feature4="Male/Female"/>
        <Planbox planname="Quran Translation" price="$120 / Month"  oldprice="$150"  feature1="5 Days A Week" feature2="30 Minutes" feature3="Screen Sharing" feature4="Male/Female"/>

        </div>
      </div>
    </>
  )
}

export default Fee
