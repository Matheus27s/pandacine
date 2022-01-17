import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ButtonIcons from '../Components/ButtonIcons';

import UseTerms from '../screens/UseTerms';
import Home from '../screens/Home';
import Dashboard from '../screens/Dashboard';

import theme from '../global/styles/theme';

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
  }

    return(
      <Stack.Navigator
      initialRouteName="UseTerms"
      screenOptions={ screenOptions }
      >
        <Stack.Screen         
          options={{ 
            title: 'Termo de Uso' 
          }}
          name="UseTerms" 
          component={UseTerms} 
        />
        <Stack.Screen 
          name="Home"
          options={{ 
            title: 'Panda Cine',
            headerRight: () => (
              <ButtonIcons
                onPress={() => alert('This is a button!')}
                name="assistant-navigation"
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
            title: 'Panda Cine' 
          }}
          component={Dashboard} 
        />
      </Stack.Navigator>
    );
}

export default StackNavigation;