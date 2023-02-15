import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import space from "../../design-system/common/space";

const GradientContainer = ({ children, color1, color2, loc1, loc2 }) => {
  return (
    <LinearGradient
      colors={[color1, color2]}
      locations={[loc1, loc2]}
      style={{ justifyContent: "space-around", alignItems: "center", flex: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientContainer;
