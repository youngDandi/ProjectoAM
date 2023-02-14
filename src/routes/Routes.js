import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";
import { Search, Wishlist, Home, Files } from "../screens";
import space from "../design-system/common/space";

const Tab = createBottomTabNavigator();

const Routes = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === "Home") {
          iconName = focused ? "home-variant" : "home-variant-outline";
        } else if (route.name === "My Books") {
          iconName = focused ? "bookshelf" : "bookshelf";
        } else if (route.name === "Wishlist") {
          iconName = focused ? "cards-heart" : "cards-heart-outline";
        } else if (route.name === "Search") {
          iconName = focused ? "magnify" : "magnify";
        }

        return (
          <MaterialCommunityIcons name={iconName} size={size} color={color} />
        );
      },
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            // Do something
          }}
          style={{ paddingRight: space.S }}
        >
          <Ionicons name="ios-person-circle-outline" size={32} color="gray" />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            // Do something
          }}
          style={{ paddingLeft: space.S }}
        >
          <Image style={styles.logo} source={require("../assets/logo.png")} />
        </TouchableOpacity>
      ),
      tabBarActiveTintColor: "#E21F2C",
      tabBarInactiveTintColor: "gray",
      headerStyle: { height: 80 },
      headerTitleStyle: { fontSize: 18 },
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="My Books" component={Files} />
    <Tab.Screen name="Wishlist" component={Wishlist} />
    <Tab.Screen name="Search" component={Search} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 46,
  },
});

export default Routes;
