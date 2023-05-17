import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Plains from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import NotFound from './pages/notFound/NotFound'
import Navbar from './components/Navbar'
import Plans from './pages/plans/Plans'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='gallery' element={<Gallery/>}/>
      <Route path='plans' element={<Plans/>}/>
      <Route path='trainers' element={<Trainers/>}/>
      <Route path='notFound' element={<NotFound/>}/>
      
    </Routes>
     
    </BrowserRouter>
  )
}

export default App