import React from 'react';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

import { TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';

function ButtonIcons({ name, size, color, onPress }) {
    return(
        <TouchableWithoutFeedback onPress={onPress} style={styles.container}>
            <MaterialIcons name={name} size={size} color={color}/>
        </TouchableWithoutFeedback>
    );
}

export default ButtonIcons;