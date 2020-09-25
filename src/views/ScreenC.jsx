import React from "react";
import TextView from "../components/TextView";
import { Button, View, SafeAreaView } from 'react-native'

const ScreenC = ({ route, navigation }) => {
  const id = route.params && route.params.number || parseInt(Math.random() * 1000)
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: 100,
          }}
        >
          <Button title="Open Drawer" onPress={() => {
              navigation.openDrawer()
            setTimeout(() => {
              navigation.closeDrawer()
              setInterval(() => {
                navigation.toggleDrawer()
              }, 1000)
            }, 3000)
          }} />
        </View>
      </SafeAreaView>
      <View style={{ flex: 1 }}>
        <TextView>Screen C - {id}</TextView>
      </View>
    </>
  );
};

export default ScreenC;
