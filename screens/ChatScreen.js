import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import App from "./ChatBot";

function ChatScreen({ navigation }) {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.button}>
        <Image
          style={style.butonImage}
          source={{
            uri: "https://cdn4.iconfinder.com/data/icons/charity-donation-1/128/f-02-512.png",
          }}
        />
        <Text style={style.buttonText}>Contact a friend</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button}>
        <Image
          style={style.butonImage}
          source={{
            uri: "https://pbs.twimg.com/profile_images/530544120758935552/LNxiVzJR.png",
          }}
        />
        <Text style={style.buttonText}>Find a social worker</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button}>
        <Image
          style={style.butonImage}
          source={{
            uri: "https://cdn.iconscout.com/icon/free/png-256/reddit-55-432536.png",
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
          source={{ uri: "https://i.imgur.com/siVcRDk.png" }}
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
    alignItems: "flex-start",
  },
  button: {
    flexDirection: "row",
    width: "100%",
    height: "75px",
    margin: "10px",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 15,
    borderWidth: 3,
    borderStyle: "solid",
    borderRadius: 50,
    borderColor: "#bf00ff",
  },
  buttonText: {},
  butonImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
  },
});

const Stack = createStackNavigator();

export default function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Bot" component={App.render} />
    </Stack.Navigator>
  );
}
