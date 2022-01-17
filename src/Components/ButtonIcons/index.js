import React from 'react';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';

import { TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';

function ButtonIcons({ name, size, color, onPress }) {
    return(
        <TouchableWithoutFeedback onPress={onPress} style={styles.container}>
            <Fontisto name={name} size={size} color={color}/>
        </TouchableWithoutFeedback>
    );
}

export default ButtonIcons;