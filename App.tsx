import React from 'react';
import Cube from './src/pages/Home'
import { Canvas } from 'react-three-fiber'
import { YellowBox, View, Text, ScrollView } from 'react-native';

YellowBox.ignoreWarnings([
  'window.performance.clearMeasures is not implemented',
  'window.performance.clearMarks is not implemented',
  'window.performance.measure is not implemented',
  'window.performance.mark is not implemented',
]);

export default function App() {

  return (
    <ScrollView style={{ flex: 1, paddingTop: 30 }}>
      <View>
        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', color: '#aaa' }}>Loja de tenis</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Canvas style={{ height: 150, width: 150 }}>
          <ambientLight />
          <pointLight position={[-3, 5, 0]} intensity={0.4} />
          <Cube position={[0, 0, 0]} />
        </Canvas>
        <Canvas style={{ height: 150, width: 150 }}>
          <ambientLight />
          <pointLight position={[-3, 5, 0]} intensity={0.4} />
          <Cube position={[0, 0, 0]} />
        </Canvas>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Canvas style={{ height: 150, width: 150 }}>
          <ambientLight />
          <pointLight position={[-3, 5, 0]} intensity={0.4} />
          <Cube position={[0, 0, 0]} />
        </Canvas>
        <Canvas style={{ height: 150, width: 150 }}>
          <ambientLight />
          <pointLight position={[-3, 5, 0]} intensity={0.4} />
          <Cube position={[0, 0, 0]} />
        </Canvas>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Canvas style={{ height: 150, width: 150 }}>
          <ambientLight />
          <pointLight position={[-3, 5, 0]} intensity={0.4} />
          <Cube position={[0, 0, 0]} />
        </Canvas>
        <Canvas style={{ height: 150, width: 150 }}>
          <ambientLight />
          <pointLight position={[-3, 5, 0]} intensity={0.4} />
          <Cube position={[0, 0, 0]} />
        </Canvas>
      </View>

    </ScrollView>
  );
}

