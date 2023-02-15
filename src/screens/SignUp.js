import { StyleSheet, ImageBackground, View, Text } from "react-native";
import { InputDeTexto, PrimaryButton } from "../elements";
import colors from "../design-system/theme/light-theme/colors";

export default function SignUp({ navigation: { navigate } }) {
  const image = require("../assets/loginFundo.png");
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
        <View
          style={{
            marginStart: "auto",
            flexDirection: "row",
            marginBottom: 30,
          }}
        >
          <Text style={styles.texto} onPress={() => navigate("Login")}>
            Login
          </Text>
          <Text
            style={{
              marginStart: 20,
              color: colors.primary,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Sign Up
          </Text>
        </View>

        <View style={{ flex: 1, alignItems: "center" }}>
          <InputDeTexto placeholder={"Nome e Sobrenome"} icon={"id-card"} />
          <InputDeTexto placeholder={"Email electrónico"} icon={"email-box"} />
          <InputDeTexto placeholder={"Endereço"} icon={"home"} />
          <InputDeTexto
            placeholder={"Palavra-passe"}
            icon={"form-textbox-password"}
          />
          <PrimaryButton onPress={() => navigate("Home")} />
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
    paddingTop: 50,
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
