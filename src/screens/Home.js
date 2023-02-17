import { ScreenContainer } from "../elements";
import { Text, TouchableOpacity } from "react-native";
import { BlocksMenu } from "../components";
import React from "react";
import Saldos from "../components/Saldos";

const Home = () => {
    return (
        <ScreenContainer>
            <BlocksMenu title="Meus Cartões" />
            <Saldos />
        </ScreenContainer>
    );
};

export default Home;
