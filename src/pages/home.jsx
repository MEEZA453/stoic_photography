import React from 'react'
import ImageAlgo from '../components/imageAlgo.jsx'
import image4 from '../assets/images/image4.webp'
import image5 from '../assets/images/image5.jpeg'
import image6 from '../assets/images/image6.webp'
import image7 from '../assets/images/image7.webp'
import bw1 from '../assets/images/bw1.jpeg'
import bw2 from '../assets/images/bw2.jpeg'
import bw3 from '../assets/images/bw3.jpeg'
import sec31 from '../assets/images/sec3-1.jpeg'
import sec32 from '../assets/images/sec3-2.jpeg'
import sec33 from '../assets/images/sec3-3.jpeg'
import sec52 from '../assets/images/sec6-2.jpeg'
import sec53 from '../assets/images/sec6-3.jpeg'

import sec61 from '../assets/images/sec6-4.jpeg'
import sec62 from '../assets/images/sec6-5.jpeg'
import sec63 from '../assets/images/sec6-6.jpeg'
import sec64 from '../assets/images/sec6-7.jpeg'
import sec65 from '../assets/images/sec6-8.jpeg'


import sec71 from '../assets/images/sec7-1.webp'
import sec72 from '../assets/images/sec7-2.webp'
import sec73 from '../assets/images/sec7-3.webp'
import sec74 from '../assets/images/sec7-4.webp'
import sec75 from '../assets/images/sec7-5.webp'






import bw4 from '../assets/images/bw4.jpeg'
import bw5 from '../assets/images/bw5.jpeg'
import image8 from '../assets/images/image8.webp'
import {useState , useEffect} from 'react'
import Navber from '../components/navber.jsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '../components/hero.jsx'
import PageWrapperRight from '../components/pageWrapper/pageWrapperRight.jsx'
gsap.registerPlugin(ScrollTrigger)
function Home() {
  
const [imageInfo , setImageInfo] = useState([

                {name : 'Flawless.' ,
                  catagory : ['Model-photoshoot','Black & White' , 'Neture'],
                  lensUsed : '24-70mm f/2.8' ,
                      focalLength : '50mm' ,
                      aperture : 'f/1.8' ,
                      sutterSpeed : '1/250s' ,
                      iso : 'ISO 100' ,
                      dateTaken : 'March 14, 2025' ,
                      captures : [bw1 , bw2 , bw5 , bw4] , 
                      format : 'JPG' , } , 
                      {name : 'Deleted sence' ,
                        catagory : ['Model-photoshoot','Black'],
                          lensUsed : '24-70mm f/2.8' ,
                              focalLength : '50mm' ,
                              aperture : 'f/1.8' ,
                              sutterSpeed : '1/250s' ,
                              iso : 'ISO 100' ,
                              dateTaken : 'March 14, 2025' ,
                              captures : [ sec31, sec32 , sec33 ] , 
                              format : 'JPG' , }, , 
    
              , 
              {name : 'Flawless.' ,
                catagory : ['Model-photoshoot','bw'],
                lensUsed : '24-70mm f/2.8' ,
                    focalLength : '50mm' ,
                    aperture : 'f/1.8' ,
                    sutterSpeed : '1/250s' ,
                    iso : 'ISO 100' ,
                    dateTaken : 'March 14, 2025' ,
                    captures : [sec62 , sec63 , sec64 , sec65] , 
               
                    format : 'JPG' , } , 
                    {name : 'Deleted sence' ,
                      catagory : ['Model-photoshoot','bw'],
                        lensUsed : '24-70mm f/2.8' ,
                            focalLength : '50mm' ,
                            aperture : 'f/1.8' ,
                            sutterSpeed : '1/250s' ,
                            iso : 'ISO 100' ,
                            dateTaken : 'March 14, 2025' ,
                            captures : [ image4 , image6 , image7 ] , 
                            nextImage : image5 , 
                            format : 'JPG' , } 
                             ,   ])
 let [navber , setNavber ] = useState([{
    name : 'All images' , 
    redirect : ()=>{navigate('/')} , 
    isOpen : false ,
  },
  {
    name : 'Model-photoshoot' , 
    redirect : ()=>{navigate('/')} , 
    isOpen : true ,
  },
  {
    name : 'Black & White' , 
    redirect : ()=>{navigate('/')} , 
    isOpen : false ,
  },
  {
    name : 'Neture' , 
    redirect : ()=>{navigate('/')} , 
    isOpen : false ,
  }])
  const [openContact , setOpenContact] = useState(true)
let [catagorizedSections , setCatagorizedSections] = useState([]);
let [isAllProductVisible , setIsAllProductVisible] = useState(false)
console.log(isAllProductVisible)
const selectedCatagory = navber.reduce((acc , el , i )=>{
if(el.isOpen){
  acc = el.name
}
return acc
},'')

useEffect(()=>{
const filterdImages = imageInfo.filter((el , i)=>el.catagory.includes(selectedCatagory))
setCatagorizedSections(filterdImages)

},[navber])

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
  useEffect(()=>{
    navber.map((el , i , arr)=>{
      console.log(arr[0])
      if(arr[0].isOpen == false){
      setIsAllProductVisible(true)
      }else{
      setIsAllProductVisible(false)
      }
       }) 
  },[navber])
 console.log(imageInfo[0].captures[0])
  useEffect(() => {
    
    titleAnimation(imageInfo);
    return () => ScrollTrigger.getAll().forEach((st) => st.kill()); // Cleanup
  }, [imageInfo]);
  return (
    <PageWrapperRight nextPath="/">
    <div className="">
      <div className="sticky z-20  top-0">

      <div className="absolute">
    
 <Navber navber = {navber} setNavber = {setNavber} setOpenContact={setOpenContact} openContact={openContact}/>
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
      <div>
{ isAllProductVisible ? catagorizedSections.map((images , index)=>{
  return  <div className={`section-${index+1}`}>
    <ImageAlgo index={index} focalLength = {images.focalLength} iso = {images.iso} format = {images.format}  nextImage={catagorizedSections[(index + 1) % imageInfo.length]?.captures?.[0] ?? sec63} images={images.captures} dateTaken = {images.dateTaken} aperture  = {images.aperture} shutterSpeed ={images.sutterSpeed} lensUsed = {images.lensUsed}/>
    </div>
}):imageInfo.map((images , index , arr)=>{
  return  <div className={`section-${index+1}`}>
    <ImageAlgo index={index} focalLength = {images.focalLength} iso = {images.iso} format = {images.format}   nextImage={imageInfo[(index + 1) % imageInfo.length]?.captures?.[0] ?? image5}  images={images.captures} dateTaken = {images.dateTaken} aperture  = {images.aperture} shutterSpeed ={images.sutterSpeed} lensUsed = {images.lensUsed}/>
    </div>
})}
<Hero/>

      </div>

    </div>
    </PageWrapperRight>
  )
}

export default Home