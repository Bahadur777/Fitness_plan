import React from 'react'
import './gallery.css'
import TopHeader from '../../components/TopHeader'
import GalleryImage from '../../assets/gallery1.jpg'
import gallery1 from '../../assets/gallery1.jpg';
import gallery2 from '../../assets/gallery2.jpg';


const Gallery = () => {
  const galleryLength = 15;
  const images = [] ;
  


  //for (let i = 1; i <= galleryLength; i++) {
  //  images.push(eval(`../../assets/gallery${i}`));
  //}

 for(let i = 1; i <= galleryLength; i++){
  images.push((`../../assets/gallery${i}.jpg`))
}
  return (
   <>
       <TopHeader title="Gallery" image={GalleryImage}>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae exercitationem veniam reiciendis quisquam officiis nihil enim maiores. Ipsa, deleniti dignissimos!</p>
     </TopHeader>

     <section>
       <div className="container gallery-container">
        {
          images.map((image, index) =>{
            return <article key={index}>
             <img src={image} alt="" />
            </article>
          })
        }
       </div>
     </section>

   </>
  )
}

export default Gallery 