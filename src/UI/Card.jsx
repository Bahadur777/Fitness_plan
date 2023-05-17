import React from 'react'

export const Card = ({className, children}) => {
  return (
   <article className={`card ${className}`}>
    {children}
   </article>
  )
}
export default Card
