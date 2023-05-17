import React from 'react'
import {Link} from 'react-router-dom'
import Image from '../assets/main_header.png'

export const Header = () => {
  return (
    <>
      <header className='main-header'>
          <div className="container main-container-header">
            <div className="main-header-left">
               <h4>#100DaysOfWorksOut</h4>
               <h1>Join the fitness World</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laborum nesciunt cumque quam, earum odio dolor quas, ipsa provident saepe voluptatem repellat repellendus vitae modi. Quas libero at ipsam quod?</p>
               <Link className="btn lg">Get Start</Link>
            </div>
            <div className="main-header-right">
               <div className="main-header-circle"></div>
               <div className="main-header-img">
                <img src={Image} alt="" />
               </div>
            </div>
          </div>
      </header>
    </>
  )
}
