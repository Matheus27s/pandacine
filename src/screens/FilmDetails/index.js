import React from 'react';
import { View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

import Button from '../../Components/Button';
import { styles } from './styles';

function FilmDetails() {
    return(
        <View style={styles.background}>
            <MaterialIcons name="color-lens" color="white" size={32}/>
            <Text style={styles.comment}>
                Caro colega, é com muita alegria que hoje lhe damos as boas-vindas!</Text>
            <Button>Continuar</Button>
        </View>
    );
} 

export default FilmDetails;