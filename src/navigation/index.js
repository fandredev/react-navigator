import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";

export default () => {
  <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  </SafeAreaView>;
};
