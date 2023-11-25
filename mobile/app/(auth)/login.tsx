import { router } from 'expo-router'
import React, { useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { styles } from './login.styles'
import { Link } from 'expo-router'
import { useAuth } from '../../context/authContext'
import Input from '../../components/input/input'
import CustomButton from '../../components/ui/customButton/customButton'

export default function Login() {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = () => {
    try {
      login(email, password)
      router.replace('/')
    } catch (err) {
      alert(err)
    }
  }

  return (
    <SafeAreaView style={styles.login}>
      <View style={styles.loginContainer}>
        <Text style={styles.header}>Sign in with your Account</Text>
        <View style={styles.formArea}>
          <Input
            title="Email"
            placeholder="Email"
            value={email}
            autoCapitalize="none"
            setValue={setEmail}
          />
          <Input
            title="Password"
            placeholder="Password"
            secureTextEntry
            autoCapitalize="none"
            value={password}
            setValue={setPassword}
          />
          <CustomButton onPress={signIn}>Login</CustomButton>
          <Text style={styles.link}>
            No account?{' '}
            <Link style={styles.link__element} href={'/register'}>
              create one
            </Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
