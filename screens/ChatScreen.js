import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import {createStackNavigator} from "@react-navigation/stack";


 function ChatScreen() {
  return (
    <View style={style.container}>
      <Text>Chat!</Text>
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

const Stack  = createStackNavigator()

export default function ChatStack() {
    return(
    <Stack.Navigator>
        <Stack.Screen name = "Chat" component={ChatScreen}/>
    </Stack.Navigator>)
}