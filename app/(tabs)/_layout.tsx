import { Tabs } from 'expo-router';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerPressColor: '#f5f5f5',
        headerStyle: { backgroundColor: '#363333' },
        headerTintColor: '#ffffff',
        headerTitleStyle: { fontWeight: '900' },
        tabBarStyle: { display: 'none' },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Chat'
        }}
      />
    </Tabs>
  );
}
