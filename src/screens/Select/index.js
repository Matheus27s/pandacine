import React, { useEffect } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Video from 'react-native-video';

import { View, Text } from 'react-native';
import Button from '../../Components/Button';
import { styles } from './styles';

function Select({ route, navigation }) {
    const { film } = route.params;

    //Estados da animação
    const rotateHorizontalVideo = useSharedValue(0);
    const rotateHorizontalVideoAnimated = useAnimatedStyle(() => {
        return {
            transform: [
                { rotateY: withTiming(`${rotateHorizontalVideo.value}deg`, { duration: 800 }) }
            ],
        }
    });

    const AnimatedVideo = Animated.createAnimatedComponent(Video);

    useEffect(() => {
        handleInitialAnimation();
    }, []);

    function handleInitialAnimation() {
        rotateHorizontalVideo.value == 180 ? rotateHorizontalVideo.value = 0 : rotateHorizontalVideo.value = 180;
    }

    function handleNavigation() {
        navigation.navigate('SelectAccent', { film });
    }

    return (
        <View style={styles.background}>
            <Text style={styles.comment}>Trailer</Text>
            <Animated.View
                style={[styles.containerVideo, rotateHorizontalVideoAnimated]}
            >
                <AnimatedVideo
                    source={require('../../../assets/images/infohome/video01.mp4')}
                    ref={(ref) => { (ref) => { } }}
                    onBuffer={() => { }}
                    onError={() => { }}
                    repeat={true}
                    resizeMode="contain"
                    style={styles.video}
                />
            </Animated.View>
            <Text style={styles.comment}></Text>
            <View style={styles.footer}>
                <Button onPress={handleNavigation}>Continuar</Button>
            </View>
        </View>
    );
}

export default Select;