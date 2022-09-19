import React from "react";
import { FlatList, ImageBackground , Pressable, Text } from "react-native";
import NavButton from "./NavButton";
import Style from "../styles/default";
import { img_path } from "../misc/misc";

interface Props {
    DATA: any
    navigation: any
};

interface Movie {
    title: string,
    id: string,
    backdrop: string,
}

export default function MovieList(props: Props) {

    const Item = (item: Movie) => (
        <Pressable onPress={ () => props.navigation.navigate("Movie", { id: item.id }) }>
            <ImageBackground style={ Style.image_small } source={{ uri: img_path + item.backdrop }} >
                <Text style={ Style.list_title }>{ item.title }</Text>
            </ImageBackground>
        </Pressable>
    );

    return (
        <FlatList 
            data={ props.DATA } 
            renderItem={({ item }) => (<Item title={ item.title } id={ item.id } backdrop={ item.backdrop_path } />)} 
            numColumns={ 3 }
            keyExtractor={ item => item.id } 
        />
    )
};