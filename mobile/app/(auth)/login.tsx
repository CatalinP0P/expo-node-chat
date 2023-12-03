import { router } from 'expo-router'
import React, { useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { styles } from './login.styles'
import { Link } from 'expo-router'
import Input from '../../components/input/input'
import CustomButton from '../../components/ui/customButton/customButton'
import { useSignIn } from '@clerk/clerk-expo'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn, setActive, isLoaded } = useSignIn()

  const onSignInPress = async () => {
    if (!isLoaded) {
      return
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: email,
        password,
      })

      await setActive({ session: completeSignIn.createdSessionId })
      router.replace('/')
    } catch (err) {
      alert('Email or Password is Wrong')
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
          <CustomButton onPress={onSignInPress}>Login</CustomButton>
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
