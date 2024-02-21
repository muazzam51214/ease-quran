import React from 'react';
import { useEffect } from 'react';
import Homehero from './subcomponents/Homehero';
import img1 from '../assets/img/hero-1.jpg'
import img2 from '../assets/img/hero-2.jpg'
import img3 from '../assets/img/hero-3.jpg'

const Slider = () => {
  useEffect(() => {
    // Find the carousel element by its ID and set data-bs-pause to "false"
    const carousel = document.querySelector('#carouselExampleAutoplaying');
    if (carousel) {
      carousel.setAttribute('data-bs-pause', 'false');
    }
  }, []);
  
  return (
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="4000">
    <Homehero heading="وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ" subHeading="Surely We have made this Quran easy as a reminder. Is there, then, any who will take heed?" btnText="Register Now" btnUrl='/register' img={img1}/>
    </div>
    <div class="carousel-item" data-bs-interval="4000">
    <Homehero heading="أَفَلَا يَتَدَبَّرُونَ ٱلْقُرْءَانَ أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَآ" subHeading="Do they not contemplate the Qur'an, or are there locks upon [their] hearts?" btnText="Register Now" btnUrl='/register' img={img2}/>
    </div>
    <div class="carousel-item" data-bs-interval="4000">
    <Homehero heading="ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ" subHeading="Read in the name of your Lord who created." btnText="Register Now" btnUrl='/register' img={img3}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Slider
