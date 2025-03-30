import React from 'react'
import {useState} from 'react'
import {redirect, useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'
import ig from '../assets/images/ig.png'
import be from '../assets/images/bg.webp'
import printerest from '../assets/images/printerest.png'

function navber({navber , setNavber , openContact , setOpenContact} ) {
  const navigate = useNavigate()

  const handleOnClick = (index , item)=>{
    setNavber((prev)=>
       prev.map((el , i)=>(
          {...el , isOpen : i=== index ,}
      ))
    )
    item.redirect()

  }
  return (
    <div className=' w-full '>
      {/* <div onClick={()=>{setOpenContact(true) , console.log('clicked')}} className={`w-screen h-screen  absolute top-0 bg-black duration-1000 z-[100] bg-opacity-0 ${openContact ? "backdrop-blur-0" : 'backdrop-blur-xl'}  `}><h3  className={`${!openContact ? 'opacity-100' : 'opacity-0'} duration-500 w-full h-full flex justify-center items-center`}>@stoicphotography</h3 ></div> */}
      <div className='flex gap-[24vw]'>
        
    <div>
      {
navber.map((item , index)=>{
  return <h3 onClick = {()=>{handleOnClick(index , item)}}>{`${item.isOpen ? '(' : ''} ${item.name} ${item.isOpen ? ')' : ''}`}</h3>
})
      }
      
    </div>
    <h3>stoic</h3>
  <a href='/www.instaggram'>contact</a>
      </div>
    </div>
  )
}

export default navber