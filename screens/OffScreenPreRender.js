import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DetailScreen from './DetailScreen';

const OffScreenPreRender = () => {
  const navigation = useNavigation();
  const [isDetailReady, setIsDetailReady] = useState(false);

  const handleNavigate = () => {
    if (isDetailReady) {
      navigation.navigate('Detail');
    } else {
      alert('DetailScreen is still loading. Please wait...');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Off-Screen Pre-Render Example</Text>
      <Button title="Go to Detail" onPress={handleNavigate} />


      <View style={styles.offScreenContainer}>
        <DetailScreen onReady={() => setIsDetailReady(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  offScreenContainer: {
    position: 'absolute',
    top: -1000, // Render off-screen
    opacity: 0, // Make it invisible
  },
});

export default OffScreenPreRender;