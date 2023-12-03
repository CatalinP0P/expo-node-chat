import React from 'react'
import { Text, View } from 'react-native'
import useChats from '../../hooks/useChats'
import { ChatItemProps } from '../../types/ChatItem'
import ChatItem from '../../components/chatItem/chatItem'
import { ScrollView } from 'react-native-gesture-handler'
import useAuthorizedPage from '../../hooks/useAuthorizedPage'

export default function Chats() {
  const { isLoaded } = useAuthorizedPage()
  const chatsData = useChats()

  return isLoaded ? (
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
