import React, { createContext, useContext, useEffect, useState } from 'react'

interface UserProps {
  id: number
  email: string
  password: string
  photoURL: string
  username: string
}

interface AuthContextProps {
  loading: boolean
  currentUser: UserProps | null
  login: (email: string, password: string) => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextProps>({
  loading: true,
  currentUser: null,
  login: () => {},
  signOut: () => {},
})

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    setLoading(false)
  }, [])

  const login = (email: string, password: string) => {
    setCurrentUser({
      id: 1,
      email,
      password,
      photoURL:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      username: 'CatalinPCE',
    })
  }

  const signOut = () => {
    setCurrentUser(null)
  }

  return (
    <AuthContext.Provider value={{ loading, currentUser, login, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
