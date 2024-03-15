import React from 'react'
import './ShopHeader.css'
import backimg from '../assets/Rectangle 1.png'
import img1 from '../assets/Vector.png'
import {Link} from 'react-router-dom'

const ShopHeader = () => {
  return (
    <div className='shopheader'>
        <img src={backimg} alt="" />
        <div className="shop-header-info">
        <p className='Shop-area'>Shop</p>
        <div className='shop-location'>
          <Link to='/' className="shoplocation-home"><div className="shoplocation-home">Home</div></Link>
          <div className="shoplocation-img"> <img src={img1} alt="" /> </div>
          <div className="shoplocation-shop">Shop</div>
        </div>
        </div>
    </div>
  )
}

export default ShopHeader