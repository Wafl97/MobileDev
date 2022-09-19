import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text } from "react-native";
import NavButton from "../components/NavButton";
import { RootStackParamList } from "../misc/types";
import Style from '../styles/default';

type ScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<ScreenProps> = (props) => {
  
  return (
    <View style={ Style.container }>
      <Text style={ Style.title } >Home Screen</Text>
      <NavButton title="About" navTo={ () => props.navigation.navigate("About") } />
      <NavButton title="Movies" navTo={ () => props.navigation.navigate("Movies") } />
    </View>
  )
}

export default HomeScreen;