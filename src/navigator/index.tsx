import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './bottomTab';
import {ScreenNames} from './screensName';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ContactSearch from '../screen/Menu/component/contactSearch';
import Chat from '../screen/Chat';
const Stack = createNativeStackNavigator();
import Splash from '../screen/splashScreen';
const RootNavigator = () => {
  // const isLogin = await AsyncStorage.getItem('isLogin')

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          options={{ headerShown: false }}
          name={ScreenNames.Splash}
          component={Splash}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={ScreenNames.Home}
          component={BottomTab}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name={ScreenNames.contactSync}
          component={ContactSearch}
        />
           <Stack.Screen
          options={{headerShown: false}}
          name={ScreenNames.chat}
          component={Chat}
        />
         {/* <Tab.Screen options={{headerShown:false}} name="Chats" component={Chats} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
