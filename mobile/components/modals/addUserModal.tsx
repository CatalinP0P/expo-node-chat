import React, { useState } from 'react'
import CustomModal from './customModal/customModal'
import { Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors } from '../../static/colors'
import { Ionicons } from '@expo/vector-icons'
import useFriends from '../../hooks/useFriends'
import { FriendshipProps } from '../../types/FriendshipProps'
import UserCard from '../userCard/userCard'
import { useAuth } from '../../context/authContext'
import { StyleSheet } from 'react-native'

interface AddUserModalProps {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AddUserModal({
  visible,
  setVisible,
}: AddUserModalProps) {
  const [searchText, setSearchText] = useState('')
  const { currentUser } = useAuth()
  const { friends } = useFriends()

  return (
    <CustomModal visible={visible} setVisible={setVisible}>
      <View style={styles.container}>
        <Text style={styles.title}>Search for your Friends</Text>
        <View style={styles.input__container}>
          <View style={styles.input__row}>
            <TextInput
              placeholder="Your friend username"
              value={searchText}
              onChangeText={(text: string) => setSearchText(text)}
              style={styles.input}
            />
            {searchText && (
              <Ionicons
                onPress={() => setSearchText('')}
                name="close"
                size={24}
                color={colors.black80}
              />
            )}
          </View>
          {searchText && (
            <View style={styles.results__container}>
              {friends?.map((friendInfo: FriendshipProps) => (
                <UserCard
                  key={friendInfo.id}
                  photoURL={
                    friendInfo.user_1_id == currentUser?.id
                      ? friendInfo.user_2_photoURL + ''
                      : friendInfo.user_1_photoURL + ''
                  }
                  username={
                    friendInfo.user_1_id == currentUser?.id
                      ? friendInfo.user_2_username + ''
                      : friendInfo.user_1_username + ''
                  }
                  id={
                    friendInfo.user_1_id == currentUser?.id
                      ? friendInfo.user_2_id + ''
                      : friendInfo.user_1_id + ''
                  }
                />
              ))}
            </View>
          )}
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>You may know</Text>
        <View style={styles.results__container}>
          {friends?.map((friendInfo: FriendshipProps) => (
            <UserCard
              key={friendInfo.id}
              photoURL={
                friendInfo.user_1_id == currentUser?.id
                  ? friendInfo.user_2_photoURL + ''
                  : friendInfo.user_1_photoURL + ''
              }
              username={
                friendInfo.user_1_id == currentUser?.id
                  ? friendInfo.user_2_username + ''
                  : friendInfo.user_1_username + ''
              }
              id={
                friendInfo.user_1_id == currentUser?.id
                  ? friendInfo.user_2_id + ''
                  : friendInfo.user_1_id + ''
              }
            />
          ))}
        </View>
      </View>
    </CustomModal>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: colors.black80,
  },

  container: { flex: 1, display: 'flex', flexDirection: 'column', gap: 16 },
  input__container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.black80,
    borderRadius: 16,
  },

  input__row: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },

  input: {
    flex: 1,
    width: '100%',
  },

  results__container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    paddingTop: 16,
  },
})
