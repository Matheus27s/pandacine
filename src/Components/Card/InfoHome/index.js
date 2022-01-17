import React from 'react';

import { View, ImageBackground, Text } from 'react-native';
import { styles } from './styles';

function InfoHome({ title, onPress }) {
    return (
        <>
            <Text style={styles.title}>{title}</Text>
            <ImageBackground
                source={require('../../../../assets/images/infohome/meia-entrada.jpeg')}
                style={styles.image}
                imageStyle={{
                    borderRadius: 12
                }}
                resizeMode="contain"
            >
            </ImageBackground>
        </>
    );
}

export default InfoHome;