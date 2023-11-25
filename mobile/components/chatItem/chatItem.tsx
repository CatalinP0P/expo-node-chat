import React from 'react'
import { ChatItemProps } from '../../types/ChatItem'
import { Image, View, Text, Pressable } from 'react-native'
import { colors } from '../../static/colors'
import { formatDate } from '../../utils/formatDate'
import { router } from 'expo-router'

export default function ChatItem({ chatItem }: { chatItem: ChatItemProps }) {
  const openChat = () => {
    router.push(`/chat/${chatItem.id}`)
  }

  return (
    <Pressable
      onPress={openChat}
      style={{
        width: '100%',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: colors.black20,
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
      }}
    >
      <Image
        style={{
          width: 96,
          height: 96,
          borderRadius: 100,
        }}
        source={{ uri: chatItem.user.imageURL }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          flex: 1,
          paddingVertical: 8,
          gap: 8,
          justifyContent: 'flex-start',
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            paddingRight: 8,
          }}
        >
          <Text
            style={{
              color: colors.text,
              fontWeight: '700',
              fontSize: 20,
            }}
          >
            {chatItem.user.username}
          </Text>
          <Text style={{ fontWeight: '600', color: colors.black60 }}>
            {formatDate(chatItem.lastMessage.sentAt)}
          </Text>
        </View>
        <Text
          style={{ fontSize: 16, color: colors.black40, fontWeight: '600' }}
        >
          {chatItem.lastMessage.message as string}
        </Text>
      </View>
    </Pressable>
  )
}
