import React from 'react';
import { View } from 'react-native';
import CanvasCube from './src/pages/CanvasCube';

export default function App() {

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <CanvasCube />
      </View>
    </View>
  );
}

