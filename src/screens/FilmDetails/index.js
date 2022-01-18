import React from 'react';
import { View, Text } from 'react-native';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';

import Button from '../../Components/Button';
import { styles } from './styles';

function FilmDetails({ route, navigation }) {
    const { film } = route.params;

    function onNavigation() {
        navigation.navigate('SelectDayEndHour', { film });
    }

    return(
        <View style={styles.background}>
            <Fontisto name="film" color="white" size={32}/>
            <Text style={styles.comment}>{film.text}</Text>
            <Button onPress={onNavigation}>Continuar</Button>
        </View>
    );
} 

export default FilmDetails;