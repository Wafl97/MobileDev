import React from "react";7
import { View, Text, Pressable } from "react-native";
import Style from "../styles/default";

interface Props {
    navigationCallBack: () => void;
}

export default function Footer(props: Props) {

    return (
        <Pressable 
            style={ Style.footer }
            onPress={ props.navigationCallBack }    
        >
            <Text style={ Style.footer_text } >About</Text>
        </Pressable>
    )
}