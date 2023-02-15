import { ScreenContainer, SearchInput } from "../elements";
import { BlocksMenu } from "../components";
import { StyleSheet,  ImageBackground, TouchableOpacity, Text} from 'react-native';
const Inicio = ({navigation: {navigate}}) => {
  const image= require("../assets/inicio.png");
  return (
    <ImageBackground source={image} style={styles.container}>

      
       <TouchableOpacity style={styles.botao} onPress={() => navigate("Login")}>
       </TouchableOpacity> 
    </ImageBackground>
  );
  
};

const styles = StyleSheet.create({
  container:{
     flex: 1,
     width: "100%",
     height: "100%",
  },
 
  botao:{
     borderRadius: 50,
     widht: "90%",
     backgroundColor: "#D9D9D9",
     opacity: 0.05,
     marginTop: 765,
     marginLeft: 75,
     marginRight: 67,
     height: 45,
  },
 
  Tbotao:{
   color:"#FFFFFF",
  },
 
 });
 
export default Inicio;