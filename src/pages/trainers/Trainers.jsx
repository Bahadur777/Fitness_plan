import React from 'react'
import './trainers.css'
import TopHeader from '../../components/TopHeader'
import TrainerImage from '../../assets/trainer1.jpg'
import Card from '../../UI/Card'
import Trainer from '../../components/Trainer'
import {AiFillFacebook} from 'react-icons/ai'
import{BsInstagram} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import Trainer1 from '../../assets/trainer1.jpg'
import Trainer2 from '../../assets/trainer2.jpg'
import Trainer3 from '../../assets/trainer3.jpg'
import Trainer4 from '../../assets/trainer4.jpg'
import Trainer5 from '../../assets/trainer5.jpg'
import Trainer6 from '../../assets/trainer6.jpg'



export const trainer = [
  {
      id: 1,
      image: Trainer1,
      name: 'John Doe',
      job: 'Aerobic Trainer',
      socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
  },
  {
      id: 2,
      image: Trainer2,
      name: 'Daniel vinyo',
      job: 'Speed Trainer',
      socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
  },
  {
      id: 3,
      image: Trainer3,
      name: 'Edem Quist',
      job: 'Flexibility Trainer',
      socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
  },
  {
      id: 4,
      image: Trainer4,
      name: 'Shatta Wale',
      job: 'Body Composition Trainer',
      socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
  },
  {
      id: 5,
      image: Trainer5,
      name: 'Diana Ayi',
      job: 'Circuit Trainer',
      socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
  },
  {
      id: 6,
      image: Trainer6,
      name: 'Wayne Carter',
      job: 'Physical Intelligence Trainer',
      socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
  }
]

const Trainers = () => {
  return (
    <>
     <TopHeader image={TrainerImage} title="Trainers">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum distinctio enim eum earum assumenda molestias eaque, dolore asperiores sit repudiandae laborum sapiente, dolorem modi alias facere illum. Voluptates, ut nisi!
     </TopHeader>

     <section className="trainer">
      <div className="container trainer-container">
        {
          trainer.map(({id, image,name, job, socials})=>{
            return <Trainer key={id} image={image} name={name} job={job} socials={socials = 
            [
              {icon:<AiFillFacebook/>, link: socials[0]},
              {icon:<BsInstagram/>, link: socials[1]},
              {icon:<AiFillLinkedin/>, link: socials[2]},
              {icon:<AiFillTwitterSquare/>, link: socials[3]},
            ]
            }>
           
  
            </Trainer>
          })
        }
      </div>
     </section>
    </>
  )
}

export default Trainers