import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import OffScreenPreRender from './screens/OffScreenPreRender';
import InteractionManagerPreRender from './screens/InteractionManagerPreRender';
import HiddenStackPreRender from './screens/HiddenStackPreRender';
import UseEffectPreRender from './screens/UseEffectPreRender';
import BackgroundNavigation from './screens/BackgroundNavigation';

const Stack = createStackNavigator();
const HiddenStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HiddenStackNavigator = () => (
  <HiddenStack.Navigator screenOptions={{ headerShown: false }}>
    <HiddenStack.Screen name="HiddenDetail" component={DetailScreen} />
  </HiddenStack.Navigator>
);


const MainStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Detail" component={DetailScreen} />
    <Stack.Screen name="OffScreenPreRender" component={OffScreenPreRender} />
    <Stack.Screen name="InteractionManagerPreRender" component={InteractionManagerPreRender} />
    <Stack.Screen name="HiddenStackPreRender" component={HiddenStackNavigator} />
    <Stack.Screen name="UseEffectPreRender" component={UseEffectPreRender} />
    <Stack.Screen name="BackgroundNavigation" component={BackgroundNavigation} />
  </Stack.Navigator>
);


const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false, lazy: false }}>
    <Tab.Screen name="MainStack" component={MainStackNavigator} />
    <Tab.Screen name="HiddenStack" component={HiddenStackNavigator} />
  </Tab.Navigator>
);


const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
