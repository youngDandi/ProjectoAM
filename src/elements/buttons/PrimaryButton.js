import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../design-system/theme/light-theme/colors";

const PrimaryButton = ({ onPress }) => {
    return (
        <TouchableOpacity
            style={{
                padding: 14,
                backgroundColor: colors.primary,
                overflow: "hidden",
                borderRadius: 10,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: 10,
            }}
        >
            <Text
                style={{
                    color: "#FFF",
                    fontWeight: "bold",
                    fontSize: 17,
                    flex: 1,
                    textAlign: "center",
                }}
                onPress={onPress}
            >
                Entrar
            </Text>
        </TouchableOpacity>
    );
};

export default PrimaryButton;
