import React, { useEffect, useState, useRef } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import Fontisto from "react-native-vector-icons/dist/Fontisto";
import Video from "react-native-video";

import { View, FlatList, Text, TouchableOpacity } from "react-native";
import Button from "../../Components/Button";
import { styles } from "./styles";
import theme from "../../global/styles/theme";

function SelectDayEndHour({ route, navigation }) {
  const { film } = route.params;

  const dayRef = useRef(null);

  const [days, setDays] = useState([
    {
      id: "2",
      name: "Seg",
      completeName: "Segunda",
      number: "01",
      backgroundColor: theme.colors.nave,
    },
    {
      id: "3",
      name: "Ter",
      completeName: "Terça",
      number: "02",

      backgroundColor: theme.colors.nave,
    },
    {
      id: "4",
      name: "Qua",
      completeName: "Quarta",
      number: "03",

      backgroundColor: theme.colors.nave,
    },
    {
      id: "5",
      name: "Qui",
      completeName: "Quinta",
      number: "04",

      backgroundColor: theme.colors.nave,
    },
    {
      id: "6",
      name: "Sex",
      completeName: "Sexta",
      number: "05",

      backgroundColor: theme.colors.nave,
    },
    {
      id: "7",
      name: "Sab",
      completeName: "Sábado",
      number: "06",

      backgroundColor: theme.colors.nave,
    },
    {
      id: "1",
      name: "Dom",
      completeName: "Domingo",
      number: "07",

      backgroundColor: theme.colors.nave,
    },
  ]);

  const [hours, setHours] = useState([
    { id: 1, value: "12:00", backgroundColor: theme.colors.nave },
    { id: 2, value: "13:00", backgroundColor: theme.colors.nave },
  ]);

  const [daysEndOursSelected, setDaysEndHoursSelected] = useState({
    id: "2",
    name: "",
    completeName: "",
    number: "01",
    hour: { id: 1, value: "12:00", backgroundColor: theme.colors.nave },
    backgroundColor: theme.colors.nave,
  });

  //Estados da animação
  const rotateHorizontalVideo = useSharedValue(0);
  const rotateHorizontalVideoAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateY: withTiming(`${rotateHorizontalVideo.value}deg`, {
            duration: 800,
          }),
        },
      ],
    };
  });

  const AnimatedVideo = Animated.createAnimatedComponent(Video);

  useEffect(() => {
    handleInitialAnimation();
  }, []);

  function handleInitialAnimation() {
    rotateHorizontalVideo.value == 180
      ? (rotateHorizontalVideo.value = 0)
      : (rotateHorizontalVideo.value = 180);
  }

  function handleNavigation() {
    navigation.navigate("SelectAccent", { film });
  }

  function handleClickDay(item) {
    item.backgroundColor === theme.colors.nave
      ? (item.backgroundColor = theme.colors.blue)
      : (item.backgroundColor = theme.colors.nave);

    const array = days.filter((index) => {
      if (index == item) {
        days[index] = item;
        setDaysEndHoursSelected({
          id: item.id,
          name: item.name,
          completeName: item.completeName,
          number: item.number,
          hour: { id: 0, value: "", backgroundColor: "" },
          backgroundColor: item.backgroundColor,
        });
      } else {
        const day = index;
        day.backgroundColor = theme.colors.nave;
        days[index] = day;
      }
      return days;
    });
    setDays(array);
  }

  function handleClickHour(item) {
    item.backgroundColor === theme.colors.nave
      ? (item.backgroundColor = theme.colors.blue)
      : (item.backgroundColor = theme.colors.nave);

    const array = hours.filter((index) => {
      if (index == item) {
        hours[index] = item;
        const daysEndOursSelectedAux = daysEndOursSelected;
        daysEndOursSelectedAux.hour = item;
        setDaysEndHoursSelected(daysEndOursSelectedAux);
      } else {
        const hour = index;
        hour.backgroundColor = theme.colors.nave;
        hours[index] = hour;
      }
      return hours;
    });
    setHours(array);
  }

  return (
    <View style={styles.background}>
      <Text style={styles.comment}>Trailer</Text>
      <Animated.View
        style={[styles.containerVideo, rotateHorizontalVideoAnimated]}
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
          renderItem={({ item }) => (
            <TouchableOpacity
              ref={dayRef}
              onPress={() => handleClickDay(item)}
              style={[
                styles.days,
                { backgroundColor: daysEndOursSelected.backgroundColor },
              ]}
            >
              <Text style={styles.content}>{item.number}</Text>
              <Text style={styles.content}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.containerHours}>
          {hours.map((hour) => (
            <TouchableOpacity
              style={[
                styles.hour,
                { backgroundColor: daysEndOursSelected.hour.backgroundColor },
              ]}
              key={hour.id}
              onPress={() => handleClickHour(hour)}
            >
              <Text style={styles.content}>{hour.value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.footer}>
        <Button onPress={handleNavigation}>Continuar</Button>
      </View>
    </View>
  );
}

export default SelectDayEndHour;
