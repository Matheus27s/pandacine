import React, { useState, useRef } from "react";
import Fontisto from "react-native-vector-icons/dist/Fontisto";
import Carousel from "react-native-snap-carousel";
import theme from "../../global/styles/theme";

import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";

import { styles } from "./styles";

function Dashboard({ navigation }) {
  const [films, setFilms] = useState([
    {
      title: "O Justiceiro",
      text: "Após o assassinato de sua família, Frank Castle está traumatizado e sendo caçado. No submundo do crime, ele se tornará aquele conhecido como O Justiceiro",
      release: 2018,
      img: "https://sujeitoprogramador.com/wp-content/uploads/2020/05/background.jpg",
    },
    {
      title: "Bad Boys for life",
      text: "Terceiro episódio das histórias dos policiais Burnett (Martin Lawrence) e Lowrey (Will Smith), que devem encontrar e prender os mais perigosos traficantes de drogas da cidade.",
      release: 2020,
      img: "https://sujeitoprogramador.com/wp-content/uploads/2020/05/badboy.jpg",
    },
    {
      title: "Viúva Negra",
      text: "Em Viúva Negra, após seu nascimento, Natasha Romanoff (Scarlett Johansson) é dada à KGB, que a prepara para se tornar sua agente definitiva.",
      release: 2020,
      img: "https://sujeitoprogramador.com/wp-content/uploads/2020/05/blackwidow.jpg",
    },
    {
      title: "Top Gun: MAVERICK",
      text: "Em Top Gun: Maverick, depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, o piloto à moda antiga Maverick (Tom Cruise) enfrenta drones e prova que o fator humano ainda é fundamental no mundo contemporâneo das guerras tecnológicas.",
      release: 2020,
      img: "https://sujeitoprogramador.com/wp-content/uploads/2020/05/topgun.jpeg",
    },
    {
      title: "BloodShot",
      text: "Bloodshot é um ex-soldado com poderes especiais: o de regeneração e a capacidade de se metamorfosear. ",
      release: 2020,
      img: "https://sujeitoprogramador.com/wp-content/uploads/2020/05/blood.jpg",
    },
    {
      title: "Free Guy",
      text: "Um caixa de banco preso a uma entediante rotina tem sua vida virada de cabeça para baixo quando ele descobre que é personagem em um brutalmente realista vídeo game de mundo aberto.",
      release: 2020,
      img: "https://sujeitoprogramador.com/wp-content/uploads/2020/05/freeguy.jpg",
    },
  ]);
  const [background, setBackground] = useState(films[0].img);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const _renderItem = ({ item }) => {
    function onNavigation(item) {
      navigation.navigate("FilmDetails", { film: item });
    }

    return (
      <TouchableOpacity onPress={() => onNavigation(item)}>
        <Image style={styles.carouselImage} source={{ uri: item.img }} />
        <Fontisto
          name="play"
          size={24}
          color="#FFF"
          style={styles.carouselIcon}
        />
        <View style={styles.carouselInfo}>
          <Text style={styles.content}>{item.title}</Text>
          <View style={styles.carouselContainerStars}>
            <Fontisto
              name="star"
              size={20}
              color="yellow"
              style={{ marginRight: 6 }}
            />
            <Fontisto
              name="star"
              size={20}
              color="yellow"
              style={{ marginRight: 6 }}
            />
            <Fontisto
              name="star"
              size={20}
              color="yellow"
              style={{ marginRight: 6 }}
            />
            <Fontisto
              name="star"
              size={20}
              color="grey"
              style={{ marginRight: 6 }}
            />
            <Fontisto
              name="star"
              size={20}
              color="grey"
              style={{ marginRight: 6 }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.background}>
      <View style={styles.absoluteFill}>
        <ImageBackground
          source={{ uri: background }}
          blurRadius={8}
          style={styles.imageBackground}
        >
          <View style={styles.slideView}>
            <Carousel
              style={styles.carousel}
              ref={carouselRef}
              data={films}
              renderItem={_renderItem}
              sliderWidth={theme.size.fullWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.3}
              onSnapToItem={(index) => {
                setBackground(films[index].img);
                setActiveIndex(index);
              }}
            />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

export default Dashboard;
