import React, { useEffect } from 'react'
import Highlight from './highlight'

import photographer from '../assets/images/profile.webp'
import PageWrapper from '../components/pageWrapper/pageWrapperLeft'
import { time } from 'framer-motion'
import { useState} from 'react'
import {motion} from 'framer-motion'
import Contact from '../components/contact'

function highlightbg() {
  const  [location, setLocation] = useState({
    latitude : null , 
    longitude : null
  })
  const [openContact , setOpenContact] = useState(true)
    const [isTextVisible , setIsTextVisible] = useState(true)
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsTextVisible(false);
        } else {
          setIsTextVisible(true);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup function to avoid memory leaks
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [])
 
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  // Function to format latitude/longitude
  const formatCoordinate = (coordinate, type) => {
    if (coordinate === null) return '';
    const absolute = Math.abs(coordinate).toFixed(4); // limit to 4 decimal points
    const direction =
      type === 'lat'
        ? coordinate >= 0
          ? 'N'
          : 'S'
        : coordinate >= 0
        ? 'E'
        : 'W';
    return `${absolute}°${direction}`;
  };
  return (
   <PageWrapper nextPath={"/gallary"}>
    <div> <div className='sticky top-0 z-0'>
        <div className="sticky-background relative h-[98%] w-screen
         ">
            <div className='w-screen h-screen bg-black opacity-50 absolute z-20 '></div>
            <p  className={`  absolute z-[40]  top-[88%] left-[40%] ${isTextVisible ? 'opacity-60':'opacity-0'} duration-500 `}>swipe left</p>
            <div  className={`  absolute h-[20px] w-[100px] bg-gradient-to-l bg-clip-text from-white to-black bg-white z-50 top-[88%] left-[40%] ${isTextVisible ? 'opacity-60':'opacity-0'} duration-500 `}></div>


            <div className='w-screen h-screen '>
            <img className='w-screen h-[150vh] -translate-y-[50vh] object-cover' src={photographer} alt="" />
            </div>  
        </div>  
        </div>
        <h3 className='absolute z-[999] text-[18px] top-[20%] left-[10%] text-white '>( Photographer )</h3>
        <h3 className='absolute z-[999] text-[15px] top-[1%] left-[1%] text-white '>{formatCoordinate(location.latitude, 'lat')+ " "+formatCoordinate(location.longitude, 'log')}</h3>
{/* <Contact openContact={openContact} setOpenContact={setOpenContact}/> */}
<a  href = 'www.instagram.com' className='absolute z-[999] top-[1%] right-[1%] text-white'>contact</a>
        <div className='z-[999] mt-8'>
            
        <Highlight/>
        </div>
       </div> </PageWrapper> 
  )
}

export default highlightbg