import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-gray-100 font-bold'>Bonjour, je m'appelle</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Romain THOMAS
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Je suis developpeur Front-end.
        </h2>
        <p className='text-[#8892b0] pt-5 max-w-[700px]'>
        Formé à la programmation à l'ecole 42, j'ai un très bon niveau en JavaScript. </p>
        <p className='text-[#8892b0] max-w-[1000px]'>Je maîtrise également Tailwind, Firebase, Material UI, ou encore Github. </p>
        <p className='text-[#8892b0] pb-8 max-w-[1000px]'>Vous pouvez me joindre facilement à travers mon formulaire de contact en bas de site, ou encore par téléphone ou mail, qui se trouvent eux aussi en bas de site.
     </p>
        <div>
            <Link to='work' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-300 hover:border-gray-300 hover:text-gray-700'>
                Mon Travail
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
                </span>
            </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;