import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../components/LoginScreen';
import Dashboard from '../components/Dashboard';
import WifiAccess from '../components/WifiAccess';
import SmokeSensor from '../components/SmokeSensor';
import HumiditySensor from '../components/HumiditySensor';
import Camera from '../components/Camera';
import AlarmSpeaker from '../components/AlarmSpeaker';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: true }} />
        <Stack.Screen name="WifiAccess" component={WifiAccess} />
        <Stack.Screen name="SmokeSensor" component={SmokeSensor} />
        <Stack.Screen name="HumiditySensor" component={HumiditySensor} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="AlarmSpeaker" component={AlarmSpeaker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
