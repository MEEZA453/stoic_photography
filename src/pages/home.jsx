import React from 'react'
import ImageAlgo from '../components/imageAlgo.jsx'
import image1 from '../assets/images/image1.webp'
import image2 from '../assets/images/image2.webp'
import image3 from '../assets/images/image3.webp'
import image4 from '../assets/images/image4.webp'
import image5 from '../assets/images/image5.jpeg'
import image6 from '../assets/images/image6.webp'
import image7 from '../assets/images/image7.webp'
import image8 from '../assets/images/image8.webp'
import {useState , useEffect} from 'react'
import Navber from '../components/navber.jsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '../components/hero.jsx'
gsap.registerPlugin(ScrollTrigger)
function Home() {
  const [images , setImages] = useState([image1 , image3 , image2 , image4 , image5 , image6 , image7])
const [imageInfo , setImageInfo] = useState([
{name : 'Flawless.' ,
    lensUsed : '24-70mm f/2.8' ,
        focalLength : '50mm' ,
        aperture : 'f/1.8' ,
        sutterSpeed : '1/250s' ,
        iso : 'ISO 100' ,
        dateTaken : 'March 14, 2025' ,
        captures : [image2 , image2 , image3] , 
        nextImage : image4 , 
        format : 'JPG' , } , 
        {name : 'Deleted sence' ,
            lensUsed : '24-70mm f/2.8' ,
                focalLength : '50mm' ,
                aperture : 'f/1.8' ,
                sutterSpeed : '1/250s' ,
                iso : 'ISO 100' ,
                dateTaken : 'March 14, 2025' ,
                captures : [ image6 , image7 ] , 
                nextImage : image5 , 
                format : 'JPG' , },
                {name : 'Flawless.' ,
                  lensUsed : '24-70mm f/2.8' ,
                      focalLength : '50mm' ,
                      aperture : 'f/1.8' ,
                      sutterSpeed : '1/250s' ,
                      iso : 'ISO 100' ,
                      dateTaken : 'March 14, 2025' ,
                      captures : [image2 , image2 , image3] , 
                      nextImage : image4 , 
                      format : 'JPG' , } , 
                      {name : 'Deleted sence' ,
                          lensUsed : '24-70mm f/2.8' ,
                              focalLength : '50mm' ,
                              aperture : 'f/1.8' ,
                              sutterSpeed : '1/250s' ,
                              iso : 'ISO 100' ,
                              dateTaken : 'March 14, 2025' ,
                              captures : [ image6 , image7 ] , 
                              nextImage : image5 , 
                              format : 'JPG' , },{name : 'Flawless.' ,
    lensUsed : '24-70mm f/2.8' ,
        focalLength : '50mm' ,
        aperture : 'f/1.8' ,
        sutterSpeed : '1/250s' ,
        iso : 'ISO 100' ,
        dateTaken : 'March 14, 2025' ,
        captures : [image2 , image2 , image3] , 
        nextImage : image4 , 
        format : 'JPG' , } , 
        {name : 'Deleted sence' ,
            lensUsed : '24-70mm f/2.8' ,
                focalLength : '50mm' ,
                aperture : 'f/1.8' ,
                sutterSpeed : '1/250s' ,
                iso : 'ISO 100' ,
                dateTaken : 'March 14, 2025' ,
                captures : [ image6 , image7 ] , 
                nextImage : image5 , 
                format : 'JPG' , }
              , 
              {name : 'Flawless.' ,
                lensUsed : '24-70mm f/2.8' ,
                    focalLength : '50mm' ,
                    aperture : 'f/1.8' ,
                    sutterSpeed : '1/250s' ,
                    iso : 'ISO 100' ,
                    dateTaken : 'March 14, 2025' ,
                    captures : [image2 , image2 , image3] , 
                    nextImage : image4 , 
                    format : 'JPG' , } , 
                    {name : 'Deleted sence' ,
                        lensUsed : '24-70mm f/2.8' ,
                            focalLength : '50mm' ,
                            aperture : 'f/1.8' ,
                            sutterSpeed : '1/250s' ,
                            iso : 'ISO 100' ,
                            dateTaken : 'March 14, 2025' ,
                            captures : [ image6 , image7 ] , 
                            nextImage : image5 , 
                            format : 'JPG' , }])
  const titleAnimation = (imageInfo) => {
    gsap.set(".title", { y: "0vh" }); // Reset position
  
    imageInfo.forEach((_ , index) => {
      gsap.to(".title", {
        y: `-${3.7 * (index + 1)}vh`,  // Moves up per section
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.section-${index+1}`, // Fixed selector
          start: "top top",
          end: "bottom top",
       
           // Smooth transition
        },
      });
    });
  };
  
  
  useEffect(() => {
    
    titleAnimation(imageInfo);
    return () => ScrollTrigger.getAll().forEach((st) => st.kill()); // Cleanup
  }, [imageInfo]);
  return (
    <div className="">
      <div className="sticky z-20  top-0">

      <div className="absolute">
    
 <Navber/>
      </div>

      </div>
      {/* <div className='sticky overflow-hidden h-[3.8vh]   z-10 top-[30vh]'>
        <div className=''>

       

<div className='title absolute left-[10vw] '>
{imageInfo.map((el , i)=>{
  return <h2>{el.name}</h2>
})}
</div>
</div>
</div> */}
<Hero/>
      <div>
{imageInfo.map((images , index)=>{
  return  <div className={`section-${index+1}`}>
    <ImageAlgo index={index} focalLength = {images.focalLength} iso = {images.iso} format = {images.format} nextImage = {images.nextImage}  images={images.captures} dateTaken = {images.dateTaken} aperture  = {images.aperture} shutterSpeed ={images.sutterSpeed} lensUsed = {images.lensUsed}/>
    </div>
})}

      </div>

    </div>
  )
}

export default Home