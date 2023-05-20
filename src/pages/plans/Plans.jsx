import React from 'react'
import './plans.css'
import TopHeader from '../../components/TopHeader'
import planImage from '../../assets/header_bg_4.jpg'
import Card from '../../UI/Card'


export const plans = [
  {
      id: 1,
      name: 'Silver Package',
      desc: 'This package is perfect for beginners who need constant help',
      price: 29.99,
      features: [
          {feature: 'First Feature', available: true},
          {feature: 'Second Feature', available: true},
          {feature: 'Third Feature', available: true},
          {feature: 'Fourth Feature', available: true},
          {feature: 'Fifth Feature', available: true},
          {feature: 'Fifth Feature Plus', available: false},
          {feature: 'Sixth Feature', available: false},
          {feature: 'Seventh Feature', available: false},
          {feature: 'Seventh Feature Plus', available: false},
          {feature: 'Eighth Feature', available: false},
          {feature: 'Ninth Feature', available: false},
          {feature: 'Tenth Feature', available: false},
          {feature: 'Eleventh Feature', available: false}
      ]
  },
  {
      id: 2,
      name: 'Gold Package',
      desc: 'This is the perfect package for beginners who know what their doing',
      price: 49.99,
      features: [
          {feature: 'First Feature', available: true},
          {feature: 'Second Feature', available: true},
          {feature: 'Third Feature', available: true},
          {feature: 'Fourth Feature', available: true},
          {feature: 'Fifth Feature', available: true},
          {feature: 'Fifth Feature Plus', available: true},
          {feature: 'Sixth Feature', available: true},
          {feature: 'Seventh Feature', available: true},
          {feature: 'Seventh Feature Plus', available: true},
          {feature: 'Eighth Feature', available: false},
          {feature: 'Ninth Feature', available: false},
          {feature: 'Tenth Feature', available: false},
          {feature: 'Eleventh Feature', available: false}
      ]
  },
  {
      id: 3,
      name: 'Platinum Package',
      desc: 'This package is perfect for busy people who need home service',
      price: 89.99,
      features: [
          {feature: 'First Feature', available: true},
          {feature: 'Second Feature', available: true},
          {feature: 'Third Feature', available: true},
          {feature: 'Fourth Feature', available: true},
          {feature: 'Fifth Feature', available: true},
          {feature: 'Fifth Feature Plus', available: true},
          {feature: 'Sixth Feature', available: true},
          {feature: 'Seventh Feature', available: true},
          {feature: 'Seventh Feature Plus', available: true},
          {feature: 'Eighth Feature', available: true},
          {feature: 'Ninth Feature', available: true},
          {feature: 'Tenth Feature', available: true},
          {feature: 'Eleventh Feature', available: true}
      ]
  }
]


const Plans = () => {
  return (
    <>
    <TopHeader image={planImage} title="Plans">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum distinctio, architecto ipsam voluptatum et voluptatibus ea autem quo molestiae! Nesciunt.
    </TopHeader>


     <section className="plan">
      <div className="container plan-container">
        {
          plans.map(({id, name, desc, price,features})=>{
             return <Card key={id} className="plan-card">
               <h2>{name}</h2>
               <small>{desc}</small>
               <h1>{price} /mo</h1>
               <h4>
                {
                  features.map(({feature, available}, index)=>{
                    return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                  })
                }
               </h4>
               <button className='btn lg'>Chose plan</button>
             </Card>
          })
        }
      </div>
     </section>
    
    </>
      
  )
}

export default Plans