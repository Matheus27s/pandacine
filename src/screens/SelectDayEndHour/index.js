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
      id: 2,
      name: "Seg",
      completeName: "Segunda",
      number: 1,
      selected: false,
      hours: [
        { id: 1, value: "12:00", selected: false },
        { id: 2, value: "13:45", selected: false },
        { id: 3, value: "15:00", selected: false },
        { id: 4, value: "18:00", selected: false },
        { id: 5, value: "20:45", selected: false },
        { id: 6, value: "22:00", selected: false },
      ],
    },
    {
      id: 3,
      name: "Ter",
      completeName: "Terça",
      number: 2,
      selected: false,
      hours: [
        { id: 1, value: "12:00", selected: false },
        { id: 2, value: "13:45", selected: false },
        { id: 3, value: "15:00", selected: false },
      ],
    },
    {
      id: 4,
      name: "Qua",
      completeName: "Quarta",
      number: 3,
      selected: false,
      hours: [
        { id: 1, value: "12:00", selected: false },
        { id: 2, value: "13:45", selected: false },
        { id: 3, value: "15:00", selected: false },
        { id: 4, value: "18:00", selected: false },
        { id: 5, value: "20:45", selected: false },
      ],
    },
    {
      id: 5,
      name: "Qui",
      completeName: "Quinta",
      number: 4,
      selected: false,
      hours: [
        { id: 1, value: "12:00", selected: false },
        { id: 2, value: "13:45", selected: false },
        { id: 3, value: "15:00", selected: false },
        { id: 4, value: "18:00", selected: false },
      ],
    },
    {
      id: 6,
      name: "Sex",
      completeName: "Sexta",
      number: 5,
      selected: false,
      hours: [
        { id: 1, value: "12:00", selected: false },
        { id: 2, value: "13:45", selected: false },
        { id: 3, value: "15:00", selected: false },
        { id: 4, value: "18:00", selected: false },
        { id: 5, value: "20:45", selected: false },
      ],
    },
    {
      id: 7,
      name: "Sab",
      completeName: "Sábado",
      number: 6,
      selected: false,
      hours: [
        { id: 1, value: "12:00", selected: false },
        { id: 2, value: "13:45", selected: false },
        { id: 3, value: "15:00", selected: false },
        { id: 4, value: "18:00", selected: false },
        { id: 5, value: "20:45", selected: false },
        { id: 6, value: "22:00", selected: false },
      ],
    },
    {
      id: 1,
      name: "Dom",
      completeName: "Domingo",
      number: 7,
      selected: false,
      hours: [
        { id: 1, value: "12:00", selected: false },
        { id: 2, value: "13:45", selected: false },
        { id: 3, value: "15:00", selected: false },
        { id: 4, value: "18:00", selected: false },
      ],
    },
  ]);

  const [hours, setHours] = useState([]);
  const [daysEndOursSelected, setDaysEndHoursSelected] = useState({
    id: 0,
    name: "",
    completeName: "",
    number: 0,
    hour: { id: 0, value: "", backgroundColor: "" },
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
    item.selected ? (item.selected = false) : (item.selected = true);
    setHours(item.hours);

    const array = days.filter((index) => {
      if (index == item) {
        days[index] = item;
        setDaysEndHoursSelected({
          id: item.id,
          name: item.name,
          completeName: item.completeName,
          number: item.number,
          hours: [{ id: 0, value: "", backgroundColor: "" }],
        });
      } else {
        const day = index;
        day.selected = false;
        days[index] = day;
      }
      return days;
    });
    setDays(array);
  }

  function handleClickHour(item) {
    item.selected ? (item.selected = false) : (item.selected = true);

    const array = hours.filter((index) => {
      if (index == item) {
        hours[index] = item;
        const daysEndOursSelectedAux = daysEndOursSelected;
        daysEndOursSelectedAux.hour = item;
        setDaysEndHoursSelected(daysEndOursSelectedAux);
      } else {
        const hour = index;
        hour.selected = false;
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
                {
                  backgroundColor: item.selected
                    ? theme.colors.blue
                    : theme.colors.blue_dark,
                  marginLeft: item.number !== 1 ? 16 : 0,
                },
              ]}
            >
              <Text style={styles.content}>{item.number}</Text>
              <View
                style={{
                  height: 1,
                  width: 32,
                  marginVertical: 8,
                  backgroundColor: theme.colors.nave,
                }}
              />
              <Text style={styles.content}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />

        <FlatList
          horizontal={true}
          contentContainerStyle={styles.containerHours}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={hours}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.hour,
                {
                  backgroundColor: item.selected
                    ? theme.colors.blue
                    : theme.colors.blue_dark,
                  marginLeft: item.number !== 1 ? 8 : 0,
                },
              ]}
              key={item.id}
              onPress={() => handleClickHour(item)}
            >
              <Text style={styles.content}>{item.value}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.footer}>
        <Button onPress={handleNavigation}>Continuar</Button>
      </View>
    </View>
  );
}

export default SelectDayEndHour;
