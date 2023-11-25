import React, { Dispatch } from 'react'
import { View, Text, TextInput, TextInputProps } from 'react-native'

import { styles } from './input.styles'

interface InputProps extends TextInputProps {
  title?: string
  value?: string
  setValue?: Dispatch<React.SetStateAction<string>>
}

export default function Input({
  title,
  value,
  setValue,
  ...otherProps
}: InputProps) {
  return (
    <View style={styles.input}>
      {title && <Text style={styles.title}>{title}</Text>}
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={(text: string) => {
          setValue(text + '')
        }}
        {...otherProps}
      />
    </View>
  )
}
