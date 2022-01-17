import React from 'react';
import { View, Text } from 'react-native';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import { styles } from './styles';

function Select({ route }) {
    const { film } = route.params;

    return(
        <View style={styles.background}>
            <Fontisto name="film" color="white" size={32}/>
            <Text style={styles.comment}>{film.text}</Text>
        </View>
    );
} 

export default Select;