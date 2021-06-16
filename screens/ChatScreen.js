import * as React from "react";
import { useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import FontAwesome from "react-native-vector-icons/FontAwesome";

function ChatScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ color: "lightgrey", alignItems: "flex-end", padding: 20 }}
          onPress={() => navigation.navigate("Contact the Police")}
        >
          <FontAwesome name="bullhorn" size={24} color="grey" />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <View style={style.container}>
      <TouchableOpacity style={style.button}>
        <Image
          style={style.butonImage}
          source={{
            uri: "https://image.flaticon.com/icons/png/512/1441/1441180.png",
          }}
        />
        <Text style={style.buttonText}>Contact a friend</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button}>
        <Image
          style={style.butonImage}
          source={{
            uri: "https://image.flaticon.com/icons/png/512/3126/3126554.png",
          }}
        />
        <Text style={style.buttonText}>Find a social worker</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button}>
        <Image
          style={style.butonImage}
          source={{
            uri: "https://image.flaticon.com/icons/png/512/2111/2111634.png",
          }}
          resizeMode="center"
        />
        <Text style={style.buttonText}>Post annoymously on a forum</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.button}
        onPress={() => navigation.navigate("Bot")}
      >
        <Image
          style={style.butonImage}
          source={{
            uri: "https://image.flaticon.com/icons/png/512/2602/2602681.png",
          }}
        />
        <Text style={style.buttonText}>Chat with bot</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button}>
        <Image
          style={style.butonImage}
          source={{
            uri: "https://cdn1.iconfinder.com/data/icons/user-interface-2-glyph/32/ui_history_schedule_time-512.png",
          }}
        />
        <Text style={style.buttonText}>Chat History</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 10,
  },
  button: {
    flexDirection: "row",
    width: "100%",
    height: 75,
    margin: 8,
    backgroundColor: "white",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "flex-start",
    padding: 15,
    borderWidth: 3,
    borderStyle: "solid",
    borderRadius: 50,
    borderColor: "#bf00ff",
  },
  buttonText: {
    fontSize: 18,
    marginLeft: 10,
  },
  butonImage: {
    width: 40,
    height: 40,
    // borderRadius: 25,
    margin: 10,
  },
});

const Stack = createStackNavigator();

export default function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Bot" component={App} />
    </Stack.Navigator>
  );
}
