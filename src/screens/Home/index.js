import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

import Button from '../../Components/Button';
import InfoHome from '../../Components/Card/InfoHome';

import { styles } from './styles';

function Home({ navigation }) {

    function handleNavigation() {
        navigation.navigate('Dashboard');
    }

    return(
        <ScrollView style={styles.background}>
            <Text style={styles.title}>Onde a magia do cinema acontece!</Text>
            <Text style={styles.title}>Promoções</Text>
            <InfoHome 
                title="Carteirinha de estudante"
                onPress={()=>{}}
            />
            <InfoHome 
                title="Carteirinha de estudante"
                onPress={()=>{}}
            />
            <InfoHome 
                title="Carteirinha de estudante"
                onPress={()=>{}}
            />            
            <Button onPress={handleNavigation}>Filmes em cartaz</Button>
        </ScrollView>
    );
} 

export default Home;