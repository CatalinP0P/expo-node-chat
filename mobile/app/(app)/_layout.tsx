import { Tabs } from 'expo-router'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Layout() {
  return (
    <Tabs>
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
    </Tabs>
  )
}
