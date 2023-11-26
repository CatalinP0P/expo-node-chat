import React from 'react'
import { Pressable, Image, View, Text } from 'react-native'
import { colors } from '../../static/colors'

interface UserCardProps {
  username: string
  photoURL: string
  id: string
}

export default function UserCard({ username, photoURL, id }: UserCardProps) {
  return (
    <Pressable
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        alignItems: 'center',
      }}
      onPress={() => console.log(id)}
    >
      <Image
        style={{ width: 64, height: 64, borderRadius: 500 }}
        source={{ uri: photoURL }}
      />
      <View style={{ flex: 1 }}>
        <Text
          style={{ fontSize: 24, fontWeight: '600', color: colors.black80 }}
        >
          {username}
        </Text>
      </View>
    </Pressable>
  )
}
