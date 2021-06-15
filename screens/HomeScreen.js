import * as React from "react";
import { Text, View, StyleSheet } from "react-native";


export default function HomeScreen() {
  return (
    <View style={style.container}>
      <Text style={style.header}>Home</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Arial",

  },
});
