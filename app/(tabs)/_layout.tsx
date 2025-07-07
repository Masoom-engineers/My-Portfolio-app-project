import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#d1fae5',
        tabBarStyle: {
          backgroundColor: 'green',
          borderTopColor: 'transparent',
          height: 60,
          position: 'absolute',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <Ionicons name="person-circle" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="skills"
        options={{
          title: 'Skills',
          tabBarIcon: ({ color }) => <Ionicons name="hammer" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="project"
        options={{
          title: 'Projects',
          tabBarIcon: ({ color }) => <Ionicons name="folder-open" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarIcon: ({ color }) => <Ionicons name="mail" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
