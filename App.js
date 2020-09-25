import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenA from "./src/views/ScreenA";
import ScreenB from "./src/views/ScreenB";
import ScreenC from "./src/views/ScreenC";
import Stacks from "./src/components/Stack";

const Stack = createStackNavigator();

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ScreenA"
          screenOptions={{ headerShown: true }}
        >
          <Stack.Screen name="ScreenA" options={{ title: "Tela B" }}>
            {(props) => (
              <Stacks {...props} next="ScreenB">
                <ScreenA />
              </Stacks>
            )}
          </Stack.Screen>
          <Stack.Screen name="ScreenB" options={{ title: "Tela B" }}>
            {(props) => (
              <Stacks {...props} back next="ScreenC">
                <ScreenB />
              </Stacks>
            )}
          </Stack.Screen>
          <Stack.Screen name="ScreenC" options={{ title: "Tela C" }}>
            {(props) => (
              <Stacks {...props} back next="ScreenC">
                <ScreenC {...props} />
              </Stacks>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
