import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListProducts from '../pages/ListProducts'
import DetailProduct from '../pages/DetailProduct'

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ListProducts" component={ListProducts} />
        <Stack.Screen name="DetailProduct" component={DetailProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
