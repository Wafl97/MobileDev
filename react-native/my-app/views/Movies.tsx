import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { FlatList, View, Text, Pressable, Image } from "react-native";
import NavButton from "../components/NavButton";
import { RootStackParamList } from "../misc/types";
import Style from '../styles/default';
import { api_key, api_url, img_path } from "../misc/misc";

type ScreenProps = NativeStackScreenProps<RootStackParamList, "Movies">;

const MoviesScreen: React.FC<ScreenProps> = (props) => {

    const [isSearchVisable, setSearchVisable] = useState(props.route.params.rtn);

    const [currnetSearch, setCurrentSearch] = useState([]);

    const [movies, setMovies] = useState();

    useEffect(() => {
        console.log("Fetching...");
        fetch(api_url + "/trending/movie/week" + api_key)
        .then((res) => (res.json()))
        //.then((res) => (console.log(res.results)))
        .then((json) => (setMovies(json.results)));

        return function() {
            console.log("...Done");
        }
    }, [] );

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
        <View>
            <NavButton title={ item.title } navTo={ () => props.navigation.navigate("Movie", { id: item.id, title: item.title }) } />
            <Image style={ Style.poster } source={{ uri: img_path + item.img_path }}/>
        </View>
    );
  
    return (
        <View style={ Style.container }>
            <Text style={ Style.title }>Movies</Text>
            <NavButton title="Back to Home" navTo={ () => props.navigation.navigate("Home") } />
            <Text style={ Style.title }>Find Movie</Text>
            <FlatList 
                data={ movies } 
                renderItem={({ item }) => (<Item title={ item.title } img_path={ item.poster_path } id={ item.id }/>)} 
                keyExtractor={ item => item.id } 
            />
        </View>
    )
}

export default MoviesScreen;