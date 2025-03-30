import React from 'react'
import {useState} from 'react'


function imageAlgo({images , title , focalLength ,iso,format,nextImage,dateTaken,aperture,shutterSpeed, lensUsed ,  index}) {



  return (
    <div className='bg-black'>
      { index %2 == 0 ? <div>
        <div className="first-row relative flex">
          <h3 className = "absolute bg-black top-[40vh] left-[20vw] "></h3>
            <img src={images[0]} className='w-[33.33vw]' alt="" />
            <img src={images[1]} className='w-[33.33vw]' alt="" />
            <div className='bg-black p-[2px] w-[33.33vw]  flex justify-between'>
              <div className='flex-col flex gap-[9vh]'>

              
              <div className=''>
                <h3>
                  0{index}
                </h3>
              </div>
              <div>

              <h4>{aperture}</h4>
              <h4>{focalLength}</h4>
              <h4>{shutterSpeed}</h4>
              <h4>{iso}</h4>
              <h4>{lensUsed}</h4>
              <h4>{dateTaken}</h4>  

              </div>

            </div>
            <h4>{format}</h4>
            </div>
        </div>
        <div className="sacond-row flex">
        <img className='w-[66.66vw] lg:h-[82.65vw]' src={images[2]} alt="" />
        <div>
        <img src={images[0]} className='w-[33.33vw]' alt="" />
        <img src={nextImage} className='w-[33.33vw]' alt="" />
        </div>
        </div>
        </div> : <div>
        <div className="sacond-row flex">
        <img className='w-[66.66vw] lg:h-[82.65vw]' src={images[0]} alt="" />
        <div>
        <img src={images[1]} className='w-[33.33vw]' alt="" />
        <div className='bg-black p-[2px] w-[33.33vw]  flex justify-between'>
              <div className='flex-col flex gap-[9vh]'>

              
              <div className=''>
                <h3>
                  0{index}
                </h3>
              </div>
              <div>

              <h4>{aperture}</h4>
              <h4>{focalLength}</h4>
              <h4>{shutterSpeed}</h4>
              <h4>{iso}</h4>
              <h4>{lensUsed}</h4>
              <h4>{dateTaken}</h4>  

              </div>

            </div>
            <h4>{format}</h4>
            </div>
        </div>
        </div>
            <div><img className='w-full h-[70vw] object-cover' src={nextImage} alt="" /></div>
            
            </div>}
    </div>
  )
}

export default imageAlgo