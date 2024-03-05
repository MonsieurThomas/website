import React from 'react'

const Contact = () => {
  return (
      <div name='contact' className='w-full  bg-[#0a192f] pt-[100px] pb-[50px]'>
       <div className='max-w-[1000px] mx-auto pb-8 px-4'>
            <p className=' text-4xl font-bold inline border-b-4 text-gray-300'>Contact</p>
            <p className='text-gray-300 pt-8'> Remplissez le formulaire ou envoyez moi un mail : <span className='font-bold'>r.thomas06200@gmail.com</span></p>
            <p className='text-gray-300 '> Je suis aussi joignable au: <span className='font-bold border-b-2 inline font-sans ml-1'>06 04 18 05 25</span></p>
        </div>
        <div className='flex justify-center items-center pb-4' >
            <form method='POST' action="https://getform.io/f/ba320c66-98f5-4eb3-9abd-3ad88a7eef79" className='flex flex-col max-w-[600px] w-full'>
                
                <p className='text-white font-bold pb-1 mx-5'>Name</p> 
                <input className='bg-[#ccd6f6] p-2 mb-3 mx-5' type="text" name='name' />
                <p className='text-white font-bold pb-1 mx-5'>Email</p>
                <input className=' p-2 bg-[#ccd6f6] mb-3 mx-5' type="email" name='email' />
                <p className='text-white font-bold pb-1 mx-5'>Message</p>
                <textarea className='bg-[#ccd6f6] p-2 mx-5' name="message" rows="10"></textarea>
                <button className=' text-white hover:text-gray-900 border-2 hover:bg-gray-100 hover:border-gray-100 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    </div>
  )
}

export default Contact