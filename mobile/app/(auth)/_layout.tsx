import { Stack } from 'expo-router'
import React from 'react'

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{
          title: 'Login',
        }}
      />

      <Stack.Screen
        name="register"
        options={{
          title: 'Register',
        }}
      />
    </Stack>
  )
}
