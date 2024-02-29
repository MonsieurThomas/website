import React from 'react';

// import HTML from '../assets/html.png';
import HTMLCSS from '../assets/HTMLCSS.png';
import JavaScript from '../assets/javascript.png';
import nodeJs from '../assets/node.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import mongoDb from '../assets/mongoDb.png';
import express from '../assets/express.png';
import postgresql from '../assets/tailwind.png';
import Cs from '../assets/c.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 pt-20'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4'>Skills</p>
              <p className='py-4'> Les technologies avec lesquelles j'ai travaillé</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={mongoDb} alt="HTML icon" />
                  <p className='my-4'>MongoDb</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={express} alt="HTML icon" />
                  <p className='my-4'>ExpressJs</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>ReactJs</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={nodeJs} alt="HTML icon" />
                  <p className='my-4'>Node</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JavaScript</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={postgresql} alt="HTML icon" />
                  <p className='my-4'>PostgreSQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Cs} alt="HTML icon" />
                  <p className='my-4'>C/C++</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTMLCSS} alt="HTML icon" />
                  <p className='my-4'>HTML / CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div> */}
          </div>
      </div>
    </div>
  );
};

export default Skills;