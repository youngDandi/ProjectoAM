import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";
import { Search, Wishlist, Home, Files, Inicio, Login, SignUp } from "../screens";
import space from "../design-system/common/space";

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
  >
    <Stack.Screen name="Inicio" component={Inicio} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="MyBooks" component={Files} />
    <Stack.Screen name="Wishlist" component={Wishlist} />
    <Stack.Screen name="Search" component={Search} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
);

export default Routes;
