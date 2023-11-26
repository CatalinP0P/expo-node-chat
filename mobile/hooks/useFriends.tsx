import { useEffect, useState } from 'react'
import { FriendshipProps } from '../types/FriendshipProps'

export default function useFriends() {
  const [friends, setFriends] = useState<FriendshipProps[]>([])
  const [loading, setLoading] = useState(true)

  const fetchData = () => {
    setFriends([
      {
        id: 1,
        user_1_id: 1,
        user_1_username: 'CatalinPCE',
        user_1_photoURL:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        user_2_id: 2,
        user_2_username: 'MikeRM',
        user_2_photoURL:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        created_at: '10-12-2023',
      },
      {
        id: 2,
        user_1_id: 3,
        user_1_username: 'John',
        user_1_photoURL:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        user_2_id: 1,
        user_2_username: 'CatalinPCE',
        user_2_photoURL:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        created_at: '10-10-2023',
      },
    ])
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { friends, loading }
}
