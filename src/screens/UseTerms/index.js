import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

import Button from '../../Components/Button';
import { styles } from './styles';

function UseTerms({ navigation }) {
    function handleNavigation() {
        navigation.navigate('Home');
    }
    return(
        <View style={styles.background}>
            <MaterialIcons name="desktop-windows" color="white" size={32}/>
            <Text style={styles.comment}>
                Caro colega, é com muita alegria que hoje lhe damos as boas-vindas! 
                Saiba que todos estamos ansiosos para conhecer melhor você e o seu 
                trabalho, pois com certeza será uma valiosa aquisição para a nossa equipe.
                Aqui você encontrará todo o apoio que necessite, e uma equipe de trabalho 
                que também funciona como uma pequena família, e nesse espírito lhe damos as 
                boas-vindas com os braços abertos!</Text>
            <Button onPress={handleNavigation}>Aceitar termo</Button>
        </View>
    );
} 

export default UseTerms;