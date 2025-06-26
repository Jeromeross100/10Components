import React from 'react';
import { SafeAreaView } from 'react-native';
import ProfileScreen from './ProfileScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProfileScreen />
    </SafeAreaView>
  );
}
