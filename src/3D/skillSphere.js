import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { skills } from "../data/skills.js";
import { TextureLoader } from 'three';
import { Html } from '@react-three/drei';
import * as THREE from 'three';


const SphereSkill = ({ position, textureUrl, name, initialRotation = { x: 100, y: 100, z: 100 }  }) => {
  const meshRef = useRef();
  const texture = new TextureLoader().load(textureUrl);

  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4,1); 

  useEffect(() => {
    if (meshRef.current) {
      // Appliquer la rotation initiale
      meshRef.current.rotation.x -= 1;
    //   meshRef.current.rotation.y +=1;
    //   meshRef.current.rotation.z += 1;
    }
  }, [initialRotation]); 
  
  useFrame(() => {
    // meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh position={position} ref={meshRef}>
      <sphereGeometry args={[5, 32, 32]} />
      <meshStandardMaterial map={texture} />
      <Html position={[0, 3, 0]} className="skill-name">
        {/* {name} */}
      </Html>
    </mesh>
  );
};

const skills3D = () => {
  const positions = skills.map((_, index) => [0 , 0, 0]);

  return (
    <div name='skills' className='w-full h-screen grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8'>
        {skills.map((skill, index) => (
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={3} />
        <pointLight position={[10, 10, 10]} />
          <SphereSkill
            key={skill.name}
            position={positions[index]}
            textureUrl={skill.img}
            name={skill.name}
          />
      </Canvas>
        ))}
    </div>
  );
};

export default skills3D;
