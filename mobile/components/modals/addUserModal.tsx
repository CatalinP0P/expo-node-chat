import React from 'react'
import CustomModal from './customModal/customModal'
import { Text } from 'react-native'

interface AddUserModalProps {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AddUserModal({
  visible,
  setVisible,
}: AddUserModalProps) {
  return (
    <CustomModal visible={visible} setVisible={setVisible}>
      <Text>This is the Add User Modal</Text>
    </CustomModal>
  )
}
