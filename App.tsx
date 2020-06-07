import React from 'react';
import Home from './src/pages/Home'
import { Canvas } from 'react-three-fiber'
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'window.performance.clearMeasures is not implemented',
  'window.performance.clearMarks is not implemented',
  'window.performance.measure is not implemented',
  'window.performance.mark is not implemented',
]);

export default function App() {
  return (
    <Canvas>
      <Home />
      <mesh position={[0, 0, 0]}>
        <planeBufferGeometry attach="geometry" args={[3, 3]} />
        <meshBasicMaterial attach="material" color='#eee' opacity={1} />
      </mesh>
    </Canvas>
  );
}

