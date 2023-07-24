import { Link, NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import './navBar.css'
import Logo from '../assets/logo.png'
import {GoThreeBars} from 'react-icons/go'
import {AiOutlineClose} from 'react-icons/ai'

const links = [
  {
    id:1,
      name: "Home",
      path: '/Fitness_plan'
  },
  {
    id:2,
      name: "About",
      path: '/about'
  },
  { 
    id:3,
      name: "Gallery",
      path: '/gallery'
  },
  {
    id:4,
      name: "Plans",
      path: '/plans'
  },
  {
    id:5,
      name: "Trainers",
      path: '/trainers'
  },
  {
    id:6,
      name: "Contact",
      path: '/contact'
  }
]

const Navbar = () => {
  const [isNavshowing, setIsNavShowing] = useState(false);
  return (
    <nav>
        <div className="container nav-container">
          <Link>
          <img src={Logo} alt="" className='logo' />
          </Link>
          <ul className={`nav_links ${isNavshowing ? 'show_nav' : 'hide_nav'}`}>
            {
              links.map(({ id,name, path}, index) =>{
               return(
                <li >
                  <NavLink to={path} className={({isActive}) =>isActive ? 'active-nav' : ''} onClick={()=> setIsNavShowing(prev => !prev)}>{name}</NavLink>
                </li>
               )
              })
            }
          </ul>
          <button className='nav_toggle-btn' onClick={()=> setIsNavShowing(prev => !prev)}>
          {
            isNavshowing ? <AiOutlineClose/> : <GoThreeBars/>
          }
          </button>
        </div>
    </nav>
  )
}

export default Navbar