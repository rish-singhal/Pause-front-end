import React from 'react'
import { View,ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { theme } from '../core/theme'

export default function Background({ children }) {
  return (
    <View
      
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: "rgb(241,235,228)",
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})