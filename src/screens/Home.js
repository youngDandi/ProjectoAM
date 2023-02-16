import { ScreenContainer } from "../elements";
import { Text, TouchableOpacity } from "react-native";
import { BlocksMenu } from "../components";
import React from "react";

const Home = () => {
    return (
        <ScreenContainer>
            <BlocksMenu title="Categorias" />
        </ScreenContainer>
    );
};

export default Home;
