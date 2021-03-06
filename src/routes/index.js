import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ButtonIcons from "../Components/ButtonIcons";

import UseTerms from "../screens/UseTerms";
import Home from "../screens/Home";
import Dashboard from "../screens/Dashboard";
import FilmDetails from "../screens/FilmDetails";
import SelectDayEndHour from "../screens/SelectDayEndHour";
import SelectAccent from "../screens/SelectAccent";
import Finish from "../screens/Finish";

import theme from "../global/styles/theme";

const Stack = createNativeStackNavigator();

function StackNavigation() {
  const screenOptions = {
    headerStyle: {
      backgroundColor: theme.colors.nave,
    },
    headerTintColor: theme.colors.white,
    headerTitleStyle: {
      fontFamily: theme.fonts.bold,
    },
  };

  return (
    <Stack.Navigator
      initialRouteName="UseTerms"
      screenOptions={screenOptions}
      mode="modal"
    >
      <Stack.Screen
        options={{
          title: "Termo de Uso",
        }}
        name="UseTerms"
        component={UseTerms}
      />
      <Stack.Screen
        name="Home"
        options={{
          title: "Panda Cine",
          headerRight: () => (
            <ButtonIcons
              onPress={() => alert("This is a button!")}
              name="map-marker-alt"
              color="#fff"
              size={24}
            />
          ),
        }}
        component={Home}
      />
      <Stack.Screen
        name="Dashboard"
        options={{
          title: "Filmes",
        }}
        component={Dashboard}
      />
      <Stack.Screen
        options={{
          title: "Detalhes",
        }}
        name="FilmDetails"
        component={FilmDetails}
      />
      <Stack.Group
        screenOptions={{
          presentation: "transparentModal",
        }}
      >
        <Stack.Screen
          options={{
            title: "Selecione dia e hora. (1/2)",
          }}
          name="SelectDayEndHour"
          component={SelectDayEndHour}
        />
        <Stack.Screen
          mode="card"
          options={{
            title: "Selecione acento(s). (2/2)",
          }}
          name="SelectAccent"
          component={SelectAccent}
        />
      </Stack.Group>
      <Stack.Screen
        name="Finish"
        options={{
          title: "Panda Cine",
          headerRight: () => (
            <ButtonIcons
              onPress={() => alert("This is a button!")}
              name="map-marker-alt"
              color="#fff"
              size={24}
            />
          ),
        }}
        component={Finish}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
