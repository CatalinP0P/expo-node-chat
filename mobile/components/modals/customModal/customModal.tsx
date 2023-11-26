import React from 'react'
import { Modal, Pressable, View } from 'react-native'
import { colors } from '../../../static/colors'

interface CustomModalProps {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

export default function CustomModal({
  visible,
  setVisible,
  children,
}: CustomModalProps) {
  return (
    <>
      {visible && (
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 5,
            backgroundColor: 'rgba(0,0,0,.5)',
          }}
        />
      )}
      <Modal animationType="slide" visible={visible} transparent>
        <Pressable style={{ flex: 1 }} onPress={() => setVisible(false)} />
        <View
          style={{
            backgroundColor: colors.white,
            width: '100%',
            height: '100%',
            maxHeight: '80%',
            paddingHorizontal: 12,
            paddingVertical: 8,
          }}
        >
          {children}
        </View>
      </Modal>
    </>
  )
}
