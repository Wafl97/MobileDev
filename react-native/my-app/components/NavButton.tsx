import React from 'react';
import { View, Pressable } from 'react-native';
import Style from '../styles/default';


interface Props {
    title: string,
    navTo: () => void,
}

export default function NavButton(props: Props) {

    return (
        <Pressable onPress={ props.navTo } style={ Style.button } >
            { props.title }
        </Pressable>
    )
}