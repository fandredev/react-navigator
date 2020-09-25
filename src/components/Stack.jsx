import React from 'react'
import { View, StyleSheet, Button } from 'react-native'

const Stack = ({ children, next, back, navigation, id }) => {
  const styles = StyleSheet.create({
    contain: {
      flex: 1,
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 100
    },
  });
  return (
    <View styles={styles.contain}>
      <View style={styles.container}>
        {back ? (
          <Button title="Back" onPress={() => navigation.goBack()} />
        ) : (
          false
        )}
        {next ? (
          <Button title="Next" onPress={() => navigation.push(next, {number: parseInt(Math.random() * 100)})} />
        // <Button title="Next" onPress={() => navigation.navigation(next)} />

        ) : (
          false
        )}
      </View>

      <View styles={styles.contain}>{children}</View>
    </View>
  );
};

export default Stack