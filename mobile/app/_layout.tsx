import { Stack } from 'expo-router'
import React from 'react'
import { ClerkProvider } from '@clerk/clerk-expo'

export default function Layout() {
  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
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
    </ClerkProvider>
  )
}
