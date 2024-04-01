import React from 'react'
import { BsArrowUpCircleFill } from "react-icons/bs";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1 '>
        <div className="textstructure mt-52 px-20">
            {["we create", "eye Opening" , "protections "].map((item, index)=>{
                return (
                    <div className="masker">
                        <div className='w-full flex items-center'>
                            {index === 1 && (<div className='mr-[1vw] w-[8vw] h-[5.7vw] relative top-[0.5vw] bg-red-500 rounded-md'></div>)}
                            <h1 className="uppercase text-[6.5vw] leading-none tracking-tighter  font-['Founders Grotesk'] font-semibold ">
                                {item}
                            </h1>
                        </div>
                    </div>
            );
            })}
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
            {["For Public and Private Companies" , "From the first pitch to IPO"].map((item, index)=> 
            <p className='text-md font-light tracking-tight leading-none'>{item}</p> 
            )}
            <div className="start flex items-center gap-5">
                <div className='px-4 py-2 border-[2px] border-zinc-400 rounded-full font-light text-sm uppercase'>Start the Project</div>
                <div className='w-10 h-10 flex items-center justify-center border-[2px] rounded-full'>
                    <span className='rotate-[45deg]'><BsArrowUpCircleFill /></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage