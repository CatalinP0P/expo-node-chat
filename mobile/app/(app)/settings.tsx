import React from 'react'
import { View } from 'react-native'
import UserCard from '../../components/userCard/userCard'
import { useAuth } from '../../context/authContext'
import { colors } from '../../static/colors'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'

export default function Settings() {
  const { currentUser, signOut } = useAuth()

  return (
    <View style={styles.container}>
      <UserCard
        size="large"
        id={currentUser?.id + ''}
        username={currentUser?.username}
        photoURL={currentUser?.photoURL}
      />
      <View style={styles.separator} />

      <TouchableOpacity style={styles.link__item} onPress={signOut}>
        <Text style={{ fontSize: 24 }}>Sign out</Text>
        <Ionicons name="log-out-outline" size={32} color={colors.black80} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingVertical: 8, paddingHorizontal: 12 },

  separator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.black20,
    marginTop: 8,
  },

  link__item: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    gap: 24,
    alignItems: 'center',
    paddingVertical: 8,
  },
})
