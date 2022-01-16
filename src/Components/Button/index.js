import React from 'react';

import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { styles } from './styles';

function Button({ children, onPress }) {
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{children}</Text>
        </TouchableOpacity>
    );
}

export default Button;