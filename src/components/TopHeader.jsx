import React from 'react'

const TopHeader = ({title, image, children}) => {
  return (
    <header className='Top_header'>
        <div className="top-header-container">
            <div className="header-container-bg">
                <img src={image} alt="" />
            </div>
            <div className="container header-content">
                <h2>{title}</h2>
                <p>{children}</p>
            </div>

        </div>
    </header>
  )
}

export default TopHeader