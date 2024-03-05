import * as THREE from 'three';

function Geometries() {
    const geometries = [
      {
        position: [0, 0, 0],
        r: 0.3,
        geometry: new THREE.IcosahedronGeometry(3), // Gem
      },
      {
        position: [1, -0.75, 4],
        r: 0.4,
        geometry: new THREE.CapsuleGeometry(0.5, 1.6, 2, 16), // Pill
      },
      {
        position: [-1.4, 2, -4],
        r: 0.6,
        geometry: new THREE.DodecahedronGeometry(1.5), // Soccer ball
      },
      {
        position: [-0.8, -0.75, 5],
        r: 0.5,
        geometry: new THREE.TorusGeometry(0.6, 0.25, 16, 32), // Donut
      },
      {
        position: [1.6, 1.6, -4],
        r: 0.7,
        geometry: new THREE.OctahedronGeometry(1.5), // Diamond
      },
    ];
    // 
}