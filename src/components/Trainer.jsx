import React from 'react'
import Card from '../UI/Card'


const Trainer = ({image, name, job, socials}) => {
  return (
   <Card className="trainer-card">
      <div className="trainer-image">
        <img src={image} alt="" />
      </div>
      <h3>{name}</h3>
      <p>{job}</p>
      <div className="trainer-socials">
        {
            socials.map(({icon, link}, index)=>{
                return <a key={index} href={link}target='_blank'>{icon}</a>
            })
        }
      </div>
   </Card>
  )
}

export default Trainer