import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tr-3xl text-black '>
        <h1 className=' font-["Neue_Montreal"] text-[4vw] leading-[3.5vw] tracking-tight'>ochi is a partner for fast-growing tech businesses
             that need to raise funds, sell product, explain complex ideas, 
             and hire great people </h1>
             <div className=' flex gap-5 w-full border-t-[1px] pt-10 border-[#a1a596] mt-20'>
                <div className='w-1/2 '> 
                <h1 className='text-7xl'>Our approach:</h1>
                <button className='flex uppercase gap-10 px-10 py-6 bg-zinc-900 rounded-full text-white  mt-10'>Read More
                <div className='w-3 h-3 bg-zinc-100 rounded-full'>
                    </div>
                    </button>
                </div>
                <div className='w-1/2 h-[70vh] bg-black rounded-3xl'></div>
             </div>

    </div>
  )
}

export default About
