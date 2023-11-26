import { Stack } from 'expo-router'
import React from 'react'
import useAuthorizedPage from '../../../hooks/useAuthorizedPage'

export default function Layout() {
  useAuthorizedPage()
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  )
}
