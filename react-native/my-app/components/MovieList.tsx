import React from "react";
import { FlatList, ImageBackground , Pressable, Text, View } from "react-native";
import Style from "../styles/default";
import { img_path } from "../services/env";

interface Props {
    DATA: any,
    navigation: any,
};

interface Movie {
    title: string,
    id: string,
    backdrop: string,
}

export default function MovieList(props: Props) {

    const Item = (item: Movie) => (
        <Pressable onPress={ () => props.navigation.navigate("Movie", { id: item.id, title: item.title }) }>
            {
                item.backdrop == "" || item.backdrop == undefined
                ?
                <View style={ Style.missing_img }>
                    <Text style={ Style.list_title }>{ item.title }</Text>
                </View>
                :
                <ImageBackground style={ Style.image_small } source={{ uri: img_path + item.backdrop }} >
                    <Text style={ Style.list_title }>{ item.title }</Text>
                </ImageBackground>
            }
        </Pressable>
    );

    return (
        <FlatList 
            data={ props.DATA } 
            renderItem={({ item }) => (<Item title={ item.title } id={ item.id } backdrop={ item.backdrop_path } />)} 
            numColumns={ 3 }
            keyExtractor={ item => item.id }
            showsVerticalScrollIndicator={ false }
        />
    )
};