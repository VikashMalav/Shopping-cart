import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import About from './About'
import Contact from './Contact'
import Cart from './Cart'
import ShoppingCart from "./ShoppingCart"
import ContextApi from './ContextApi'
import { useContext } from 'react'

function HomeLayout() {
        const {cart} = useContext(ContextApi)
        return (
            <div>
                    <ContextApi.Provider value={{cart}}>

                <BrowserRouter>

                    <Routes>
                        <Route path='/' element={<Header />}>
                            <Route index element={<ShoppingCart/>}/>
                            <Route path='/about' element={<About />}></Route>
                            <Route path='/contact' element={<Contact />}></Route>
                            <Route path='/cart' element={<Cart />}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
                </ContextApi.Provider>

            </div>

        )
    }

export default HomeLayout