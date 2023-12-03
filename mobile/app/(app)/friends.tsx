import React, { useEffect } from 'react'
import { View } from 'react-native'
import useFriends from '../../hooks/useFriends'
import { FriendshipProps } from '../../types/FriendshipProps'
import UserCard from '../../components/userCard/userCard'
import { useUser } from '@clerk/clerk-expo'

export default function Friends() {
  const { user } = useUser()
  const { friends, loading } = useFriends()

  useEffect(() => {
    if (loading) return

    console.log(friends)
  }, [loading])

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        paddingHorizontal: 12,
        paddingVertical: 8,
      }}
    >
      {friends.map((friendInfo: FriendshipProps) => {
        return (
          <UserCard
            key={friendInfo.id}
            photoURL={
              friendInfo.user_1_id.toString() == user?.id
                ? friendInfo.user_2_photoURL + ''
                : friendInfo.user_1_photoURL + ''
            }
            username={
              friendInfo.user_1_id.toString() == user?.id
                ? friendInfo.user_2_username + ''
                : friendInfo.user_1_username + ''
            }
            id={
              friendInfo.user_1_id.toString() == user?.id
                ? friendInfo.user_2_id + ''
                : friendInfo.user_1_id + ''
            }
          />
        )
      })}
    </View>
  )
}
