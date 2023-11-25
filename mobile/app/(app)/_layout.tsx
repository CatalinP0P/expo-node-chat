import { Tabs } from 'expo-router'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Layout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerStyle: {
            height: 112,
          },
          headerTitleStyle: {
            fontSize: 40,
            textAlign: 'left',
            fontWeight: '700',
          },
          headerTitleAlign: 'left',
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Chats',
            tabBarIcon: ({ size, color }) => (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            tabBarIcon: ({ size, color }) => {
              return (
                <Ionicons name="settings-outline" size={size} color={color} />
              )
            },
          }}
        />
      </Tabs>
    </>
  )
}
