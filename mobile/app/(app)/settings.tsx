import { useAuth, useUser } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import UserCard from '../../components/userCard/userCard'
import { colors } from '../../static/colors'

export default function Settings() {
  const { user } = useUser()
  const { signOut } = useAuth()

  return (
    <View style={styles.container}>
      <UserCard
        size="large"
        id={user?.id + ''}
        username={user?.fullName}
        photoURL={user?.imageUrl}
        email={user?.primaryEmailAddress + ''}
      />
      <View style={styles.separator} />

      <TouchableOpacity style={styles.link__item}>
        <Ionicons name="body-outline" size={32} color={colors.black80} />
        <Text style={{ fontSize: 24 }}>Personal Information</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link__item}>
        <Ionicons name="settings-outline" size={32} color={colors.black80} />
        <Text style={{ fontSize: 24 }}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link__item} onPress={signOut}>
        <Ionicons name="log-out-outline" size={32} color={colors.black80} />
        <Text style={{ fontSize: 24 }}>Sign out</Text>
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
    gap: 12,
    alignItems: 'center',
    paddingVertical: 8,
  },
})
