import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import './Shopping.css'
// import ContextApi from './ContextApi'
import Header from './Header'

function ShoppingCart() {

  let [product, setProduct] = useState([])
  let [cart, setCart] = useState((sessionStorage.getItem('cartItem') === null) ?
   [] 
   : JSON.parse(sessionStorage.getItem('cartItem')))

  // const cartContext=React.useContext('cart')

  useEffect(() => {
    async function fetch() { 
      const item = await axios.get('https://fakestoreapi.com/products/')
      setProduct(item.data)
      console.log(item)
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
 
      <div className='shopping'>
        {
          product.map((item, index) => {
            return (
              <div className='pro' key={index}>
                <img src={item.image} ></img>
                <a onClick={(e) => addToCart(e, index)}>Add To Cart</a>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ShoppingCart