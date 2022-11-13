import ReactDOM from 'react-dom'
import React, { useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { Universe } from './components/universe/universe';
import { Header } from './components/section/header';
import { Landing } from './components/section/landing';
import { Token } from './components/section/token';
import { Footer } from './components/section/footer';
import './styles.css'

let world = []
for (let i = 0; i < 500; i++) {
  world.push(
    <mesh key={i} position={[Math.random() * 1600 - 800, 0, Math.random() * 1600 - 800]} scale={[20, Math.random() * 160 + 10, 20]}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} /*ref={ref => ref && ref.translate(0, 0.5, 0)}*/ />
      <meshPhongMaterial attach="material" color="#ad0071" flatShading={true} />
    </mesh>
  )
}

function Plane() {
  const planeRef = useRef();
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
  });
  
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[2500, 2500]} ref={planeRef} />
      <meshPhongMaterial attach="material" color="#ad0071" flatShading={true} />
    </mesh>
  )
}

function Dolly() {
  // This one makes the camera move in and out
  useFrame(({ clock, camera }) => {
    // camera.position.z = 20 + Math.sin(clock.getElapsedTime()) * 2
    camera.position.y = 75 + Math.sin(clock.getElapsedTime()+80) * 8
    // camera.rotation.y = Math.sin(clock.getElapsedTime()) * 0.025
  })
  return null
}

function App() {
  return (
    <div className="screen">
      <div className='main'>
      <Header />
      <Landing />
          <Token />
          <Footer />
          
      </div>
      <div className='canvas darkBg'>
      <Canvas camera={{ position: [0, 500, 100] }}>
      <Universe />
        <fog attach="fog" args={['#ff6161', 0.002, 1000]} />
        <directionalLight position={[1, 1, 1]} color="#ad0071" />
        <directionalLight position={[-1, -1, -1]} color="#ffd738" />
        <ambientLight color="#444444" />
        {world}
        <Plane />
        <Dolly />
      </Canvas>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
