import React from 'react'
import Image from '../assets/values.jpg'
import SectionHeader from './SectionHeader'
import {GiCutDiamond} from 'react-icons/gi'
import {SiOpenaigym} from 'react-icons/si'

import Card from '../UI/Card'





export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Value One",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Value Two",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Value Three",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Value Four",
        desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum."
    }
]

const Values = () => {
  return (
    <section className="values">
        <div className="container values-container">
            <div className="values-left">
                <div className="value-image">
                  <img src={Image} alt="" />
                </div>
            </div>
            <div className="values-right">
               <SectionHeader icons={<GiCutDiamond/>} title="Values"/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, officiis!</p>

              <div className="right-value-warper">
                {
                    values.map(({id,icon,title, desc})=>{
                        return <Card key={id} className="values-card">
                              <span>{icon}</span>
                              <h4> {title} </h4>
                              <small>{desc}</small>
                        </Card>
        
                    })
                }
              </div>
            </div>
        </div>
    </section>
  )
}

export default Values