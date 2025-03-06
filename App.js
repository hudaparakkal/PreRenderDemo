import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import OffScreenPreRender from './screens/OffScreenPreRender';
import InteractionManagerPreRender from './screens/InteractionManagerPreRender';
import HiddenStackPreRender from './screens/HiddenStackPreRender';
import UseEffectPreRender from './screens/UseEffectPreRender';
import BackgroundNavigation from './screens/BackgroundNavigation';

const MainStack = createStackNavigator();
const HiddenStack = createStackNavigator();


const HiddenStackNavigator = () => (
  <HiddenStack.Navigator screenOptions={{ headerShown: false }}>
    <HiddenStack.Screen name="HiddenDetail" component={DetailScreen} />
  </HiddenStack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={HomeScreen} />
        <MainStack.Screen name="Detail" component={DetailScreen} />
        <MainStack.Screen name="OffScreenPreRender" component={OffScreenPreRender} />
        <MainStack.Screen name="InteractionManagerPreRender" component={InteractionManagerPreRender} />
        <MainStack.Screen name="HiddenStackPreRender" component={HiddenStackNavigator} />
        <MainStack.Screen name="UseEffectPreRender" component={UseEffectPreRender} />
        <MainStack.Screen name="BackgroundNavigation" component={BackgroundNavigation} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;