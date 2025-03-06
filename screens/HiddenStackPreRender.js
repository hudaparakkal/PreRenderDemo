import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HiddenStackPreRender = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Preload the DetailScreen using the hidden stack
    navigation.navigate('HiddenStackPreRender', { screen: 'HiddenDetail' });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hidden Stack Pre-Render Example</Text>
      <Button title="Go to Detail" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};

export default HiddenStackPreRender;