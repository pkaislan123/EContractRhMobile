import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../../paginas/main'
import Salarios from '../../paginas/salarios'
import Demonstrativo from '../../paginas/demonstrativo'
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Drawer = createDrawerNavigator();
export  default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" 
        drawerStyle={{
          backgroundColor: "#313131",
          paddingVertical: 20
        }}
        
        screenOptions={{
          drawerType: 'front',
          activeBackgroundColor: "#fff",
          inactiveTintColor: "#fff",
          headerShown: false
        }}
      >
        <Drawer.Screen name="Início" component={Main} 
        options={
            {drawerIcon: (({focused}) => <Icon color={focused ? '#313131' : '#fff'} name="home" /> )
        }
      }
        />
        <Drawer.Screen name="Sálarios" component={Salarios}
         options={
          {drawerIcon: (({focused}) => <Icon color={focused ? '#313131' : '#fff'} name="home" /> )
      }
    }
        />
        <Drawer.Screen name="Demonstrativo" component={Demonstrativo} />

      </Drawer.Navigator>
      </NavigationContainer>
  )
}


