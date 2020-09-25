import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenA from "./src/views/ScreenA";
import ScreenB from "./src/views/ScreenB";
import ScreenC from "./src/views/ScreenC";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: "red",
            inactiveTintColor: "blue",
            labelStyle: { fontSize: 30 },
          }}
          initialRouteName="Tab B"
        >
          <Tab.Screen name="Tab A" component={ScreenA} />
          <Tab.Screen name="Tab B" component={ScreenB} />
          <Tab.Screen name="Tab C" component={ScreenC} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
