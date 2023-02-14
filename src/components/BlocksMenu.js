import { ScrollView, View, Text, StyleSheet } from "react-native";
import space from "../design-system/common/space";
import { GradientContainer } from "../elements/";

const BlocksMenu = ({ title }) => {
  return (
    <GradientContainer>
      <Text style={styles.title}>{title}</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.container}
      >
        <View>
          <View style={styles.element_container}>
            <View style={styles.element}>
              <Text style={styles.text}>BlocksMenu</Text>
            </View>
            <View style={styles.element}>
              <Text style={styles.text}>BlocksMenu</Text>
            </View>
            <View style={styles.element}>
              <Text style={styles.text}>BlocksMenu</Text>
            </View>
            <View style={styles.element}>
              <Text style={styles.text}>BlocksMenu</Text>
            </View>
            <View style={styles.element}>
              <Text style={styles.text}>BlocksMenu</Text>
            </View>
          </View>
          <View style={styles.element_container}>
            <View style={styles.element}>
              <Text style={styles.text}>BlocksMenu</Text>
            </View>
            <View style={styles.element}>
              <Text style={styles.text}>BlocksMenu</Text>
            </View>
            <View style={styles.element}>
              <Text style={styles.text}>BlocksMenu</Text>
            </View>
            <View style={styles.element}>
              <Text style={styles.text}>BlocksMenu</Text>
            </View>
            <View style={styles.element}>
              <Text style={styles.text}>BlocksMenu</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </GradientContainer>
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
    width: 180,
    paddingVertical: 30,
    paddingHorizontal: space.M,
    backgroundColor: "#999999",
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
