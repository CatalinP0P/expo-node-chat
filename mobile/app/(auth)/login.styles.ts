import { StyleSheet } from 'react-native'

import { colors } from '../../static/colors'

export const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginContainer: {
    width: '80%',
    marginHorizontal: 'auto',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    fontSize: 24,
    color: colors.text,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 32,
  },

  formArea: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  link: {
    fontSize: 16,
    color: colors.text,
  },

  link__element: {
    color: colors.primary,
  },
})
