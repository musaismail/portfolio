import React from 'react'
import robot from '../Assets/robot.png'
import poem from '../Assets/poem.PNG'
import crypto from '../Assets/crypto.PNG'
import pet from '../Assets/pet.PNG'
import portfolio from '../Assets/portfolio.PNG'

const Work = () => {
  return (
    <div name='work' className='w-full h-full  text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto mt-[80px] pt-[50px] p-4 flex flex-col justify-center w-full h-full'>
            <div className='p-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 mt-[60px] border-pink-600'> Work</p>
                <p className='py-6'>Check out some of my recent works</p>
            </div>
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage:`url(${robot})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto robo-friend '>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wide'>

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://agitated-ardinghelli-3ba19a.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='https://github.com/musaismail/robofriend'>
                                <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                    </div>

                    <div style={{backgroundImage:`url(${poem})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto robo-friend '>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wide'>

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://classy-licorice-145413.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='https://github.com/musaismail/Poem-App'>
                                <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${crypto})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto robo-friend '>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wide'>

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://venerable-sunburst-97c291.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='https://github.com/musaismail/cryptocurrency-price-tracker'>
                                <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${pet})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto robo-friend '>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wide'>

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://resplendent-creponne-53dbeb.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='https://github.com/musaismail/my-pet-app'>
                                <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${portfolio})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto robo-friend '>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wide'>

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://resplendent-creponne-53dbeb.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='https://github.com/musaismail/my-pet-app'>
                                <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Work