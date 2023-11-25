import { Stack } from 'expo-router'
import React from 'react'

import { AuthProvider } from '../context/authContext'

export default function Layout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  )
}
