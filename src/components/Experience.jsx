import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const Box = (props) => {
  const ref = useRef()

  useFrame((state, delta) => (ref.current.rotation.x += 0.01))

  return (
    <mesh
      castShadow
      {...props}
      ref={ref}
      rotation={[0, 0, Math.PI * 0.25]}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'} />
    </mesh >
  )
}

const Floor = (props) => {
  const ref = useRef()

  return (
    <mesh
      receiveShadow
      {...props}
      ref={ref}
      rotation={[-Math.PI * 0.5, 0, 0]}
    >
      <planeGeometry args={[20, 100]} />
      <meshStandardMaterial color={'rgb(255, 237, 176)'} />
    </mesh>
  )
}

const Experience = () => {
  return (
    <div className="app">
      <div className="app-container">
        <Canvas shadows camera={{ position: [0, 1, 3], fov: 75 }}>
          <ambientLight intensity={1.5} />
          <spotLight castShadow position={[10, 10, 10]} angle={0.15} penumbra={1} />
          {/* <pointLight castShadow position={[-10, -10, -10]} /> */}
          <Box position={[0, 0, 0]} />
          {/* <Floor position={[0, -2, 0]} /> */}
        </Canvas>
      </div>
    </div >
  )
}

export default Experience