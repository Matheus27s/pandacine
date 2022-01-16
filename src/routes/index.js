import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Dashboard from '../screens/Dashboard';

const Stack = createNativeStackNavigator();

function StackNavigation() {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    );
}

export default StackNavigation;