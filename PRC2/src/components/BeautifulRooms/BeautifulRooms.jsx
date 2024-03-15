import React from 'react'
import './BeautifulRooms.css'
import img1 from '../assets/beautifulrooms-img1.png'
import img2 from '../assets/beautifulrooms-img2.png'
import img3 from '../assets/beautifulrooms-img3.png'
import arrow from '../assets/arrow.png'
import {Link} from 'react-router-dom'

const BeautifulRooms = () => {
    return (
        <div className='beautifulrooms'>
            <div className="beautifulrooms-left">
                <div className="beautifulrooms-left-content">
                    <p className='beautifulrooms-left-content-header'>50+ Beautiful rooms inspiration</p>
                    <p className="beautifulrooms-left-content-main">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                </div>
                <Link to='/shop' className='beautifulrooms-left-ExplorMore'><div className="beautifulrooms-left-ExplorMore"><p>Explore More</p></div></Link>
            </div>
            <div className="beautifulrooms-right">
                <div className="beautifulrooms-img1">
                    <img src={img1} alt="" />
                    <div className="beautifulrooms-img1-text">
                        <div className="beautifulrooms-img1-text-main">
                            <div className="badroom">
                                <p className='zero1'>01</p>
                                <span></span>
                                <p className='zero3'>Bed Room</p>
                            </div>
                        </div>

                        <div className="beautifulrooms-img1-inner"><p>Inner Peace</p></div>
                    </div>

                    <div className="beautifulrooms-img1-arrow">
                        <img src={arrow} alt="" />
                    </div>
                </div>
                <img src={img2} alt="" className="beautifulrooms-img2"></img>
                <img src={img3} alt="" className="beautifulrooms-img3"></img>
                <div className="circle">
                    <div className="cir">
                        <div className="cir-1"></div>
                    </div>
                    <div className="cir-2"></div>
                    <div className="cir-3"></div>
                    <div className="cir-4"></div>
                </div>
            </div>
        </div>
    )
}

export default BeautifulRooms