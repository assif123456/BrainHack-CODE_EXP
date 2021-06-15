import * as React from "react";
import { Text, View, StyleSheet , Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Linking } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={style.container}>
      <Text style={style.header}>Home</Text>
      <Text style ={style.secondline}>Good Morning (name)!</Text>
      <Text style={style.thirdline}>How are you feeling today?</Text>

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
  }


});
