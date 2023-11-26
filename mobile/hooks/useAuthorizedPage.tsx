import { useEffect } from 'react'
import { useAuth } from '../context/authContext'
import { router } from 'expo-router'

export default function useAuthorizedPage() {
  const { currentUser, loading } = useAuth()

  useEffect(() => {
    if (loading) return
    if (currentUser == null) {
      setTimeout(() => {
        router.replace('/login')
      }, 0)
    }
  }, [loading, currentUser])

  return { currentUser, loading }
}
