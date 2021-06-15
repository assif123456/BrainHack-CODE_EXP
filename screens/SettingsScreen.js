import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Button,
  TextInput,
  Linking, 
  Image
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo } from "@expo/vector-icons";

const SAMPLE_NOTES = [
  { title: "Walk the cat", id: "0", done: false },
  { title: "Water the cat", id: "1", done: false },
  { title: "Buy the milk", id: "2", done: false },
  { title: "Water the milk", id: "3", done: false },
];

function SettingsScreen({ navigation }) {
  const [notes, setNotes] = useState(SAMPLE_NOTES);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Preferences")}>
          <Entypo
            style={{ marginRight: 10 }}
            name="new-message"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      ),
    });
  });

  return(
    <View>
      <Image source={{uri:"https://image.flaticon.com/icons/png/512/1946/1946392.png"}} style={styles.profileicon}/>

      <Text style={{color: 'blue', padding: 20, textDecorationLine: 'underline', alignItems: "center", justifyContent: "flex-end",}}
        onPress={() => Linking.openURL('http://google.com')}>Edit 
      </Text>

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Emergency Contacts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Preferences</Text>
      </TouchableOpacity>


    </View>
  )
}

//Preferences secondary screen goes here
function PreferencesScreen({ navigation }) {
  const [todoText, setTodoText] = useState("");

  return (
    <View style={styles.container}>
      <Text>Add your preferences here</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setTodoText(text)}
      />
      <Button onPress={() => navigation.goBack()} title="Submit" />
      <Button onPress={() => navigation.goBack()} title="Cancel" />
      <Text>{todoText}</Text>
    </View>
  );
}

const SettingsStack = createStackNavigator();

//Settings's Main Screen goes here
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTitle: "Settings",
          headerTitleStyle: styles.headerTitleStyle,
          headerStyle: styles.headerStyle,
        }}
      />
    </SettingsStack.Navigator>
  );
}

//This is the main function
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal" headerMode="none">
        <Stack.Screen
          name="SettingsStack"
          component={SettingsStackScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen name="Preferences" component={PreferencesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "lightgrey",
  },
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 30,
  },
  headerStyle: {
    height: 80,
    backgroundColor: "white",
  },

  textInput: {
    borderColor: "black",
    padding: 5,
    backgroundColor: "white",
    marginTop: 10,
    width: "90%",
  },

  buttonContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "lightgrey",
    height: 80,
    marginRight: 10, 
    marginLeft: 10,
    marginTop: 8, 
    marginBottom: 10,
    borderRadius: 50,
  },

  buttonText: {
    marginLeft: 15,
    fontSize: 18, 
  },

  profileicon: {
    height: 150,
    width: 150,
    marginTop: 30,
    marginLeft: 90,
    alignContent: "center",
      }
});