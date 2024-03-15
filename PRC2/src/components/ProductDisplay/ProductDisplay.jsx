import React from 'react'
import data from '../assets/data'
import './ProductDisplay.css'
import share from '../assets/share.png'
import comper from '../assets/comper.png'
import like from '../assets/like.png'
import {Link} from 'react-router-dom'

const ProductDisplay = () => {

    const limitedData = data.slice(0, 8)

    return (
        <div className='product-display' id="product-display">
            <div className="our-product">Our Products</div>
            <div className="our-product-display">
                {limitedData.map((product) => (
                    <>
                        <div className="product-card" key={product.id}>
                            <img src={product.image} alt={product.name} className='product-img' />
                            <div className="product-details">
                                <h3 className='product-name'>{product.name}</h3>
                                <p className='product-description'>{product.description}</p>
                                <div className="product-price">
                                    <span className='new-price'>Rp{product.new_Price}</span>
                                    {product.old_price ? <span className='old-price'>Rp{product.old_price}</span> : null}
                                </div>
                            </div>
                            {product.discount ? <div className={`discount ${product.discount === 'new' ? 'green-bg' : ''}`}><p>{product.discount}</p></div> : null}
                            <div className="hover">
                                <div className="hover-text">
                                    <div className="add-to-cart">
                                        <p>Add To Cart</p>
                                    </div>
                                    <div className="share-like-comper">
                                        <div className="share">
                                            <img src={share} alt="" />
                                            <p>Share</p>
                                        </div>
                                        <div className="compare">
                                            <img src={comper} alt="" />
                                            <p>Compare</p>
                                        </div>
                                        <div className="like">
                                            <img src={like} alt="" />
                                            <p>Like</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <Link to="/shop" className='shop-link2'><div className="showmore-btn">Show More</div></Link>
        </div>
    )
}

export default ProductDisplay