import * as React from "react";
import  { useState } from "react" ;
import { Text, View, StyleSheet , Button , Image , TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Linking } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
// import * as SQLite from 'expo-sqlite';

// const db = SQLite.openDatabase("notes.db");
// const SAMPLE_NOTES = [
//   { title: "Walk the cat", id: "0", done: false },
//   { title: "Water the cat", id: "1", done: false },
//   { title: "Buy the milk", id: "2", done: false },
//   { title: "Water the milk", id: "3", done: false },
// ];
 export default function HomeScreen() {
  return (
    <Stack.Navigator  mode="modal" headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen0} />
      <Stack.Screen name="Archive" component={HomeSecondScreen} />
    </Stack.Navigator>
  );
}

function HomeScreen0({ navigation }) {
  const [text, setText] = useState('');
  return (

     <View style={style.container}>
        {/* <Text style={style.header}>Home</Text> */}
        <Text style ={style.secondline}>Good Morning (name)!</Text>
        <Text style={style.thirdline}>How are you feeling today?</Text>
  
     
      
      <View style={{padding: 10,marginLeft:20,}}>
          <TextInput
           style={{height: 40}}
           placeholder="Type here!"
           onChangeText={text => setText(text)}
           defaultValue={text}
          />
      </View>
  
      <View style= {{justifyContent: 'center', alignItems:'center'}}>
       <Button
          onPress={() => navigation.navigate("Archive")}
          title="Submit"
        />        
  
       </View>
        
        <Text style={{color: 'blue', marginLeft:20, padding: 10,textDecorationLine: 'underline'}}
        onPress={() => Linking.openURL('http://google.com')}>
         Click here for a more in-depth assesment
        </Text>
        <View
        style={{
           borderBottomColor: 'black',
           borderBottomWidth: 1,
           margin: 20,
        }}
        />
        <Text style = {style.text}>Quote of the Day!</Text>
  
      <Image style= {style.image} source = {{uri: "https://scontent.fsin10-1.fna.fbcdn.net/v/t1.6435-9/91179740_195383668581726_5477380571501953024_n.png?_nc_cat=111&ccb=1-3&_nc_sid=973b4a&_nc_ohc=fSQo6AGCeqEAX9yZkIt&_nc_ht=scontent.fsin10-1.fna&oh=88064fba12c4d9875833805778ec34e0&oe=60CCB5EA"}}/> 
      </View>
    );
}

function HomeSecondScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Archive"
        component={NotesScreen}
        options={{
          headerTitle: "Notes App",
          headerTitleStyle: style.headerTitleStyle,
          headerStyle: style.headerStyle,
        }}
      />
    </Stack.Navigator>
  );
}

const Stack = createStackNavigator();

function NotesScreen({ route, navigation }) {
  const [notes, setNotes] = useState(SAMPLE_NOTES);

  function refreshNotes() {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM notes",
        null,
        (txObj, { rows: { _array } }) => setNotes(_array),
        (txObj, error) => console.log("Error ", error)
      );
    });
  }

  // Create the DB on first run
  useEffect(() => {
    db.transaction(
      (tx) => {
        tx.executeSql(`
        CREATE TABLE IF NOT EXISTS notes
        (id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT,
          done INT);
      `);
      },
      null,
      refreshNotes
    );
  }, []);

  // Adds the + button in the top right
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Add")}>
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

  // Responds to coming back from the add screen
  useEffect(() => {
    if (route.params?.todoText) {
      // const newNote = {
      //   title: route.params.todoText,
      //   id: notes.length.toString(),
      //   done: false,
      // };
      // setNotes([...notes, newNote]);
      db.transaction(
        (tx) => {
          tx.executeSql("INSERT INTO notes (done, title) VALUES (0, ?)", [
            route.params.todoText,
          ]);
        },
        null,
        refreshNotes
      );
    }
  }, [route.params?.todoText]);

  function renderItem({ item }) {
    return (
      <View style={styles.listItem}>
        <Text>{item.title}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList style={styles.list} data={notes} renderItem={renderItem} />
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
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft:20,
    marginTop:30,
    padding: 10,
  },
  secondline:{
    fontSize: 30,
    fontStyle: 'italic',
    marginLeft: 10,
    padding:20,
  },
  thirdline:{
    fontSize: 20,
    fontStyle: 'italic',
    padding: 10,
    marginLeft: 20,
  },
  buttonStyle:{
    alignItems: "center",
    flexDirection:"row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
  },

  text:{
    marginLeft:20,
    padding:10,
    fontSize:20,
  },

  image:{
    width:300,
    height:300,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:30,
    marginTop:10,
    marginBottom:10,
  },

  input:{
    borderColor: "black",
    padding: 5,
    backgroundColor: "white",
    marginTop: 10,
    width: "90%",
  }

});
