import React from "react";
import { SafeAreaView } from "react-native";
import ScreenA from "./src/views/ScreenA";
import ScreenB from "./src/views/ScreenB";
import ScreenC from "./src/views/ScreenC";

export default () => {
  return (
    <SafeAreaView style={styles.viewArea}>
      <ScreenA />
      <ScreenB />
      <ScreenC />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewArea: {
    flex: 1,
  },
});
