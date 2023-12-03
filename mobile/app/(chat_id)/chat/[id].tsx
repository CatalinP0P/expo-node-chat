import React, { useState } from 'react'
import { View, Text } from 'react-native'
import useConversation from '../../../hooks/useConversation'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Message } from '../../../types/Message'
import ChatMessage from '../../../components/chatMessage/chatMessage'
import { colors } from '../../../static/colors'
import { Ionicons } from '@expo/vector-icons'
import useAuthorizedPage from '../../../hooks/useAuthorizedPage'

export default function Chat_ID() {
  const [newMessage, setNewMessage] = useState('')
  const { conversation, loading } = useConversation(1)

  useAuthorizedPage()

  const sendMessage = () => {
    console.log(newMessage)
    setNewMessage('')
  }

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
          backgroundColor: colors.white,
          paddingBottom: 40,
          paddingHorizontal: 16,
          paddingTop: 12,
          display: 'flex',
          flexDirection: 'row',
          gap: 16,
          alignItems: 'center',
        }}
      >
        <Ionicons name="add" size={32} color={colors.black80} />
        <TextInput
          value={newMessage}
          onChangeText={(text: string) => setNewMessage(text)}
          style={{
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderWidth: 1,
            borderColor: colors.black80,
            borderRadius: 100,
            flex: 1,
          }}
        />
        {newMessage && (
          <Ionicons
            onPress={sendMessage}
            name="send"
            size={28}
            color={colors.text}
          />
        )}
        <Ionicons name="camera" size={32} color={colors.black80} />
      </View>
    </>
  ) : (
    <View>
      <Text>Loading</Text>
    </View>
  )
}
