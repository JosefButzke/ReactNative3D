import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';

const Home: React.FC = () => {
  const [hovered, setHovered] = useState(true)

  const ref = useRef()
  useFrame(() => (ref.current.rotation.y += 0.05, ref.current.rotation.x += 0.05))

  window.performance.clearMeasures = () => { }
  window.performance.clearMarks = () => { }
  window.performance.measure = () => { }
  window.performance.mark = () => { }

  return (
    <mesh
      ref={ref}
      scale={hovered ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={e => setHovered(!hovered)}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" color={hovered ? "green" : 'orange'} opacity={1} />
    </mesh>

  )
}

export default Home