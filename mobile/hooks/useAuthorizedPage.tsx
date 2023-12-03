import { useAuth, useUser } from '@clerk/clerk-expo'
import { router } from 'expo-router'
import { useEffect } from 'react'

export default function useAuthorizedPage() {
  const { isSignedIn, isLoaded } = useAuth()
  const { user } = useUser()

  useEffect(() => {
    if (!isLoaded) return

    if (!isSignedIn) router.replace('/login')
  }, [isLoaded, user, isSignedIn])

  return { isLoaded }
}
