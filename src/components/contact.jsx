import React from 'react'
import {motion } from 'framer-motion'
import ig from '../assets/images/ig.png'
import be from '../assets/images/bg.webp'
import printerest from '../assets/images/printerest.png'

function contact({openContact , setOpenContact}) {
  return (
    <div><motion.div 
initial = {{width : 'fit'  , height : '180px'}}
animate = {openContact ? {width : 'fit-content' , height : '20px'}:{}}
transition={{ duration: 0.4,  ease: "easeOut" }}
className={`bg-white  ${!openContact ? 'bg-opacity-30':'bg-opacity-0'} duration-500  z-[999] absolute text-[18px] top-[1%] right-[2%] px-1 py-1rounded   rounded flex flex-col`}>


           <h3 onClick={()=>{!openContact ? setOpenContact(true): setOpenContact(false)}} className='   text-white '>contact</h3>
           <div className='flex mt-2 flex-col gap-1'>

           <motion.img initial = {{opacity : 1  , scale : 1}}
animate = {openContact ? {opacity : 0  , scale :0.8}:{}}
transition={{ duration: 0.6, delay : 0.4 , ease: "easeOut" }} src={ig} className='w-12' alt="" /><motion.img src={be} 
initial = {{opacity : 1  , scale : 1}}
animate = {openContact ? {opacity : 0  , scale :0.8}:{}}
transition={{ duration: 0.6, delay : 0.5 , ease: "easeOut" }}className='w-12' alt="" /><motion.img 
initial = {{opacity : 1  , scale : 1}}
animate = {openContact ? {opacity : 0  , scale :0.8}:{}}
transition={{ duration: 0.6, delay : 0.6 , ease: "easeOut" }} src={printerest} className='w-12' alt="" />
           </div>
           </motion.div></div>
  )
}

export default contact