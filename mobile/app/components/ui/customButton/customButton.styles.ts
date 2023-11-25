import { StyleSheet } from 'react-native'

import { colors } from '../../../../static/colors'

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
  },

  button__text: {
    width: '100%',
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
})
