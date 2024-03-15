import React from 'react'
import data from '../assets/data'
import './ProductPage.css'
import filterimg from '../assets/filter.png'
import img2 from '../assets/ci_grid-big-round.png'
import img3 from '../assets/list.png'
import share from '../assets/share.png'
import comper from '../assets/comper.png'
import like from '../assets/like.png'

const ProductPage = () => {
  const limitedData = data.slice(0, 16)

  return (
    <>
      <div className="filter">
        <div className="filter-left">
          <div className="filter-btn">
            <img src={filterimg} alt="" />
            <p>Filter</p>
          </div>
          <div className="ci-grid-big-round">
            <img src={img2} alt="" />
          </div>
          <div className="list-btn">
            <img src={img3} alt="" />
          </div>
          <div className="showing">
            <p>Showing 1–16 of 32 results</p>
          </div>
        </div>
        <div className="filter-right">
          <div className="show-right">
            <p>Show</p>
            <div className="show-number">16</div>
          </div>
          <div className="short-by">
            <p>Short by</p>
            <div>Default</div>
          </div>
        </div>
      </div>
      <div className='product-page'>
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
        <div className="next-page-btn">
          <div className='page selected'>1</div>
          <div className='page'>2</div>
          <div className='page'>3</div>
          <div className='page next'>Next</div>
        </div>
    </>
  )
}

export default ProductPage