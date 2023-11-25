import { router } from 'expo-router'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useAuth } from '../../context/authContext'

export default function Chats() {
  const { loading, currentUser } = useAuth()

  useEffect(() => {
    if (loading) return

    setTimeout(() => {
      if (currentUser == null) router.replace('/login')
      else {
        console.log(currentUser)
      }
    }, 1)
  }, [])

  return currentUser ? (
    <View>
      <Text>Hello {currentUser.email}</Text>
    </View>
  ) : (
    <View>
      <Text>Loading</Text>
    </View>
  )
}
