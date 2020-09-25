import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenA from "./src/views/ScreenA";
import ScreenB from "./src/views/ScreenB";
import ScreenC from "./src/views/ScreenC";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              switch (route.name) {
                case "Tab A":
                  iconName = focused
                    ? "ios-information-circle"
                    : "ios-information-circle-outline";
                  break;
                case "Tab B":
                  iconName = focused
                    ? "ios-information-circle"
                    : "ios-information-circle-outline";
                  break;
                case "Tab C":
                  iconName = focused ? "ios-list-box" : "ios-list";
                  break;
                default:
                  break;
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "red",
            inactiveTintColor: "blue",
            showLabel: true,
          }}
          initialRouteName="Tab B"
        >
          <Tab.Screen
            name="Tab A"
            component={ScreenA}
            options={{ title: "Its Me" }}
          />
          <Tab.Screen
            name="Tab B"
            component={ScreenB}
            options={{ title: "Skills" }}
          />
          <Tab.Screen
            name="Tab C"
            component={ScreenC}
            options={{ title: "Projects" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
