import React, { useEffect, useState } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Video from 'react-native-video';

import { FlatList, View, Text } from 'react-native';
import Button from '../../Components/Button';
import { styles } from './styles';

function SelectAccent({ route, navigation }) {
    const { film } = route.params;

    const AnimatedVideo = Animated.createAnimatedComponent(Video);
    const rotateVerticalVideo = useSharedValue(0);
    const rotateVerticalVideoAnimated = useAnimatedStyle(() => {
        return {
            transform: [
                { rotateX: withTiming(`${rotateVerticalVideo.value}deg`, { duration: 500 }) }
            ],
        }
    });
    
    const sizeContainerAccents = useSharedValue(500);
    const animatedSizeContainerAccents = useAnimatedStyle(() => {
        return {
            height: withTiming(
                sizeContainerAccents.value, {
                duration: 500,
            }),
        }
    });

    const sizeAccent = useSharedValue(0);
    const animatedSizeAccent = useAnimatedStyle(() => {
        return {
          width: withTiming(
            sizeAccent.value, {
            duration: 500,
          }),
          height: withTiming(
            sizeAccent.value, {
            duration: 500,
          }),
        }
      });

    useEffect(() => {
        handleInitialAnimation();
    }, []);

    function handleInitialAnimation() {
        rotateVerticalVideo.value == -80 ? rotateVerticalVideo.value = 0 : rotateVerticalVideo.value = -80;
        sizeAccent.value == 30 ? sizeAccent.value = 0 : sizeAccent.value = 30;
    }

    function handleNavigation() {
        navigation.navigate('SelectDayEndHour', { film });
    }

    const handleAccent = (accent) => {
        if (accent.color === "#C67E3B") {
          return
        }
    
        accent.color === "#3549FD" ?
          accent.color = "#33CC89" :
          accent.color = "#3549FD"
    
        const array = listAccents.filter((index) => {
          if (index == accent) {
            listAccents[index] = accent;
          }
          return listAccents;
        });
        setListAccents(array);
      }

    const [listAccents, setListAccents] = useState([
        { id: '1', color: '#3549FD' },
        { id: '2', color: '#3549FD' },
        { id: '3', color: '#3549FD' },
        { id: '4', color: '#C67E3B' },
        { id: '5', color: '#3549FD' },
        { id: '6', color: '#3549FD' },
        { id: '7', color: '#3549FD' },
        { id: '8', color: '#3549FD' },
        { id: '9', color: '#3549FD' },
        { id: '10', color: '#3549FD' },
        { id: '11', color: '#3549FD' },
        { id: '12', color: '#3549FD' },
        { id: '13', color: '#3549FD' },
        { id: '14', color: '#C67E3B' },
        { id: '15', color: '#3549FD' },
        { id: '16', color: '#C67E3B' },
        { id: '17', color: '#3549FD' },
        { id: '18', color: '#3549FD' },
        { id: '19', color: '#3549FD' },
        { id: '20', color: '#3549FD' },
        { id: '21', color: '#3549FD' },
        { id: '22', color: '#3549FD' },
        { id: '23', color: '#3549FD' },
        { id: '24', color: '#C67E3B' },
        { id: '25', color: '#C67E3B' },
        { id: '26', color: '#3549FD' },
        { id: '27', color: '#3549FD' },
        { id: '28', color: '#3549FD' },
        { id: '29', color: '#3549FD' },
        { id: '30', color: '#3549FD' },
        { id: '31', color: '#3549FD' },
        { id: '32', color: '#3549FD' },
        { id: '34', color: '#3549FD' },
        { id: '35', color: '#3549FD' },
        { id: '36', color: '#3549FD' },
    ]);

    return (
        <View style={styles.background}>
            <Text style={styles.comment}>Trailer</Text>
            <Animated.View
                style={[styles.containerVideo, rotateVerticalVideoAnimated]}
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
            <Animated.View
                style={[
                    styles.containerAccents,
                    animatedSizeContainerAccents
                ]}
            >
                <FlatList
                    contentContainerStyle={styles.accentsContainer}
                    numColumns={7}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={listAccents}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <Animated.View
                            style={[styles.shadow, { backgroundColor: item.color }, animatedSizeAccent]}
                            onStartShouldSetResponder={() => handleAccent(item)}>
                        </Animated.View>
                    }
                />
            </Animated.View>
            <Text style={styles.comment}></Text>
            <View style={styles.footer}>
                <Button onPress={handleNavigation}>Voltar</Button>
            </View>
        </View>
    );
}

export default SelectAccent;