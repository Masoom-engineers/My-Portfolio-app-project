import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";

export default function TabLayout() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#fff",
      }}
    >
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#d1fae5",
          tabBarStyle: {
            backgroundColor: "green",
            borderTopColor: "transparent",
            height: 60,
            paddingBottom: -20,
            paddingTop: 6,
            position: "absolute",
            bottom: 10,
            left: 0,
            right: 0,
            elevation: 0,
            shadowColor: "transparent",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: "About",
            tabBarIcon: ({ color }) => (
              <Ionicons name="person-circle" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="skills"
          options={{
            title: "Skills",
            tabBarIcon: ({ color }) => (
              <Ionicons name="hammer" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="project"
          options={{
            title: "Projects",
            tabBarIcon: ({ color }) => (
              <Ionicons name="folder-open" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="contact"
          options={{
            title: "Contact",
            tabBarIcon: ({ color }) => (
              <Ionicons name="mail" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
