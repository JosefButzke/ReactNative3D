import React, { useRef, useState } from 'react';
import { YellowBox } from 'react-native';
import { a, useSpring } from 'react-spring/three';
import { Canvas, useFrame } from 'react-three-fiber';

YellowBox.ignoreWarnings([
  'window.performance.clearMeasures is not implemented',
  'window.performance.clearMarks is not implemented',
  'window.performance.measure is not implemented',
  'window.performance.mark is not implemented',
]);

window.performance.clearMeasures = () => { }
window.performance.clearMarks = () => { }
window.performance.measure = () => { }
window.performance.mark = () => { }

const Cube: React.FC = () => {

  const boxRef = useRef()
  const [hovered, setHovered] = useState(true)
  const props = useSpring({
    scale: hovered ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? "orange" : 'green',
  })

  useFrame(() => (boxRef.current.rotation.y += 0.01, boxRef.current.rotation.x += 0.01))

  return (
    <a.mesh
      ref={boxRef}
      position={[0, 0, 0]}
      scale={props.scale}
      onClick={() => setHovered(!hovered)}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshPhysicalMaterial attach="material" color={props.color} opacity={1} />
    </a.mesh>
  )
}

const CanvasCube: React.FC = () => {


  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 0]} intensity={0.6} />
      <Cube />
    </Canvas>
  )
}

export default CanvasCube