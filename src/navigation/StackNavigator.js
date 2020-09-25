import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenA from "../views/ScreenA";
import ScreenB from "../views/ScreenB";
import ScreenC from "../views/ScreenC";

const Stack = createStackNavigator();

export default () => {
  <Stack.Navigator
    initialRouteName="ScreenA"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen
      name="ScreenA"
      component={ScreenA}
      options={{ title: "Informações Iniciais" }}
    />
    <Stack.Screen
      name="ScreenB"
      component={ScreenB}
      options={{ title: "Linguagens" }}
    />
    <Stack.Screen
      name="ScreenC"
      component={ScreenC}
      options={{ title: "Desenvolvedores" }}
    />
  </Stack.Navigator>;
};
