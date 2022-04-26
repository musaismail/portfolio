import React from 'react'
import bootstrap from '../Assets/bootstrap.jpg'
import css from '../Assets/css.png'
import github from '../Assets/github.png'
import html from '../Assets/html.png'
import javascript from '../Assets/javascript.png'
import jsx from '../Assets/jsx.png'
import node from '../Assets/node.png'
import react from '../Assets/react.png'
import Redux from '../Assets/Redux.png'
import api from '../Assets/api.jpg'
import saas from '../Assets/saas.jpg'
import tailwind from '../Assets/tailwind.png'

const Skills = () => {
  return (
    <div name='skill' className='w-full h-full bg-[#0a192f] text-gray-300'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pt-14'>
            <p className='text-4xl border-bottom-4 inline border-b-4 text-gray-300 border-pink-600'>Skills</p>
            <p className='py-4'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
            <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                <img className="w-20 mx-auto"src={html} alt='html icon'/>
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                <img className="w-20 mx-auto"src={css} alt='css icon'/>
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                <img className="w-20 mx-auto"src={javascript} alt='js icon'/>
                <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                <img className="w-20 mx-auto"src={react} alt='react icon'/>
                <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                <img className="w-20 mx-auto"src={Redux} alt='redux icon'/>
                <p className='my-4'>REDUX</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                <img className="w-20 mx-auto"src={bootstrap} alt='bootstrap icon'/>
                <p className='my-4'>BOOTSTRAP</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                <img className="w-20 mx-auto"src={tailwind} alt='tailwind icon'/>
                <p className='my-4'>TAILWIND</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                <img className="w-20 mx-auto"src={node} alt='node icon'/>
                <p className='my-4'>NODE</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                <img className="w-20 mx-auto"src={saas} alt='saas icon'/>
                <p className='my-4'>SAAS</p>    
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                <img className="w-20 mx-auto"src={jsx} alt='jsx icon'/>
                <p className='my-4'>JSX</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                <img className="w-20 mx-auto"src={github} alt='github icon'/>
                <p className='my-4'>GITHUB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110'>
                <img className="w-20 mx-auto"src={api} alt='api icon'/>
                <p className='my-4'>CONTEXT API</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Skills