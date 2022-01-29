import React, { useEffect, useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import Video from "react-native-video";
import AnimatedNumbers from "react-native-animated-numbers";

import { FlatList, View, Text } from "react-native";
import Button from "../../Components/Button";
import { styles } from "./styles";
import theme from "../../global/styles/theme";

function SelectAccent({ route, navigation }) {
  const ACCENT_VALUE = 12;

  const { film } = route.params;

  const [price, setPrice] = useState(0);

  const AnimatedVideo = Animated.createAnimatedComponent(Video);
  const rotateVerticalVideo = useSharedValue(0);
  const rotateVerticalVideoAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateX: withTiming(`${rotateVerticalVideo.value}deg`, {
            duration: 500,
          }),
        },
      ],
    };
  });

  const sizeContainerAccents = useSharedValue(500);
  const animatedSizeContainerAccents = useAnimatedStyle(() => {
    return {
      height: withTiming(sizeContainerAccents.value, {
        duration: 500,
      }),
    };
  });

  const sizeAccent = useSharedValue(0);
  const animatedSizeAccent = useAnimatedStyle(() => {
    return {
      width: withTiming(sizeAccent.value, {
        duration: 500,
      }),
      height: withTiming(sizeAccent.value, {
        duration: 500,
      }),
    };
  });

  useEffect(() => {
    handleInitialAnimation();
  }, []);

  function handleInitialAnimation() {
    rotateVerticalVideo.value == -80
      ? (rotateVerticalVideo.value = 0)
      : (rotateVerticalVideo.value = -80);
    sizeAccent.value == 30 ? (sizeAccent.value = 0) : (sizeAccent.value = 30);
  }

  function handleNavigation() {
    navigation.navigate("Finish", { film });
  }

  const handleAccent = (accent) => {
    if (
      accent.color === theme.colors.orange ||
      accent.color === theme.colors.nave
    ) {
      return;
    }

    if (accent.color === theme.colors.blue) {
      accent.color = theme.colors.green;
      setPrice(price + ACCENT_VALUE);
    } else {
      accent.color = theme.colors.blue;
      setPrice(price - ACCENT_VALUE);
    }

    const array = listAccents.filter((index) => {
      if (index == accent) {
        listAccents[index] = accent;
      }
      return listAccents;
    });
    setListAccents(array);
  };

  const [listAccents, setListAccents] = useState([
    { id: 1, color: theme.colors.nave },
    { id: 2, color: theme.colors.blue },
    { id: 3, color: theme.colors.blue },
    { id: 4, color: theme.colors.orange },
    { id: 5, color: theme.colors.blue },
    { id: 6, color: theme.colors.blue },
    { id: 7, color: theme.colors.nave },
    { id: 8, color: theme.colors.blue },
    { id: 9, color: theme.colors.blue },
    { id: 10, color: theme.colors.blue },
    { id: 11, color: theme.colors.blue },
    { id: 12, color: theme.colors.blue },
    { id: 13, color: theme.colors.blue },
    { id: 14, color: theme.colors.orange },
    { id: 15, color: theme.colors.blue },
    { id: 16, color: theme.colors.orange },
    { id: 17, color: theme.colors.blue },
    { id: 18, color: theme.colors.blue },
    { id: 19, color: theme.colors.blue },
    { id: 20, color: theme.colors.blue },
    { id: 21, color: theme.colors.blue },
    { id: 22, color: theme.colors.blue },
    { id: 23, color: theme.colors.blue },
    { id: 24, color: theme.colors.orange },
    { id: 25, color: theme.colors.orange },
    { id: 26, color: theme.colors.blue },
    { id: 27, color: theme.colors.blue },
    { id: 28, color: theme.colors.blue },
    { id: 29, color: theme.colors.blue },
    { id: 30, color: theme.colors.blue },
    { id: 31, color: theme.colors.blue },
    { id: 32, color: theme.colors.blue },
    { id: 34, color: theme.colors.blue },
    { id: 35, color: theme.colors.blue },
    { id: 36, color: theme.colors.blue },
    { id: 37, color: theme.colors.blue },
    { id: 38, color: theme.colors.blue },
    { id: 39, color: theme.colors.blue },
    { id: 40, color: theme.colors.blue },
    { id: 41, color: theme.colors.blue },
    { id: 42, color: theme.colors.blue },
    { id: 43, color: theme.colors.blue },
    { id: 44, color: theme.colors.blue },
    { id: 45, color: theme.colors.blue },
    { id: 46, color: theme.colors.nave },
    { id: 47, color: theme.colors.nave },
    { id: 48, color: theme.colors.nave },
    { id: 49, color: theme.colors.blue },
    { id: 50, color: theme.colors.blue },
  ]);

  return (
    <View style={styles.background}>
      <Text style={styles.comment}>Trailer</Text>
      <Animated.View
        style={[styles.containerVideo, rotateVerticalVideoAnimated]}
      >
        <AnimatedVideo
          source={require("../../../assets/images/infohome/video01.mp4")}
          ref={(ref) => {
            (ref) => {};
          }}
          onBuffer={() => {}}
          onError={() => {}}
          repeat={true}
          resizeMode="contain"
          style={styles.video}
        />
      </Animated.View>
      <Animated.View
        style={[styles.containerAccents, animatedSizeContainerAccents]}
      >
        <FlatList
          contentContainerStyle={styles.accentsContainer}
          numColumns={7}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={listAccents}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Animated.View
              style={[
                styles.shadow,
                { backgroundColor: item.color },
                animatedSizeAccent,
              ]}
              onStartShouldSetResponder={() => handleAccent(item)}
            ></Animated.View>
          )}
        />
      </Animated.View>
      <Text style={styles.comment}></Text>
      <View style={styles.containerLablesAccents}>
        <View style={styles.containerLabel}>
          <View
            style={[
              styles.iconeLabel,
              { backgroundColor: theme.colors.orange },
            ]}
          ></View>
          <Text style={styles.comment}>Ocupado</Text>
        </View>
        <View style={styles.containerLabel}>
          <View
            style={[styles.iconeLabel, { backgroundColor: theme.colors.blue }]}
          ></View>
          <Text style={styles.comment}>Livre</Text>
        </View>
        <View style={styles.containerLabel}>
          <View
            style={[styles.iconeLabel, { backgroundColor: theme.colors.green }]}
          ></View>
          <Text style={styles.comment}>Selecionado</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.containerTotalPrice}>
          <Text style={styles.comment}>Total a pagar</Text>
          <View style={styles.contentPrice}>
            <Text style={styles.title}>R$ </Text>
            <AnimatedNumbers
              includeComma
              animateToNumber={price}
              fontStyle={styles.title}
              animationDuration={500}
            />
            <Text style={styles.title}>,00</Text>
          </View>
        </View>
        <Button onPress={handleNavigation}>Finalizar</Button>
      </View>
    </View>
  );
}

export default SelectAccent;
