import React from 'react'
import backgroud from '../assets/hero-background.png';
import './Hero.css'

const Hero = () => {
  const scrollToProductDisplay = () => {
    const productDisplay = document.getElementById('product-display');
    productDisplay.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='hero'>
      <div className="herobackground">
        <img src={backgroud} alt="" />
      </div>

      <div className="hero-content-background">
        <div className="hero-content">
          <div className="new-arrival">New Arrival</div>
          <div className="new-collection">
            Discover Our New Collection
          </div>
          <div className="hero-extra">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </div>
          <div className="buy-btn" onClick={scrollToProductDisplay}>BUY NOW</div>
        </div>
      </div>
    </div>
  )
}

export default Hero