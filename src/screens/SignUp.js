import { StyleSheet, ImageBackground, TouchableOpacity, TextInput, View, Text, Alert } from 'react-native';
import { useState } from 'react';




export default function SignUp({navigation: {navigate}}) {
   const image = require("../assets/signUp.png");

  return (
  
    <ImageBackground source={image} style={styles.container}>
         <View style={styles.opcao}>
            <Text style={styles.textoo} onPress={() => navigate("Login")}>Login</Text>
            <Text style={styles.textoo}>Sign Up</Text>
         </View>
         <View style={styles.form}>
            <TextInput
               placeholder='nome' 
               style={styles.input}
               
            />

            <TextInput 
               placeholder='sobrenome' 
               style={styles.input}
               
            />
            <TextInput
               placeholder="Selecione sua data de nascimento"
               style={styles.input}
               
               mode="date"
               format="YYYY-MM-DD"
               confirmBtnText="Confirm"
               cancelBtnText="Cancel"
               onDateChange={(date) => setDataNasc(date)}
            />

            <TextInput 
               placeholder='email' 
               style={styles.input} 
           
            />
          

          <TextInput
            secureTextEntry={true}
            placeholder="palavra-passe"
            style={styles.input}
           
         />

            <TouchableOpacity style={styles.Bo} />
        </View>


    </ImageBackground>
        
        
    
  );
}

const styles = StyleSheet.create({
 container:{
    flex: 1,
    width: "100%",
    height: "100%",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#366682",
 },

 opcao:{
   display: "flex",
   flexDirection: "row",
   marginLeft: 222,
   opacity: 0.05,
},

textoo:{
   fontSize: 20,
   color: "#676464",
   marginTop: -22,
   marginLeft: 15,
   
},

form:{
   marginTop: 195,
},

 input:{
   borderRadius: 50,
   marginLeft: 25,
   marginRight: 55,
   height: 17,
   backgroundColor: "white",
   fontSize: 25,
   marginTop: 25,
   alignItems: "center",
   justifyContent:"center",
 },

 inputT: {
    color: '#366682',
 },
 
  Bo:{
   width: 314,
   height: 32,
   backgroundColor: "white",
   opacity: 0.05,
   marginTop: 12,
   marginLeft:25,
  },
});
