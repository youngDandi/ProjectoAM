import { StyleSheet, ImageBackground, View, Text, Image } from "react-native";
import { InputDeTexto, PrimaryButton } from "../elements";
import colors from "../design-system/theme/light-theme/colors";

export default function Login({ navigation: { navigate } }) {
  const image = require("../assets/loginFundo.png");
  const imageLogin = require("../assets/loginImg.png");
  return (
    <ImageBackground
      source={image}
      resizeMode="stretch"
      style={styles.container}
    >
      <View
        style={{
          justifyContent: "center",
          marginBottom: 140,
          height: 240,
          width: 350,
        }}
      >
        <View style={{ marginStart: "auto", flexDirection: "row" }}>
          <Text
            style={{
              marginEnd: 20,
              color: colors.primary,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Login
          </Text>
          <Text style={styles.texto} onPress={() => navigate("SignUp")}>
            Sign Up
          </Text>
        </View>

        <View style={{ alignItems: "center", marginVertical: 10 }}>
          <Image source={imageLogin} />
        </View>

        <View style={{ flex: 1, alignItems: "center" }}>
          <InputDeTexto
            placeholder={"Endereço electrónico"}
            icon={"email-box"}
          />
          <InputDeTexto
            placeholder={"Palavra-passe"}
            icon={"form-textbox-password"}
          />
          <PrimaryButton onPress={() => navigate("Home")} />
          <Text
            style={{
              marginTop: 10,
              color: colors.primary,
              fontWeight: "bold",
              fontSize: 17,
            }}
            onPress={() => {
              navigate("Visitor");
            }}
          >
            Visitante
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  texto: {
    fontSize: 20,
    color: "#676464",
  },

  email: {
    borderRadius: 50,
    height: 20,
    backgroundColor: "white",
    fontSize: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  pass: {
    borderRadius: 50,
    marginLeft: 25,
    marginRight: 55,
    height: 20,
    backgroundColor: "#FFFFFF",
    fontSize: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});
