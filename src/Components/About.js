import React from 'react'

const About = () => {
  return (
    <div name='about' className='h-screen w-full bg-[#0a192f] text-gray-300'>
      <div className='w-full h-full items-center justify-center flex flex-col'>
       <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
           <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
           </div>
           
           </div>
           <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
               <div className=' sm:text-right text-4xl font-bold pl-4'>
                   <p>Hi. I'm Ismail, nice to meet you. Please take a look around. </p>
               </div>
               <div>
                   <p>I'm passionate about building excellent software that 
                       improves lives of those around me. I specialize in creating software
                       for clients ranging from individuals and small-businesses all the way 
                       to large enterprise corporations. What would you do if you had a software
                       expert available at your fingertips? 
                   </p>
               </div>
           </div>
       </div>
    </div>
  )
}

export default About