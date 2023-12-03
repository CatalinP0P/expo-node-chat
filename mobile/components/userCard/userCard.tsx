import React from 'react'
import { Pressable, Image, View, Text } from 'react-native'
import { colors } from '../../static/colors'

interface UserCardProps {
  size?: 'medium' | 'large'
  username: string
  photoURL: string
  email?: string
  id: string
}

export default function UserCard({
  username,
  photoURL,
  id,
  size = 'medium',
  email,
}: UserCardProps) {
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
        style={{
          width: size == 'medium' ? 64 : 96,
          height: size == 'medium' ? 64 : 96,
          borderRadius: 500,
        }}
        source={{ uri: photoURL }}
      />
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: size == 'medium' ? 24 : 32,
            fontWeight: '600',
            color: colors.black80,
          }}
        >
          {username}
        </Text>
        {email && (
          <Text
            style={{
              fontSize: size == 'medium' ? 14 : 18,
              fontWeight: '500',
              color: colors.black60,
            }}
          >
            {email}
          </Text>
        )}
      </View>
    </Pressable>
  )
}
