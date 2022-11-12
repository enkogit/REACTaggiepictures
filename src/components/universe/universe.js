import React, { useMemo, useRef } from "react"
import {  useFrame } from 'react-three-fiber'

const parameters = {}
parameters.size = 0.01
parameters.stars = 9000
parameters.starColor = '#ffffff'
parameters.insideColor = '#ff6030'
parameters.outsideColor = '#1b3984'

export function Universe(props){

    const [positions] = useMemo(() => {
        let positions = []
        for (let j = 0; j < parameters.stars; j++) {
            //Position
        positions[j*3] = (Math.random() - 0.5) * 600
        positions[j*3 + 1] = (Math.random() - 0.25) * 600
        positions[j*3 + 2] = (Math.random() - 0.5) * 600
        }
        return [new Float32Array(positions)]
      })

        const starsRef = useRef();

      useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        starsRef.current.rotation.y = elapsedTime / -30;

      });

    return (
        <points ref={starsRef}>
          <bufferGeometry attach="geometry">
            <bufferAttribute attachObject={["attributes", "position"]} count={positions.length / 3} array={positions} itemSize={4} />
          </bufferGeometry>
          <pointsMaterial attach="material" color='white' size={parameters.size} sizeAttenuation={true} />
        </points>
      );
}