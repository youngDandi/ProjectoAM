import { View, TextInput } from "react-native";
import React from "react";
import global from "../../design-system/global-styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const InputDeTexto = ({
    icon,
    placeholder,
    type,
    isPassword,
    value,
    onChangeText,
}) => {
    return (
        <View style={global.inputWrapper}>
            <MaterialCommunityIcons
                name={icon}
                size={20}
                color={"rgba(184, 184, 184, 0.6)"}
            />
            <TextInput
                inputMode={type}
                style={global.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={isPassword}
            />
        </View>
    );
};

export default InputDeTexto;
