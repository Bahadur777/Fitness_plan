import React from 'react'
import './contact.css'
import ContactImg from '../../assets/header_bg_2.jpg'
import TopHeader from '../../components/TopHeader'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'

const Contact = () => {
  return (
    <>
     <TopHeader title="Get in Touch" image={ContactImg}>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae exercitationem veniam reiciendis quisquam officiis nihil enim maiores. Ipsa, deleniti dignissimos!</p>
     </TopHeader>

     
      <div className="contact">
        <div className="container contact-container">
          <div className="contact-wrapper">
            <a href="mailto:bahadurmia7@gmail.com" target='_blank'><AiOutlineMail/></a>
            <a href="" target='_blank'><AiOutlineWhatsApp/></a>
            <a href=""target='_blank'><BsMessenger/></a>
          </div>
        </div>
      </div>

  
    </>



  )
}

export default Contact