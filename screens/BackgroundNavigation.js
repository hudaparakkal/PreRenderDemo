import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackgroundNavigation = () => {
  const navigation = useNavigation();

  useEffect(() => {

    // navigation.navigate('Detail');

  
    setTimeout(() => {
      navigation.navigate('Detail');
      navigation.goBack();
    }, 200); 
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Background Navigation Example</Text>
      <Button title="Go to Detail" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};

export default BackgroundNavigation;