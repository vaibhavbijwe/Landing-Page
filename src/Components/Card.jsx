import React from 'react'

function Card() {
  return (
<div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
        <div className="cardcontainer h-[50vh] w-1/2">
            <div className='card relative w-full h-full bg-[#004D43] flex items-center justify-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute px-5 py-3 border-2 rounded-full left-10 bottom-10'>&copy;2010-2012 </button>
            </div>
        </div>
        <div className="cardcontainer flex  gap-5 h-[50vh] w-1/2">
        <div className='card relative flex items-center justify-center w-full h-full bg-[#0e1817]'>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute px-5 py-3 border-2 rounded-full left-10 bottom-10'>&copy;2010-2012 </button></div>
        <div className='card relative flex items-center justify-center w-full h-full bg-[#0c0f0e]'>
            <img className='w-16 h-16' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute px-5 py-3 border-2 rounded-full left-10 bottom-10'>&copy;2010-2012 </button></div>
        </div>
      
    </div>  )
}

export default Card