import { ScreenContainer, SearchInput, GradientContainer } from "../elements";
import { BlocksMenu } from "../components";
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  Image,
  View,
} from "react-native";
import colors from "../design-system/theme/light-theme/colors";
const Inicio = ({ navigation: { navigate } }) => {
  const logo = require("../assets/logo.png");
  const fundo = require("../assets/fundoInicial.png");
  return (
    <ImageBackground
      source={fundo}
      style={styles.container}
      resizeMode="stretch"
    >
      <Image source={logo} style={{ width: 200, height: 200 }} />

      <Text style={styles.menssagem}>Vamos Começar!</Text>
      <TouchableOpacity>
        <Text style={styles.botao} onPress={() => navigate("Login")}>
          Entrar
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  menssagem: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "bold",
  },
  botao: {
    borderRadius: 10,
    backgroundColor: "#FFF",
    padding: 20,
    overflow: "hidden",
    fontSize: 18,
    color: colors.primary,
    fontWeight: "bold",
    paddingHorizontal: 90,
  },
});

export default Inicio;
