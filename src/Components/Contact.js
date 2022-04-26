import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
       <form method='POST' action='https://getform.io/f/7fbc3ac0-0bcf-4612-b9cd-73d7f5e9cea9' className='max-w-[600px] w-full flex flex-col '>
           <div className='pt-8 '>
               <p className='text-4xl border-bottom-4 inline border-b-4 text-gray-300 border-pink-600' >
                   Contact
              </p>
              <p className='text-gray-300 py-4'>
                  Submit the form below or shoot me an email - imusa1438@gmail.com
              </p>
           </div>
           <input className="p-2 bg-[#ccd6f6]" type='text' placeholder='name' name='name'/>
           <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='email' name='email' required/>
           <textarea className='p-2 bg-[#ccd6f6]' name='message' rows='10' placeholder='message'/>
           <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
               Let's collaborate 
            </button>
       </form>  
    </div>
  )
}

export default Contact