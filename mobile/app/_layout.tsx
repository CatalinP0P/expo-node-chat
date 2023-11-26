import { Stack } from 'expo-router'
import React from 'react'
import { AuthProvider } from '../context/authContext'
import useAuthorizedPage from '../hooks/useAuthorizedPage'

export default function Layout() {
  useAuthorizedPage()

  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen
          name="(app)"
          options={{ headerShown: false, title: 'Chats' }}
        />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen
          name="(chat_id)/chat"
          options={{ headerShown: true, title: 'Conversation' }}
        />
      </Stack>
    </AuthProvider>
  )
}
