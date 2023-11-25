import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import useConversation from '../../../hooks/useConversation'
import { useAuth } from '../../../context/authContext'
import { router } from 'expo-router'
import { ScrollView } from 'react-native-gesture-handler'
import { Message } from '../../../types/Message'
import ChatMessage from '../../../components/chatMessage/chatMessage'
import { colors } from '../../../static/colors'

export default function Chat_ID() {
  const userData = useAuth()
  const { conversation, loading } = useConversation(1)

  useEffect(() => {
    if (userData.loading) return
    if (userData.currentUser == null) return router.replace('/login')
  }, [userData.loading])

  return !loading ? (
    <>
      <ScrollView
        style={{
          paddingVertical: 8,
          paddingHorizontal: 16,
          flex: 1,
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {conversation.map((conv: Message) => {
            return (
              <ChatMessage
                key={conv.id}
                message={conv.message}
                photoURL={
                  'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                }
                status={conv.fromId == 1 ? 'sent' : 'received'}
              />
            )
          })}
        </View>
      </ScrollView>
      <View
        style={{
          width: '100%',
          backgroundColor: colors.black20,
          paddingBottom: 64,
          paddingHorizontal: 16,
          paddingTop: 12,
        }}
      >
        <Text>Hello</Text>
      </View>
    </>
  ) : (
    <View>
      <Text>Loading</Text>
    </View>
  )
}
