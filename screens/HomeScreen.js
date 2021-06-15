import * as React from "react";
import  { useState } from "react" ;
import { Text, View, StyleSheet , Button , Image , TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Linking } from 'react-native';

export default function HomeScreen() {
  const [text, setText] = useState('');
  return (
   <View style={style.container}>
      <Text style={style.header}>Home</Text>
      <Text style ={style.secondline}>Good Morning (name)!</Text>
      <Text style={style.thirdline}>How are you feeling today?</Text>

   
    {/* [text, setText] = useState(''); */}

    <View style={{padding: 10}}>
        <TextInput
         style={{height: 40}}
         placeholder="Type here to translate!"
         onChangeText={text => setText(text)}
         defaultValue={text}
        />

       {/* <Text style={{padding: 10, fontSize: 42}}>
          {text.split(' ').map((word) => word && '🍕').join(' ')}
       </Text> */}

     </View>
    


      <View style = {style.buttonStyle}>
      <Button
        title="Angry"
      //  onPress={() => navigation.navigate("Don't Get Scammed")}
      />
       
      <Button
        title="Sad"
      //  onPress={() => navigation.navigate("Don't Get Scammed")}
      />
      <Button
        title="Frustrated"
      //  onPress={() => navigation.navigate("Don't Get Scammed")}
      />
     
      <Button
        title="Anxious"
      //  onPress={() => navigation.navigate("Don't Get Scammed")}
      />
      <Button
        title="Happy"
      //  onPress={() => navigation.navigate("Don't Get Scammed")}
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

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
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
    marginLeft: 30,
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
