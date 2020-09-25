import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ScreenA from "./src/views/ScreenA";
import ScreenB from "./src/views/ScreenB";
import ScreenC from "./src/views/ScreenC";

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Tela C">
          <Drawer.Screen name="Tela A" component={ScreenA} />
          <Drawer.Screen name="Tela B" component={ScreenB} />
          <Drawer.Screen name="Tela C" component={ScreenC} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
