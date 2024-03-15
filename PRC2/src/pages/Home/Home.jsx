import React from 'react'
import Hero from '../../components/Hero/Hero'
import Category from '../../components/Category/Category'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay'
import ProductShowcase from '../../components/ProductShowcase/ProductShowcase'
import BeautifulRooms from '../../components/BeautifulRooms/BeautifulRooms'

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <ProductDisplay />
      <BeautifulRooms />
      <ProductShowcase />
    </div>
  )
}

export default Home