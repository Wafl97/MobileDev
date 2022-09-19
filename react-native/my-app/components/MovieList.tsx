import React from "react";
import { FlatList } from "react-native";
import NavButton from "./NavButton";

interface Props {
    DATA: any
    navigation: any
};

export default function MovieList(props: Props) {

    const Item = (item: any) => (
        <NavButton title={ item.title } navTo={ () => props.navigation.navigate("Movie", { id: item.id, title: item.title }) } />
    );

    return (
        <FlatList 
            data={ props.DATA } 
            renderItem={({ item }) => (<Item title={ item.title } />)} 
            keyExtractor={item => item.id} 
        />
    )
};