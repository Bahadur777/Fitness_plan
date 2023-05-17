import React from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div className="container footer-container">
                <article>
                  <Link to="/" className='logo'>
                    <img src={Logo} alt="" />
                  </Link>
                  <p className='footer-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi ullam ipsa quod cupiditate dolorem possimus.</p>
                  <div className="footer-social-link">
                    <a href=""><AiFillLinkedin/></a>
                    <a href=""><AiFillFacebook/></a>
                    <a href=""><AiFillInstagram/></a>
                    <a href=""><AiFillTwitterSquare/></a>
                  </div>
                </article>
                <article>
                  <h4>permalinks</h4>
                  <Link to="/about">About</Link>
                  <Link to="/gallery">Gallery</Link>
                  <Link to="/plans">plans</Link>
                  <Link to="/trainers">Trainers</Link>
                  <Link to="/contact">contact</Link>
                </article>
                <article>
                  <h4>permalinks</h4>
                  <Link to="/about">About</Link>
                  <Link to="/gallery">Gallery</Link>
                  <Link to="/plans">plans</Link>
                  <Link to="/trainers">Trainers</Link>
                  <Link to="/contact">contact</Link>
                </article>
                <article>
                  <h4>permalinks</h4>
                  <Link to="/about">About</Link>
                  <Link to="/gallery">Gallery</Link>
                  <Link to="/plans">plans</Link>
                  <Link to="/trainers">Trainers</Link>
                  <Link to="/contact">contact</Link>
                </article>
        </div>
        <div className="footer-copyright">&copy; Bahadur mia shihab</div>
    </footer>
  )
}

export default Footer