import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './Shopping.css'

function ShoppingCart() {
  let [product, setProduct] = useState([])
  let [cart, setCart] = useState((sessionStorage.getItem('cartItem') === null) ? [] : JSON.parse(sessionStorage.getItem('cartItem')))

  useEffect(() => {
    async function fetch() {
      const item = await axios.get('https://dummyjson.com/products')
      setProduct(item.data.products)
    }
    fetch()
  }, [])

  useEffect(() => {
    sessionStorage.setItem('cartItem', JSON.stringify(cart))
  }, [cart])

  function addToCart(e, id) {
    e.preventDefault()
    setCart([...cart, id])
  }
// sessionStorage.clear()


  return (
    <div>
      <header>
        <h1>Shopping Cart</h1>
        <a href='#'>Cart<sup>{cart.length}</sup></a>

      </header>
      <div className='shopping'>
        {
          product.map((item, index) => {
            return (
              <div className='pro' key={index}>
                <img src={item.thumbnail} ></img>
                <a href='#' onClick={(e) => addToCart(e, index)}>Add To Cart</a>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ShoppingCart