import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text } from "react-native";
import NavButton from "../components/NavButton";
import { RootStackParamList } from "../misc/types";
import Style from '../styles/default';

type ScreenProps = NativeStackScreenProps<RootStackParamList, "Movies">;

const MovieScreen: React.FC<ScreenProps> = (props) => {
    const [state, setState] = useState(0);

    function clickHandler() {
      //setState(state + 1);
      //console.log(state);
      props.navigation.navigate('About');
    }
  
    return (
        <View style={ Style.container }>
            <Text style={ Style.title }>Movies</Text>
            <NavButton title="Back to Home" navTo={ () => props.navigation.navigate("Home") } />
            <NavButton title="View Actors" navTo={ () => props.navigation.push("Actors") } />
        </View>
    )
}

export default MovieScreen;