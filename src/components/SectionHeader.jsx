import React from 'react'

export const SectionHeader = ({icons, title, className}) => {
  return (
    <div className='section-head'>
       <span>{icons}</span>
       <h2>{title}</h2>
    </div>
  )
}
export default SectionHeader
