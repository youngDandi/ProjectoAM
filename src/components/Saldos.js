import { View, Text } from "react-native";
import React from "react";
import { useState } from "react";
import colors from "../design-system/theme/light-theme/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Saldos = () => {
    // const [show, setShow] = useState(!show);

    return (
        <>
            {/* <View
                style={{ marginStart: "auto", marginBottom: 20 }}
                onPress={() => setShow(show)}
            >
                <MaterialCommunityIcons
                    name={"eye"}
                    size={32}
                    color={"rgba(184, 184, 184, 0.6)"}
                />
            </View> */}
            <View style={{ flexDirection: "row" }}>
                <View>
                    <Text
                        style={{
                            marginBottom: 20,
                            fontWeight: "thin",
                            fontSize: 23,
                        }}
                    >
                        Saldo
                    </Text>
                    <Text style={{ marginBottom: 20, fontWeight: "bold" }}>
                        Mesada
                    </Text>
                    <Text style={{ marginBottom: 20, fontWeight: "bold" }}>
                        Divida recebida
                    </Text>
                    <Text style={{ marginBottom: 20, fontWeight: "bold" }}>
                        Saldo Africell
                    </Text>
                    <Text style={{ marginBottom: 20, fontWeight: "bold" }}>
                        Combustivel
                    </Text>
                    <Text style={{ marginBottom: 20, fontWeight: "bold" }}>
                        Material escolar
                    </Text>
                </View>
                {/* {show && ( */}
                <View style={{ marginStart: "auto", alignItems: "flex-end" }}>
                    <Text
                        style={{
                            marginBottom: 20,
                            fontWeight: "thin",
                            color: colors.primary,
                            fontSize: 23,
                        }}
                    >
                        +1000.00KZ
                    </Text>
                    <Text
                        style={{
                            marginBottom: 20,
                            fontWeight: "bold",
                            color: colors.primary,
                        }}
                    >
                        +1000.00KZ
                    </Text>
                    <Text
                        style={{
                            marginBottom: 20,
                            fontWeight: "bold",
                            color: colors.primary,
                        }}
                    >
                        +1000.00KZ
                    </Text>
                    <Text
                        style={{
                            marginBottom: 20,
                            fontWeight: "bold",
                            color: colors.terciary,
                        }}
                    >
                        -210.10KZ
                    </Text>
                    <Text
                        style={{
                            marginBottom: 20,
                            fontWeight: "bold",
                            color: colors.terciary,
                        }}
                    >
                        -100.00KZ
                    </Text>
                    <Text
                        style={{
                            marginBottom: 20,
                            fontWeight: "bold",
                            color: colors.terciary,
                        }}
                    >
                        -500.00KZ
                    </Text>
                </View>
                {/* )} */}
            </View>
        </>
    );
};

export default Saldos;
