import React from 'react'
import './home.css'
import { Header } from '../../components/Header'
import { Programs } from '../../components/Programs'
import Values from '../../components/Values'
import FAGs from '../../components/FAGs'
import Testimonials from '../../components/Testimonials'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
    <Header/>
    <Programs/>
    <Values/>
    <FAGs/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default Home
