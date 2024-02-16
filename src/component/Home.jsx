import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import paysage from '../assets/Paysage.jpeg';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <img className='w-full h-screen object-cover absolute opacity-10 pointer-events-none' src={paysage} alt="no pics" />
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-gray-100 font-bold'>Bonjour, je m'appelle</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Romain THOMAS
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Je suis
          <h3>
              <TypeAnimation
              sequence={[
            // Same substring at the start will only be typed out once, initially
            'Formé à l\'école42',
            2000, // wait 1s before replacing "Mice" with "Hamsters"
            'Passionné de technologie ',
            2000,
            'Developpeur FullStack',
            2000
            ]}
            wrapper="span"
            speed={80}
            style={{ fontSize: '1em', display: 'inline-block' }}
            repeat={Infinity}
            />
          </h3>
        </h2>
        <p className='text-[#8892b0] pt-5 max-w-[700px]'>
        Formé à la programmation à l'ecole 42, j'ai un très bon niveau en programmation, notamment C, C++ et Javascript </p>
        <p className='text-[#8892b0] max-w-[1000px]'>Je propose mes services en tant que developpeur web. </p>
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