import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        //justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <FontAwesome name="bullhorn" size={24} color="grey" />

      <Button
        title=""
        color="lightgrey"
        onPress={() => navigation.navigate("Contact the Police")}
      />
    </View>
  );
}

function HomeSecondScreen() {
  return <Text>SMS 71999 if it's not safe to call the police. When your message is successfully received by the police, an acknowledgement message will be sent back to you. https://www.police.gov.sg/SMS-71999</Text>;

}

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Hello" component={HomeScreen} />
      <Stack.Screen name="Contact the Police" component={HomeSecondScreen} />
    </Stack.Navigator>
     );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Arial",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});