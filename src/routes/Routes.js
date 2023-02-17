import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
    Search,
    Wishlist,
    Home,
    Files,
    Inicio,
    Login,
    SignUp,
} from "../screens";
import Visitor from "../screens/Visitor";

const Stack = createStackNavigator();

const Routes = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Visitor" component={Visitor} />
        <Stack.Screen name="MyBooks" component={Files} />
        <Stack.Screen name="Wishlist" component={Wishlist} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
);

export default Routes;
