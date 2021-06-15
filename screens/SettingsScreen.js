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
import { Feather } from "@expo/vector-icons";

function SettingsScreen({ navigation }) {
  return(
    <View>
      <View style={styles.ImageContainer}>
        <Image source={{uri:"https://image.flaticon.com/icons/png/512/1946/1946392.png"}} style={styles.profileicon}/>
        <Text style={styles.username}>@username</Text>
        <Text style={{color: 'blue', textDecorationLine: 'underline'}}
        onPress={() => Linking.openURL('http://google.com')}>Edit 
        </Text>
      </View>

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Profile{'                                                          '}
          <TouchableOpacity style={styles.IconButtonContainer}>
            <Feather name="edit-3" size={20} color="grey" />
          </TouchableOpacity>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("EmergencyContacts")}>
        <Text style={styles.buttonText}>Emergency Contacts{'                                '}
          <TouchableOpacity style={styles.IconButtonContainer}>
            <Feather name="edit-3" size={20} color="grey" />
          </TouchableOpacity>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Preferences")}>
        <Text style={styles.buttonText}>Preferences{'                                               '}
          <TouchableOpacity style={styles.IconButtonContainer}>
            <Feather name="edit-3" size={20} color="grey" />
          </TouchableOpacity>
        </Text>
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

function EmergencyContactsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>your list of emergency contacts</Text>

      <Button onPress={() => navigation.goBack()} title="Back" />
    </View>
  )
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
          // headerTitleStyle: styles.headerTitleStyle,
          // headerStyle: styles.headerStyle,
        }}
      />
    </SettingsStack.Navigator>
  );
}

//This is the main function
const Stack = createStackNavigator();
export default function App() {
  return (
      <Stack.Navigator mode="modal" headerMode="none">
        <Stack.Screen
          name="SettingsStack"
          component={SettingsStackScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen name="EmergencyContacts" component={EmergencyContactsScreen} />
        <Stack.Screen name="Preferences" component={PreferencesScreen} />
      </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgrey",
  },
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 30,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  headerStyle: {
    height: 100,
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
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: 70,
    margin: 8,
    borderRadius: 50,
    borderWidth: 3,
    borderStyle: "solid",
    borderRadius: 50,
    borderColor: "#bf00ff",
    // borderColor: "lightgrey",
  },

  buttonText: {
    marginLeft: 20,
    fontSize: 18, 
  },

  profileicon: {
    height: 150,
    width: 150,
    marginTop: 30,
  }, 

  ImageContainer: {
    alignItems: "center", 
    backgroundColor: 'transparent', 
    margin: 10,
  }, 

  username: {
    padding: 10, 
    fontSize: 25,
    fontWeight: "bold", 
    fontStyle: "italic",
  }, 

  IconButtonContainer: {
    alignContent: "flex-end", 
    justifyContent: "center", 
    alignItems: "flex-end",
    backgroundColor: "transparent"
  }
});