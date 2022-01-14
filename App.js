import React, { useState } from 'react';
import { enableFreeze } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigation from './src/routes';

function App() {
  const [value] = useState('Bem vindo ao React Native!');
  enableFreeze(true);

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
