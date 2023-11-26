import React from 'react'
import { View, Text, Image } from 'react-native'
import { colors } from '../../static/colors'

export default function ChatMessage({
  photoURL,
  message,
  status,
}: {
  photoURL: string
  message: string
  status: 'sent' | 'received'
}) {
  return (
    <View
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: status == 'sent' ? 'flex-end' : 'flex-start',
        gap: 8,
      }}
    >
      {status == 'received' && (
        <Image
          style={{ borderRadius: 100, width: 40, height: 40 }}
          source={{
            uri: photoURL,
          }}
        />
      )}
      <View
        style={
          status == 'sent'
            ? {
                backgroundColor: colors.primary,
                height: 'auto',
                maxWidth: '75%',
                justifyContent: 'center',
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 8,
                borderTopRightRadius: 0,
              }
            : {
                backgroundColor: colors.black20,
                height: 'auto',
                justifyContent: 'center',
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 8,
                maxWidth: '75%',
                borderTopLeftRadius: 0,
              }
        }
      >
        <Text
          style={status == 'sent' ? { color: 'white' } : { color: 'black' }}
        >
          {message}
        </Text>
      </View>

      {status == 'sent' && (
        <Image
          style={{ borderRadius: 100, width: 40, height: 40 }}
          source={{
            uri: photoURL,
          }}
        />
      )}
    </View>
  )
}
