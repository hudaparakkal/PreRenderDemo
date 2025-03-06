import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator, InteractionManager } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InteractionManagerPreRender = () => {
  const navigation = useNavigation();
  const [isDetailReady, setIsDetailReady] = useState(false);

  useEffect(() => {
  
    InteractionManager.runAfterInteractions(() => {
   
      setTimeout(() => {
        setIsDetailReady(true);
      }, 2000);
    });
  }, []);

  const handleNavigate = () => {
    if (isDetailReady) {
      navigation.navigate('Detail');
    } 
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>InteractionManager Pre-Render Example</Text>
      <Button title="Go to Detail" onPress={handleNavigate} />
      {!isDetailReady && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
};

export default InteractionManagerPreRender;