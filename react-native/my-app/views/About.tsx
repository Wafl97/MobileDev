import { NavigationContainer } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import NavButton from "../components/NavButton";
import { RootStackParamList } from "../misc/types";
import Style from '../styles/default';

type ScreenProps = NativeStackScreenProps<RootStackParamList, "About">;

const AboutScreen: React.FC<ScreenProps> = (props) => {

    return (
        <View style={ Style.container }>
            <Text style={ Style.title }>About</Text>
            <NavButton title="Back to Home" navTo={ () => props.navigation.navigate("Home") } />
        </View>
    )
}

export default AboutScreen;