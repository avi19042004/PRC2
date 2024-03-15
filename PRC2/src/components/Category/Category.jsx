import React from 'react'
import './Category.css'
import img1 from '../assets/image1.png'
import img2 from '../assets/image2.png'
import img3 from '../assets/image3.png'

const Category = () => {
  return (
    <div className='category-main-page'>
        <div className="catagory-heading">
            <div className="category-head-main">Browse The Range</div>
            <div className="category-head-extra">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <div className="category-main">
            <div className="category">
                <img src={img1} alt="" />
                <p>Dining</p>
            </div>
            <div className="category">
            <img src={img2} alt="" />
            <p>Living</p>
            </div>
            <div className="category">
            <img src={img3} alt="" />
            <p>Bedroom</p>
            </div>
        </div>
    </div>
  )
}

export default Category