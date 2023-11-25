import React, { createContext, useContext, useEffect, useState } from 'react'

interface UserProps {
  id: number
  email: string
  password: string
}

interface AuthContextProps {
  loading: boolean
  currentUser: UserProps | null
  login: (email: string, password: string) => void
}

const AuthContext = createContext<AuthContextProps>({
  loading: true,
  currentUser: null,
  login: () => {},
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
    // if (email.toLowerCase() != 'test@example.com' && password != 'password') {
    //   throw 'Email or Password wrong'
    // }

    setCurrentUser({ id: 1, email, password })
  }

  return (
    <AuthContext.Provider value={{ loading, currentUser, login }}>
      {children}
    </AuthContext.Provider>
  )
}
