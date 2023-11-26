import { Tabs } from 'expo-router'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import AddUserModal from '../../components/modals/addUserModal'

export default function Layout() {
  const [addUserVisible, setAddUserVisible] = useState(false)

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
          name="friends"
          options={{
            title: 'Friends',
            tabBarIcon: ({ size, color }) => {
              return <Ionicons name="body" size={size} color={color} />
            },
            headerRight: () => (
              <Ionicons
                onPress={() => setAddUserVisible(!addUserVisible)}
                name="add-outline"
                size={32}
                style={{ paddingRight: 8 }}
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
      <AddUserModal visible={addUserVisible} setVisible={setAddUserVisible} />
    </>
  )
}
