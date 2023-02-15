import { StyleSheet,  ImageBackground, TextInput, TouchableOpacity, View, Text} from 'react-native';
import { useState } from 'react';

export default function Login({navigation: {navigate}}) {
   
  const image= require("../assets/login.png");
  return (
    <ImageBackground source={image} style={styles.container}>
        <View style={styles.op}>
            <Text style={styles.texto}>Login</Text>
            <Text style={styles.texto} onPress={() => navigate("SignUp")}>Sign Up</Text>
        </View>
        
        <View>
            <TextInput 
               type="text" 
               placeholder='email' 
               style={styles.email} 
               
               />

            <TextInput 
               type="password" 
               placeholder='palavra-passe' 
               style={styles.pass} 
               
               />

        <TouchableOpacity style={styles.B} onPress={() => navigate("Home")}/>

        </View>
        
        <Text style={styles.Visitante} onPress={() => navigate("Home")}>Visitante </Text>
        
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
 container:{
    flex: 1,
    width: "100%",
    height: "100%",
 },

op:{
    display: "flex",
    flexDirection: "row",
    marginLeft: 222,
    opacity: 0.10,
},

 texto:{
    fontSize: 20,
    color: "#676464",
    marginTop: 176,
    marginLeft: 17,
    
 },

 email:{
    borderRadius: 50,
    marginLeft: 25,
    marginRight: 55,
    height: 20,
    backgroundColor: "white",
    fontSize: 25,
    marginTop: 220,
    alignItems: "center",
    justifyContent:"center",
 },

 pass: {
    borderRadius: 50,
    marginLeft: 25,
    marginRight: 55,
    height: 20,
    backgroundColor: "#FFFFFF",
    fontSize: 25,
    marginTop: 29,
    alignItems: "center",
    justifyContent:"center",
 },
 
 B: {
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    opacity: 0.10,
    height: 25,
    marginTop: 45,
    width: 345,
 },

 Visitante:{
    marginTop: 57,
    marginLeft: 165,
    opacity: 0.10,
 },
});