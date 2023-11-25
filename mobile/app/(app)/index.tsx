import { router } from 'expo-router'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useAuth } from '../../context/authContext'
import useChats from '../../hooks/useChats'
import { ChatItemProps } from '../../types/ChatItem'
import ChatItem from '../../components/chatItem/chatItem'
import { ScrollView } from 'react-native-gesture-handler'

export default function Chats() {
  const { loading, currentUser } = useAuth()
  const chatsData = useChats()

  useEffect(() => {
    if (chatsData.loading) return
  }, [chatsData.loading])

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
    <ScrollView
      style={{
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 16,
      }}
    >
      <View>
        {chatsData?.chats.map((chatItem: ChatItemProps) => {
          return (
            <ChatItem
              key={chatItem.user.id + `#${Math.random() * 1000}`}
              chatItem={chatItem}
            />
          )
        })}
      </View>
    </ScrollView>
  ) : (
    <View>
      <Text>Loading</Text>
    </View>
  )
}
