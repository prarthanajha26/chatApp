import React from 'react';
import {Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screen/Home/Home';
import Account from '../../screen/Account';
import Menu from '../../screen/Menu';
import Favroite from '../../screen/Favorite';
import {Icons} from '../../assets';
import { ScreenNames } from '../screensName';
// import Chats from '../../screen/Chats/Chats';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              style={{width: size, height: size, tintColor: color}}
              source={Icons.Home}
            />
          ),
        }}
        name={ScreenNames.HomeScreen}
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              style={{width: size, height: size, tintColor: color}}
              source={Icons.Account}
            />
          ),
        }}
        name={ScreenNames.account}
        component={Account}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              style={{width: size, height: size, tintColor: color}}
              source={Icons.Fav}
            />
          ),
        }}
        name={ScreenNames.favorite}
        component={Favroite}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              style={{width: size, height: size, tintColor: color}}
              source={Icons.Menu}
            />
          ),
        }}
        name={ScreenNames.menu}
        component={Menu}
      />
     
    </Tab.Navigator>
  );
}
