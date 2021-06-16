import * as React from "react";
import  { useState ,useEffect } from "react" ;
import { Text, View, StyleSheet , Button , Image , TextInput , ScrollView, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Linking } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { createStackNavigator } from "@react-navigation/stack";

export default function HomeScreen() {
  return (
    
    <Stack.Navigator  >
      <Stack.Screen name="Home" component={HomeScreen0} />
      <Stack.Screen name="Archive" component={HomeSecondScreen} />
      <Stack.Screen name="Contact the Police" component={HomeThirdScreen} />
    </Stack.Navigator>

 
  );
}

function HomeScreen0({ navigation }) {
  const [text, setText] = useState('');
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{color: "lightgrey", alignItems: "flex-end", padding: 20}} onPress={() => navigation.navigate("Contact the Police")}>
          <FontAwesome name="bullhorn" size={24} color="grey" />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <ScrollView style={style.scrollView} >
     <View style={style.container}>
        <Text style ={style.secondline}>Good Morning Jane!</Text>
        <Text style={style.thirdline}>How are you feeling today?</Text>
        
      <View style={{padding: 5, marginLeft:20,}}>
          <TextInput
           style={{height: 40}}
           placeholder="Type here!"
           onChangeText={text => setText(text)}
           defaultValue={text}
          />
      </View>
  
      <View style= {{
          justifyContent: 'flex-start', 
          alignItems:'center', 
          marginLeft: 25, 
          backgroundColor: "lightblue", 
          borderRadius: 20, 
          padding: 2,
          width: 60,
          }}>
        <TouchableOpacity onPress={() => navigation.navigate("Archive")}>
          <Text styles={{color:"purple", fontWeight: "bold"}}>Submit</Text>
        </TouchableOpacity>
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
        <Text style = {style.text}>Quote of the Day</Text>
        <View style={style.QuoteContainer}>
          <Image style= {style.image} source = {{uri: "https://scontent.fsin10-1.fna.fbcdn.net/v/t1.6435-9/91179740_195383668581726_5477380571501953024_n.png?_nc_cat=111&ccb=1-3&_nc_sid=973b4a&_nc_ohc=fSQo6AGCeqEAX9yZkIt&_nc_ht=scontent.fsin10-1.fna&oh=88064fba12c4d9875833805778ec34e0&oe=60CCB5EA"}}/> 
        </View>
      </View>
      </ScrollView>
    );
}

function HomeSecondScreen() {
  return (
    <Text></Text>
  );
}

function HomeThirdScreen() {
  return <Text>SMS 71999 if it's not safe to call the police. When your message is successfully received by the police, an acknowledgement message will be sent back to you. https://www.police.gov.sg/SMS-71999</Text>;

}

const Stack = createStackNavigator();


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
    fontWeight: 'bold',
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
    marginLeft:25,
    fontSize:20,
    marginBottom: 10,
    fontWeight: "bold",
  },

  image:{
    width: 400, 
    height: 400,
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  input:{
    borderColor: "black",
    padding: 5,
    backgroundColor: "white",
    marginTop: 10,
    width: "90%",
  },
  scrollView: {
    marginHorizontal: 10,
  },

  QuoteContainer: {
    width: "100%", 
    flex: 1,
    alignItems: "center", 
    justifyContent: "center",
    position: "relative", 
    margin: 10,
  }
});