import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './login.styles'
import Input from '../../components/input/input'
import CustomButton from '../../components/ui/customButton/customButton'
import { colors } from '../../static/colors'
import { useSignUp } from '@clerk/clerk-expo'
import { router } from 'expo-router'

export default function Register() {
  const { isLoaded, signUp, setActive } = useSignUp()

  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPasword, setConfirmPassword] = useState('')
  const [code, setCode] = useState('')
  const [pendingVerification, setPendingVerification] = useState(false)

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return
    }

    if (confirmPasword != password) {
      return alert('Passwords do not match!')
    }

    try {
      await signUp.create({
        firstName: firstName,
        lastName: lastName,
        emailAddress: email,
        password,
      })

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      // change the UI to our pending section.
      setPendingVerification(true)
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    }
  }

  const onPressVerify = async () => {
    if (!isLoaded) {
      return
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      })
      await setActive({ session: completeSignUp.createdSessionId })
      router.replace('/')
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    }
  }

  return !pendingVerification ? (
    <View style={styles.login}>
      <View style={styles.loginContainer}>
        <Text style={styles.header}>Create an Account</Text>
        <Image
          source={require('../../assets/profileImage.png')}
          style={{
            width: 160,
            height: 160,
            backgroundColor: colors.black10,
            borderRadius: 100,
          }}
        />
        <View style={styles.formArea}>
          <Input
            placeholder="Email"
            title="Email"
            autoCapitalize="none"
            value={email}
            setValue={setEmail}
          />
          <Input
            placeholder="First Name"
            title="First Name"
            value={firstName}
            setValue={setFirstName}
          />
          <Input
            placeholder="Last Name"
            title="Last Name"
            value={lastName}
            setValue={setLastName}
          />
          <Input
            placeholder="Password"
            title="Password"
            secureTextEntry
            autoCapitalize="none"
            value={password}
            setValue={setPassword}
            textContentType="none"
          />
          <Input
            placeholder="Confirm Password"
            title="Confirm Password"
            secureTextEntry
            autoCapitalize="none"
            value={confirmPasword}
            setValue={setConfirmPassword}
            textContentType="none"
          />
          <CustomButton onPress={onSignUpPress}>Create</CustomButton>
        </View>
      </View>
    </View>
  ) : (
    <View style={styles.login}>
      <View style={styles.loginContainer}>
        <Text style={styles.header}>Confirm Email Code</Text>
        <Input
          placeholder="Confirmation Code"
          title="Confirmation Code"
          value={code}
          setValue={setCode}
          autoCapitalize="none"
        />
        <CustomButton onPress={onPressVerify}>Confirm Code</CustomButton>
      </View>
    </View>
  )
}
