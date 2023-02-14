import { View, Text, ScrollView } from "react-native";
import React from "react";
import space from "../../design-system/common/space";

const ScreenContainer = ({ children }) => {
  return (
    <ScrollView
      style={{
        paddingHorizontal: space.S,
        paddingTop: space.S,
        backgroundColor: "#FDFDFD",
        flex: 1,
      }}
    >
      <View>{children}</View>
    </ScrollView>
  );
};

export default ScreenContainer;
