import 'react-native-gesture-handler';
import React from 'react';
import {
  View, Text,
  StyleSheet, Component
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './src/paginas/main'
import Login from './src/paginas/login'
import { StackActions, NavigationActions } from 'react-navigation';
import  Navegador  from "./src/paginas/navegacao";
import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';


const App = createAnimatedSwitchNavigator  (
  {
    Login,
    "Home": Navegador,
    
  },
  {
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-bottom"
          durationMs={400}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    ),
  },
);

export default createAppContainer(App);

