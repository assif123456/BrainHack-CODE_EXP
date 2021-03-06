import * as React from "react";
import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import App from "./ChatBot";
import Fire from "../database/Fire";
import { TextInput } from "react-native-gesture-handler";
import { GiftedChat } from "react-native-gifted-chat";

function ChatScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{color: "lightgrey", alignItems: "flex-end", marginRight: 18}} onPress={() => navigation.navigate("Alert Someone")}>
          <FontAwesome name="bullhorn" size={18} color="grey" />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.button}
        onPress={() => navigation.navigate("Enter your name!")}
      >
        <Image
          style={style.butonImage}
          source={{
            uri: "https://image.flaticon.com/icons/png/512/1441/1441180.png",
          }}
          onPress={() => navigation.navigate("Enter your name!")}
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

function NameScreen({ navigation }) {
  const [NameText, setNameText] = useState("");
  return (
    <View
      style={{
        fontSize: 30,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Text>Enter your name:</Text>
      <TextInput
        style={style.textInput}
        onChangeText={(text) => setNameText(text)}
      />
      <Button
        onPress={() => navigation.navigate("Messenger", { name: NameText })}
        title="Submit"
      />
    </View>
  );
}
class Chat extends React.Component {
  static navigationOptions = ({ navigation, route }) => ({
    title: (route.params || {}).name || "Chat!",
  });

  state = {
    messages: [],
  };

  get user() {
    return {
      name: this.props.route.params.name,
      _id: Fire.shared.uid,
    };
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
      />
    );
  }

  componentDidMount() {
    Fire.shared.on((message) =>
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    Fire.shared.off();
  }
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
  textInput: {
    borderColor: "black",
    padding: 5,
    backgroundColor: "white",
    marginTop: 10,
    width: "90%",
  },
});

const Stack = createStackNavigator();

export default function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Bot" component={App} />
      <Stack.Screen name="Enter your name!" component={NameScreen} />
      <Stack.Screen name="Messenger" component={Chat} />
    </Stack.Navigator>
  );
}
