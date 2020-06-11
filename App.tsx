import React from 'react';
import { View } from 'react-native';
import CanvasCube from './src/pages/CanvasCube';

export default function App() {

  return (
    <View style={{ flex: 1, backgroundColor: '#aaa' }}>
      <View style={{ flex: 0.5 }}>
        <CanvasCube />
      </View>
    </View>
  );
}

