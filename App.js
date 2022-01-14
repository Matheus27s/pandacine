import React, { useState } from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';

import { styles } from './src/global/styles/styles';

function App() {
  const [ value ] = useState('Bem vindo ao React Native!');

  return (
    <SafeAreaView style={styles.background}>
      <StatusBar barStyle='light-content' />
      <Text style={styles.title}>{value}</Text>
      <Text style={styles.content}>{value}</Text>
      <Text style={styles.comment}>{value}</Text>
    </SafeAreaView>
  );
};

export default App;
