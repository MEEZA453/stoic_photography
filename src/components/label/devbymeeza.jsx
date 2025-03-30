import React , {useRef} from 'react'
import devdp from '../../assets/images/devdp.jpg'
import {motion , useInView} from 'framer-motion'

function devbymeeza() {

    const devRef = useRef()
    const setInView = useInView(devRef  , {once : true  ,margin : "0px"})
  return (
    <motion.div ref={devRef} 
    initial = {{opacity :  0  , scale : 0.8}}
    animate = {setInView ? {opacity : 1 , scale : 1}: {}}
    transition={{duration : 0.5 , ease : 'easeOut'}}     >
        <div className='bg-[#ffffff]  w-[100px] rounded font-[inter-medium] h-[17px] z-30 px-2 py-1 relative'>
            <div className='absolute bg-[#ffffff] h-[18px] w-[18px] rotate-45 left-[40px]'></div>
            <h3 className=' absolute z-50 text-black top-[2px]'>devbymeeza
            </h3>
            </div>
            <motion.div animate={{
        y : ["0%" , "-7%" , "0%"]
    }} transition={{
        duration : 6 , 
        repeat : Infinity , 
        ease : 'easeInOut'

    }} className="dp mt-1 ml-7 bg-white h-[60px] w-[60px] overflow-hidden relative rounded-full">
             
            <img src={devdp} className='w-[60px]   absolute' alt="" />  
            <div className='rounded-full h-[5px] w-[9px] bg-[#cacaca] absolute'>

</div>
                {/* <div className='bg-white h-[70px] w-[70px] absolute rounded-full'></div> */}
            </motion.div>
            </motion.div>
  )
}

export default devbymeeza