import React from 'react'
import './ProductShowcase.css'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img9 from '../assets/img9.png'

const ProductShowcase = () => {
  return (
    <div className='product-showcase'>
      <div className="product-showcase-header">
        <div className="product-showcase-share">Share your setup with</div>
        <div className="product-showcase-title">#FuniroFurniture</div>
      </div>
      <div className="product-showcase-img">
        <img src={img1} alt="" className='img1' />
        <img src={img2} alt="" className='img2' />
        <img src={img3} alt="" className='img3' />
        <img src={img4} alt="" className='img4' />
        <img src={img5} alt="" className='img5' />
        <img src={img6} alt="" className='img6' />
        <img src={img7} alt="" className='img7' />
        <img src={img8} alt="" className='img8' />
        <img src={img9} alt="" className='img9' />
      </div>
    </div>
  )
}

export default ProductShowcase