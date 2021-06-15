import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function HomeScreen() {
  return (
    <View style={style.container}>
      <Text style={style.header}>Home</Text>
      <Text style ={style.secondline}>Good Morning (name)!</Text>
      <Text style={style.thirdline}>How are you feeling today?</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Arial",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft:20,
    marginTop:30,
    padding: 10,
  },
  secondline:{
    fontSize: 30,
    fontStyle: 'italic',
    marginLeft: 30,
  },
  thirdline:{
    fontSize: 20,
    fontStyle: 'italic',
    padding: 10,
    marginLeft: 20,
  },
});
