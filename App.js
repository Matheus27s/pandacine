import React from "react";
import { enableFreeze } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

import theme from "./src/global/styles/theme";

import StackNavigation from "./src/routes";

function App() {
  enableFreeze(true);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.nave} />
      <StackNavigation />
    </NavigationContainer>
  );
}

export default App;
