import React from 'react';
import { skills } from "../data/skills.js"



const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 pt-20'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4'>Skills</p>
              <p className='py-4'> Les technologies avec lesquelles j'ai travaillé</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8'>
                {skills.map((skill) => (
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={skill.img} alt="HTML icon" />
                    <p className='my-4'>{skill.name}</p>
                </div>
                ))}
          </div>
      </div>
    </div>
  );
};

export default Skills;