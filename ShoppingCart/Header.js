import React, { useContext } from 'react'
import { Outlet ,NavLink,Link } from 'react-router-dom'
import ContextApi from './ContextApi'

function Header() {

  const {cart} = useContext(ContextApi)
       
        return (
            <div className='home'>
          <nav >
            <h1><Link className='nav_item' to="/">Amazon</Link></h1>
            <ul>
              <li>
                <NavLink className='nav_item' to="/">Home</NavLink>
                <NavLink className='nav_item' to="/about">About</NavLink>
                <NavLink className='nav_item' to="/contact">Contact</NavLink>
                <NavLink className='nav_item' to="/cart">
                  Cart<span>{cart?.length}</span>
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className='products'>

          <Outlet/>
          </div>

          </div>
        )
      }
      


export default Header