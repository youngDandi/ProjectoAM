import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import space from "../design-system/common/space";
import { GradientContainer } from "../elements/";

const BlocksMenu = ({ title }) => {
  const credit1 = require("../assets/creditcard1.png");
  const credit2 = require("../assets/creditcard2.png");
  return (
    <View
      style={{ justifyContent: "space-around", alignItems: "center", flex: 1 }}
    >
      <Text style={styles.title}>{title}</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.container}
      >
        <View>
          <View style={styles.element_container}>
            <ImageBackground
              resizeMode="stretch"
              source={credit1}
              style={styles.element}
            ></ImageBackground>
            <ImageBackground
              resizeMode="stretch"
              source={credit2}
              style={styles.element}
            ></ImageBackground>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const gap = 7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
  },
  element_container: {
    flexDirection: "row",
    marginHorizontal: gap * 2,
    marginVertical: gap,
  },
  element: {
    width: 300,
    paddingVertical: 30,
    height: 200,
    paddingHorizontal: space.M,
    marginHorizontal: gap,
  },
  title: {
    fontSize: 20,
    marginLeft: space.S,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});

export default BlocksMenu;
