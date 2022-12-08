import React from 'react'

function backStyle({...rest}) {
  return (
    <div className='absolute w-full h-full grid grid-rows-1 grid-cols-3 z-[0]'>
        <div className='bg border_bg'></div>
        <div className='bg border_bg'></div>
        <div className='bg border_bg'></div>
    </div>
  )
}

export default backStyle