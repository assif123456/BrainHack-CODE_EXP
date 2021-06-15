import * as React from "react";
import { Text, View, StyleSheet } from "react-native";


export default function SettingsScreen() {
  return (
    <View style={style.container}>
      <Text>Settings!</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
