import React from 'react'
import { View, Text, StyleSheet } from 'react-native'



const TextView = ({children,bg="#000",text="#fff"}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: bg,
      color: text
    },
    text: {
      fontSize: 50
    }
  })
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default TextView