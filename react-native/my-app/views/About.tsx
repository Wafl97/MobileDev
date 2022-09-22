import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import { RootStackParamList } from "../services/types";
import Style from '../styles/default';

type ScreenProps = NativeStackScreenProps<RootStackParamList, "About">;

const AboutScreen: React.FC<ScreenProps> = (props) => {

    return (
        <View style={ Style.container }>
            <Text>This app uses TMDb's api for fetching movies</Text>
            <Text>By Marc L. W. Bertelsen (berte20)</Text>
        </View>
    )
}

export default AboutScreen;