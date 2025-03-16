import React from 'react'
import profile from '../assets/images/profile.webp'

function hero() {
  return (
    <div>
<div className='bg-red-100 w-full h-[35vh] overflow-hidden'>
    <img className ="w-full  object-cover -translate-y-[20vh]" src={profile} alt="" />
</div>

    </div>
  )
}

export default hero