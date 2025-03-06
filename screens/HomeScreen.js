import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Off-Screen Pre-Render"
        onPress={() => navigation.navigate('OffScreenPreRender')}
      />
      <Button
        title="InteractionManager Pre-Render"
        onPress={() => navigation.navigate('InteractionManagerPreRender')}
      />
      <Button
        title="Hidden Stack Pre-Render"
        onPress={() => navigation.navigate('HiddenStackPreRender')}
      />
      <Button
        title="useEffect Pre-Render"
        onPress={() => navigation.navigate('UseEffectPreRender')}
      />
      <Button
        title="Background Navigation"
        onPress={() => navigation.navigate('BackgroundNavigation')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;