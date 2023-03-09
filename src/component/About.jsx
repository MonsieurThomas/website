import React from 'react'

const About = () => {
  return (
    <div name='about' className='h-screen w-full sm:flex sm:gap-12 mb-[200px] sm:mb-4' >
        <div className='  sm:w-[700px] about-div  pt-[300px] text-6xl font-bold sm:text-right'>
            <h2 className='pr-[180px]'>Me</h2>
            <h2>concernant</h2>
        </div>
        <div className='pt-[60px]  sm:pt-[230px] text-xl leading-8 min-w-[300px]'>
            <p className='text-[#cfd4e4] pb-8 max-w-[1000px]'>Mon développement personnel a été façonné par mes expériences variées dans des domaines tels que l'art, la psychologie et le commerce.</p>
            <p className='text-[#cfd4e4] max-w-[800px] pb-10 '> Initialement formé à la programmation à l'école 42, je propose maintenant mes services en tant que développeur front-end. </p>
            <p className='text-[#cfd4e4] max-w-[1000px] pb-4'>Principalement formé sur React, je maîtrise différentes bibliothèques comme Tailwind, Material UI, ou encore Styled Components, et des plateformes comme Netlify et Firebase. </p>
        </div>
    </div>
  )
}

export default About