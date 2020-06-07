import React, { useState, useRef } from 'react';
import { useSpring, a } from 'react-spring/three'
import { useFrame } from 'react-three-fiber'

const Cube: React.FC = ({ position }) => {
  window.performance.clearMeasures = () => { }
  window.performance.clearMarks = () => { }
  window.performance.measure = () => { }
  window.performance.mark = () => { }

  const boxRef = useRef()
  const [hovered, setHovered] = useState(true)
  const props = useSpring({
    scale: hovered ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? "orange" : 'green',
  })

  useFrame(() => (boxRef.current.rotation.y += 0.05, boxRef.current.rotation.x += 0.05))

  return (
    <a.mesh
      ref={boxRef}
      position={position}
      scale={props.scale}
      onClick={() => setHovered(!hovered)}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshPhysicalMaterial attach="material" color={props.color} opacity={1} />
    </a.mesh>

  )
}

export default Cube