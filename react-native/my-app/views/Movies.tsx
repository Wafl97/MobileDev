import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, SectionList, FlatList, Pressable } from "react-native";
import NavButton from "../components/NavButton";
import { RootStackParamList } from "../misc/types";
import Style from '../styles/default';

type ScreenProps = NativeStackScreenProps<RootStackParamList, "Movies">;

const MoviesScreen: React.FC<ScreenProps> = (props) => {

    const [isSearchVisable, setSearchVisable] = useState(props.route.params.rtn);

    const [currnetSearch, setCurrentSearch] = useState("");

    //TODO fetch real data
    const DATA = [ 
        {
            id: "0",
            title: "The First Movie"
        }, 
        { 
            id: "1",
            title: "Movie Too"
        }, 
        {
            id: "2",
            title: "3rd Time Is The Charm"
        }, 
        {
            id: "3",
            title: "Movie 4 Ever"
        }, 
        {
            id: "4",
            title: "Five" 
        },
        {
            id: "5",
            title: "Si6"
        },
        
    ]

    const Item = (item: any) => (
        <NavButton title={ item.title } navTo={ () => props.navigation.navigate("Movie", { id: item.id, title: item.title }) } />
    );
  
    return (
        <View style={ Style.container }>
            <Text style={ Style.title }>Movies</Text>
            <NavButton title="Back to Home" navTo={ () => props.navigation.navigate("Home") } />
            <Text style={ Style.title }>Find Movie</Text>
            { !isSearchVisable 
                ? 
                <Pressable onPress={ () => setSearchVisable(true) }>
                    <Text style={ Style.title }>...</Text>
                </Pressable>
                : 
                <Text>{ props.route.params.query == "" ? "Search" : props.route.params.query }</Text> 
            }
            <FlatList 
                data={ DATA } 
                renderItem={({ item }) => (<Item title={ item.title } />)} 
                keyExtractor={item => item.id} 
            />
        </View>
    )
}

export default MoviesScreen;