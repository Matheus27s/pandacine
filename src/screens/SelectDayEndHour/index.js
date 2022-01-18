import React, { useEffect, useState } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import Video from 'react-native-video';

import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import Button from '../../Components/Button';
import { styles } from './styles';
import theme from '../../global/styles/theme';

function SelectDayEndHour({ route, navigation }) {
    const { film } = route.params;

    const [days, setDays] = useState([
        { id: '2', name: 'Seg', number: '01', hours: ['12:00', '13:00'] },
        { id: '3', name: 'Ter', number: '02', hours: ['12:00'] },
        { id: '4', name: 'Qua', number: '03', hours: ['12:00', '13:00'] },
        { id: '5', name: 'Qui', number: '04', hours: ['12:00', '13:00'] },
        { id: '6', name: 'Sex', number: '05', hours: ['12:00'] },
        { id: '7', name: 'Sab', number: '06', hours: ['12:00', '13:00'] },
        { id: '1', name: 'Dom', number: '07', hours: ['12:00', '13:00'] },
    ]);

    const [listOurs, setListOurs] = useState([
        '12:00', '15:00', '19:30'
    ]);

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
            <Text style={styles.content}>Escolha o melhor dia e horário</Text>
            <View style={styles.containerSelect}>
                <FlatList
                    horizontal={true}
                    contentContainerStyle={styles.containerDays}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={days}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={styles.days}>
                            <Text style={styles.content}>{item.number}</Text>
                            <Text style={styles.content}>{item.name}</Text>
                        </TouchableOpacity>
                    }
                />
                <View style={styles.containerHours}>
                    {
                        listOurs.map(hour =>
                            <View style={styles.hour} key={hour}>
                                <Text style={styles.content}>{hour}</Text>
                            </View>
                        )
                    }
                </View>
            </View>
            <View style={styles.containerCheck}>
                <Text style={[styles.content,{ marginRight: 10 }]}>Segunda, 15:00hrs.</Text>
                <Fontisto name='wink' size={24} color={theme.colors.green} />
            </View>
            <View style={styles.footer}>
                <Button onPress={handleNavigation}>Continuar</Button>
            </View>
        </View>
    );
}

export default SelectDayEndHour;