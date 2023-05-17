import React from 'react'
import {FaCrown} from 'react-icons/fa'
import SectionHeader  from './SectionHeader'
import Card from '../UI/Card'
import {SiOpenaigym} from 'react-icons/si'
import { Link } from 'react-router-dom'
import {GoArrowSmallRight} from 'react-icons/go'
    
const programs = [
  {
      id: 1,
      icon: <SiOpenaigym/>,
      title: "Program One",
      info: "This is the day that the lord has made. We will rejoice!",
      path: "/programs/111"
  },
  {
      id: 2,
      icon: <SiOpenaigym/>,
      title: "Program Two",
      info: "This is the day that the lord has made. We will rejoice!",
      path: "/programs/222"
  },
  {
      id: 3,
      icon: <SiOpenaigym/>,
      title: "Program Three",
      info: "This is the day that the lord has made. We will rejoice!",
      path: "/programs/333"
  },
  {
      id: 4,
      icon: <SiOpenaigym/>,
      title: "Program Four",
      info: "This is the day that the lord has made. We will rejoice!",
      path: "/programs/444"
  }
]





export const Programs = () => {
  return (
   
     <section className="program">
        <div className="container program-container">
            <div className="program-head">
                <SectionHeader icons={<FaCrown/>} title= "Program"/>
            </div>
            <div className="program-wrapper">
              {
                programs.map(({id,icon, title, info, path})=>{
                  return(
                    <Card className="programs_program" key={id}>
                       <span>{icon}</span>
                       <h4>{title}</h4>
                       <small>{info}</small>
                       <Link to={path} className='btn sm'>Learn more
                       {<GoArrowSmallRight className='goicon'/>}
                       </Link>
                    </Card>
                  )
                })
              }
              
            </div>
        </div>
     </section>
    
  )
}
