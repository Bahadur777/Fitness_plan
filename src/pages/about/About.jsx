import React from 'react'
import './about.css'
import TopHeader from '../../components/TopHeader'
import HeaderImage from '../../assets/header_bg_1.jpg'
import StoryImage from '../../assets/trainer1.jpg'
import VisionImage from '../../assets/trainer2.jpg'
import MisionImage from '../../assets/trainer3.jpg'


const About = () => {
  return (
    <>
    <TopHeader title="About us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, accusantium. Ad officiis quibusdam voluptatem. Voluptatum beatae quasi explicabo asperiores eos aliquam nemo quibusdam quaerat dolorem!
    </TopHeader>
    <div className="about-story">
      <div className="container about-story-container">
        <div className="about-section-img">
          <img src={StoryImage} alt="" />
        </div>
        <div className="about-section-content">
          <h1>Our stroy</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus recusandae tempore perferendis deserunt commodi provident vel, itaque maxime beatae cumque praesentium quae eveniet in fuga a sint perspiciatis iste eligendi.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt id, ut delectus explicabo, laudantium magnam quis qui unde quo, illum asperiores sed harum. Dolore dolor quas id atque et, aspernatur ullam. Numquam recusandae, veritatis culpa suscipit dolore libero quidem in!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci itaque ad ducimus a, nam similique sint nihil fugiat quos mollitia.</p>
        </div>
      </div>
    </div>

    <div className="about-story-vision">
      <div className="container about-vision-container">
      <div className="about-vision-section-img">
          <img src={VisionImage} alt="" />
        </div>
        <div className="about-vision-section-content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus recusandae tempore perferendis deserunt commodi provident vel, itaque maxime beatae cumque praesentium quae eveniet in fuga a sint perspiciatis iste eligendi.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt id, ut delectus explicabo, laudantium magnam quis qui unde quo, illum asperiores sed harum. Dolore dolor quas id atque et, aspernatur ullam. Numquam recusandae, veritatis culpa suscipit dolore libero quidem in!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci itaque ad ducimus a, nam similique sint nihil fugiat quos mollitia.</p>
        </div>
       
      </div>
    </div>
    <div className="about-story-vision">
      <div className="container about-mision-container">
      <div className="about-section-img">
          <img src={MisionImage} alt="" />
        </div>
        <div className="about-section-content footer-p">
          <h1>Our Mision</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus recusandae tempore perferendis deserunt commodi provident vel, itaque maxime beatae cumque praesentium quae eveniet in fuga a sint perspiciatis iste eligendi.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt id, ut delectus explicabo, laudantium magnam quis qui unde quo, illum asperiores sed harum. Dolore dolor quas id atque et, aspernatur ullam. Numquam recusandae, veritatis culpa suscipit dolore libero quidem in!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci itaque ad ducimus a, nam similique sint nihil fugiat quos mollitia.</p>
        </div>
       
      </div>
    </div>

    </>
  )
}

export default About
