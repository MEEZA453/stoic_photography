import React, { useEffect, useRef , useState } from 'react'
import photographer from '../assets/images/profile.webp'
import image1 from '../assets/images/image1.webp'
import sec64 from '../assets/images/sec6-4.jpeg'
import sec65 from '../assets/images/sec6-5.jpeg'
import sec61 from '../assets/images/sec6-1.jpeg'
import sec62 from '../assets/images/sec6-2.jpeg'
6
import achivment1 from '../assets/images/achivment1.png'
import { motion, useScroll, useTransform , useInView} from 'framer-motion'
import PageWrapper from '../components/pageWrapper/pageWrapperLeft'
import DevByMeeza from '../components/label/devbymeeza.jsx'
import {useNavigate} from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";
import bw1 from '../assets/images/bw1.jpeg'
import bw2 from '../assets/images/bw2.jpeg'
import bw3 from '../assets/images/bw3.jpeg'
import bw4 from '../assets/images/bw4.jpeg'
import bw5 from '../assets/images/bw5.jpeg'


function Highlight() {
  const containerRef = useRef(null)
  const [isTextVisible , setIsTextVisible] = useState(true)
  console.log(isTextVisible)
const navigate = useNavigate()
const section3Ref = useRef(null);
const isInView = useInView(section3Ref, { once: true, margin: "-100px" });
  // Track scroll progress relative to this page
  const { scrollYProgress , scrollXProgress } = useScroll({
    target: containerRef,
    offset: ["start 110%", "end end"], // Track from start to end
  });

  // Map scroll progress to y-axis movement (adjust values as needed)
  const text = " Calm, composed, yet full of depth. I’ve always been drawn to the stillness in chaos — the way a photograph can freeze a fleeting second and make it last forever.";
   const char = text.split('')
  const logoY = useTransform(scrollYProgress, [0, .3], ["-4000%", "0%"]);
  const logoX = useTransform(scrollYProgress , [0 , .3] , ["120%" , "0%"])
  const logoScale = useTransform(scrollYProgress , [0 , .3] , ["130%" , "90%"])

  return (
    <PageWrapper nextPath="/gallary">
      <div ref={containerRef} className='relative'>

        <div className="story w-screen bg-black bg-opacity-55 z-20 px-2 pt-4">
          <div className="section-1 flex flex-col gap-8">

            <div className='flex justify-between'>
              <motion.h5
                className='logo'
                style={{ y: logoY , x : logoX, scale : logoScale }} 
              >
                stoic.
              </motion.h5>

              <div className='flex items-center gap-2'>
                <div className='h-[5px] w-[5px] bg-green-500 rounded-full'></div>
                <h3>Kolkata</h3>
              </div>
            </div>

            <div>
              <p className=''>
                Stoic is my way of seeing the world. Calm, composed, yet full of depth.
                I’ve always been drawn to the stillness in chaos — the way a photograph can freeze a fleeting second and make it last forever.
                <br />
                Calm, composed, yet full of depth. I’ve always been drawn to the stillness in chaos — the way a photograph can freeze a fleeting second and make it last forever.
              </p>

              <div className="action flex gap-[50vw] items-center">
                <button className='bg-white text-black h-[3vh] px-3 rounded-full font-[inter-medium] text-[4vw] tracking-tighter'>Book now</button>
                <div className='relative'>
                  <img className='w-[17vw]' src={achivment1} alt="" />
                  <h2 className='absolute top-[1.3vh] left-[5vw]'>3y</h2>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Section 3 and Section 4 (you can keep as it is) */}
        <div ref={section3Ref} className="section-3 mt-4">
  <div>
    <div className="first-row relative flex">
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        src={bw1}
        className="w-[33.33vw]"
        alt=""
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        src={bw2}
        className="w-[33.33vw]"
        alt=""
      />
      <motion.div
        initial={{ opacity: 0, scale:0.8 }}
        animate={isInView ? { opacity: 1, scale : 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="bg-black p-[2px] w-[33.33vw] flex justify-center items-center"
      >
        <h3>B&W</h3>
      </motion.div>
    </div>
    <div className="second-row flex">
      <motion.img
        initial={{ opacity: 0, scale : 0.8 }}
        animate={isInView ? { opacity: 1, scale:1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[66.66vw] lg:h-[82.65vw]"
        src={bw5}
        alt=""
      />
      <div>
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          src={bw3}
          className="w-[33.33vw]"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          src={bw4}
          className="w-[33.33vw]"
          alt=""
        />
      </div>
    </div>
      <p className='px-2 pt-2'>
                Stoic is my way of seeing the world. Calm, composed, yet full of depth.
                I’ve always been drawn to the stillness in chaos — the way a photograph can freeze a fleeting second and make it last forever.
              
              </p>
  </div>
</div>;

        <div className="section-4 flex flex-col justify-between items-center h-[65vh]">
          <div className="levitating-image h-[100vw] w-[100vw] relative">
            <motion.img  animate={{
          y: ["0%", "-4%", "0%"], // up and down motion
        }}  
        transition={{
          duration: 7, // time for one full up and down
          repeat: Infinity, // infinite loop
          ease: "easeInOut", // smooth transition
        }} src={sec61} className='w-[50%] object-cover absolute top-[35%] right-[25%]' alt="" />
            <motion.img animate={{
          y: ["0%", "-8%", "0%"], // up and down motion
        }}
        transition={{
          duration: 7, // time for one full up and down
          repeat: Infinity, // infinite loop
          ease: "easeInOut", // smooth transition
        }} src={sec62} className='w-[40%] object-cover absolute top-[75%] right-[35%]' alt="" />
            <motion.img animate={{
          y: ["0%", "-6%", "0%"], // up and down motion
        }}
        transition={{
          duration: 7, // time for one full up and down
          repeat: Infinity, // infinite loop
          ease: "easeInOut", // smooth transition
        }} src={sec64} className='w-[30%] object-cover absolute top-[65%] right-[60%]' alt="" />
            <motion.img animate={{
          y: ["0%", "-10%", "0%"], // up and down motion
        }}
        transition={{
          duration: 7, // time for one full up and down
          repeat: Infinity, // infinite loop
          ease: "easeInOut", // smooth transition
        }} src={sec65} className='first-image w-[30%] object-cover absolute top-[50%] right-[20%]' alt="" />
            <h3 className='absolute top-[60%] right-[15%]'>( Flawless )</h3>
          </div>
          <button onClick={()=>{navigate('/gallary')}} className='bg-white -translate-x-[4vw] text-black h-[3vh] px-3 rounded-full font-[inter-medium] text-[4vw] tracking-tighter'>View  gallary</button>
        </div>
        <div className='absolute bottom-10 right-7'>

        {/* <DevByMeeza/> */}
        <div className="flex items-center justify-center  border-b boder-white">
        <h3  className=''>View dev info</h3>
          <MdArrowOutward size={20} className='text-white'/>
        </div>
        </div>
<div className='w-full flex justify-center mt-32 border-t border-[#808080] px-2 py-1' ><h3 className=''>Copyright © 2024 STOIC</h3></div>
      </div>
    </PageWrapper>
  )
}

export default Highlight;
