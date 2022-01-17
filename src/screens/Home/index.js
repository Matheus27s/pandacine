import React from 'react';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';

import { ScrollView, View, Text, ImageBackground } from 'react-native';
import Button from '../../Components/Button';

import theme from '../../global/styles/theme';
import { styles } from './styles';

function Home({ navigation }) {

    function handleNavigation() {
        navigation.navigate('Dashboard');
    }

    return (
        <ScrollView
            style={styles.background}>
            <View style={styles.header}>
                <Fontisto name='ticket' size={32} color={theme.colors.green} />
                <View>
                    <Text style={[styles.title, { marginLeft: 10 }]}>Onde a magia do cinema</Text>
                    <Text style={[styles.title, { marginLeft: 10 }]}>acontece!</Text>
                </View>
            </View>
            <View style={styles.header}>
                <Text style={styles.title}>Promoções! </Text>
                <Fontisto name='fire' size={24} color={theme.colors.red} />
            </View>
            <ImageBackground
                source={require('../../../assets/images/infohome/meia-entrada.jpeg')}
                style={styles.image}
                imageStyle={{
                    borderRadius: 12
                }}
                resizeMode="contain"
            >
            </ImageBackground>
            <ImageBackground
                source={require('../../../assets/images/infohome/promo-terca.png')}
                style={styles.image}
                imageStyle={{
                    borderRadius: 12
                }}
                resizeMode="contain"
            >
            </ImageBackground>
            <View style={styles.footer}>
                <Button onPress={handleNavigation}>Filmes em cartaz</Button>
            </View>
        </ScrollView>
    );
}

export default Home;