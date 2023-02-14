import { View, TextInput } from "react-native";
import React from "react";
import global from "../../design-system/global-styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const SearchInput = () => {
  return (
    <View style={global.inputWrapper}>
      <MaterialCommunityIcons
        name="magnify"
        size={20}
        color={"rgba(184, 184, 184, 0.6)"}
      />
      <TextInput
        inputMode="search"
        style={global.input}
        placeholder="Search anything"
      />
    </View>
  );
};

export default SearchInput;
