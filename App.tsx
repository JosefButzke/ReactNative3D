import React from 'react';
import { Dimensions, View } from 'react-native';

import CanvasCube from './src/pages/CanvasCube';
import Graphics from './src/pages/Graphics';

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

export default function App() {

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1 }}>
        <CanvasCube />
      </View>
      <View style={{ flex: 1 }}>
        <Graphics />
      </View>

    </View>
  );
}

