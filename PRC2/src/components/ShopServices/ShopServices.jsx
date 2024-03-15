import React from 'react'
import './ShopServices.css'
import img1 from '../assets/trophy.png'
import img2 from '../assets/Warranty.png'
import img3 from '../assets/shipping.png'
import img4 from '../assets/customer-support.png'

const ShopServices = () => {
  return (
    <div className='shopservice'>
      <div className="qality">
        <img src={img1} alt="" />
        <div className="service-content">
          <p className='header'>High Quality</p>
          <p className='content'>crafted from top materials</p>
        </div>
      </div>
      <div className="warranty">
        <img src={img2} alt="" />
        <div className="service-content">
          <p className='header'>Warranty Protection</p>
          <p className='content'>Over 2 years</p>
        </div>
      </div>
      <div className="shipping">
        <img src={img3} alt="" />
        <div className="service-content">
          <p className='header'>Free Shipping</p>
          <p className='content'>Order over 150 $</p>
        </div>
      </div>
      <div className="support">
        <img src={img4} alt="" />
        <div className="service-content">
          <p className='header'>24 / 7 Support</p>
          <p className='content'>Dedicated support</p>
        </div>
      </div>
    </div>
  )
}

export default ShopServices