import { StyleSheet } from 'react-native'
import { colors } from '../../static/colors'

export const styles = StyleSheet.create({
  input: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
  },

  title: {
    color: colors.text,
    fontSize: 16,
  },

  textInput: {
    fontSize: 20,
    color: colors.text,
    width: '100%',
    paddingVertical: 8,
    fontWeight: '600',
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
  },
})
