import React from 'react';

import { View, Text } from 'react-native';
import { styles } from './styles';

function Home() {
    return(
        <View style={styles.background}>
            <Text style={styles.comment}>Home Page!</Text>
        </View>
    );
} 

export default Home;