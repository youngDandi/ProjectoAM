import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import space from "../../design-system/common/space";

const GradientContainer = ({ children }) => {
  return (
    <LinearGradient
      style={{ marginHorizontal: -space.S, paddingTop: 30 }}
      colors={["transparent", "rgba(0, 0, 0, 0.05)"]}
      locations={[0.2, 1]}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientContainer;
