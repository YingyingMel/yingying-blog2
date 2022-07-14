import React from 'react'
import Product from './product'

const Main = (props) => {
  const { products, onAdd } = props
  return (
    <div className='main'>
      <h2>Products</h2>
      <div className='products'>
        {products.map((item) => {
          return <Product key={item.id} product={item} onAdd={onAdd}></Product>
        })}
        <div className='filling-empty-space'></div>
        <div className='filling-empty-space'></div>
        <div className='filling-empty-space'></div>
      </div>
    </div>
  )
}

export default Main
