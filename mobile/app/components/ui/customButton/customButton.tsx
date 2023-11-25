import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { styles } from './customButton.styles'

interface CustomButtonProps extends TouchableOpacityProps {
  children: React.ReactNode
}

export default function CustomButton({
  children,
  ...otherProps
}: CustomButtonProps) {
  return (
    <TouchableOpacity style={styles.button} {...otherProps}>
      <Text style={styles.button__text}>{children}</Text>
    </TouchableOpacity>
  )
}
