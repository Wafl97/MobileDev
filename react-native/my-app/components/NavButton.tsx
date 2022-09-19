import React from 'react';
import { View, Pressable, Text } from 'react-native';
import Style from '../styles/default';


interface Props {
    title: string,
    navTo: () => void,
}

export default function NavButton(props: Props) {

    return (
        <Pressable onPress={ props.navTo } style={ Style.button } >
            <Text>{ props.title }</Text>
        </Pressable>
    )
}