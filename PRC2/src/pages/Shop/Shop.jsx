import React from 'react'
import ProductPage from '../../components/ProductPage/ProductPage'
import ShopHeader from '../../components/ShopHeader/ShopHeader'
import ShopServices from '../../components/ShopServices/ShopServices'

const Shop = () => {
  return (
    <div className='shop'>
      <ShopHeader />
      <ProductPage />
      <ShopServices />
    </div>
  )
}

export default Shop