import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UseEffectPreRender = () => {
  const navigation = useNavigation();

  useEffect(() => {

    navigation.navigate('Detail');
    navigation.goBack();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>useEffect Pre-Render Example</Text>
      <Button title="Go to Detail" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};

export default UseEffectPreRender;