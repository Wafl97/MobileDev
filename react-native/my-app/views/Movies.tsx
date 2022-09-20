import { NativeStackScreenProps } from "@react-navigation/native-stack";
import MovieList from "../components/MovieList";
import React, { useEffect, useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import NavButton from "../components/NavButton";
import { RootStackParamList } from "../misc/types";
import Style from '../styles/default';
import Footer from "../components/Footer";
import { api_key, api_url, img_path } from "../misc/misc";

type ScreenProps = NativeStackScreenProps<RootStackParamList, "Movies">;

const MoviesScreen: React.FC<ScreenProps> = (props) => {

    const [search, setSearch] = useState("");
    const [isShowSearch, setIsShowSearch] = useState(false);
    const [movies, setMovies] = useState();

    useEffect(() => {
        console.log("Fetching...");
        fetchTrending();

        return function() {
            console.log("...Done");
        }
    }, []);

    useEffect(() => {
        console.log("Seaching...");
        search == "" ? fetchTrending() : fetchSearch();
        
        return function() {
            console.log("...Done");
        }
    }, [search])

    function fetchTrending() {
        fetch(api_url + "/trending/movie/week" + api_key)
        .then((res) => (res.json()))
        //.then((res) => (console.log(res.results)));
        .then((json) => (setMovies(json.results)));
    }

    function fetchSearch() {
        fetch(api_url + "/search/movie" + api_key + "&query=" + search)
        .then((res) => (res.json()))
        //.then((json) => (console.table(json.results)));
        .then((json) => (setMovies(json.results)));
    }
  
    return (
        <View style={ Style.container }>
            <Text style={ Style.title }>Movies</Text>
            {   isShowSearch 
                ?
                <TextInput 
                    placeholder="Seach for a movie" 
                    onChangeText={(text) => setSearch(text)}/>
                :
                <Pressable onPress={() => { setIsShowSearch(true) }}>
                    <Text>Search</Text>
                </Pressable>
            }
            <NavButton title="Back to Home" navTo={ () => props.navigation.navigate("Home") } />
            <Text style={ Style.title }>Trending Movies</Text>
            <MovieList DATA={ movies } navigation={ props.navigation } />
            <Footer />
        </View>
    )
}

export default MoviesScreen;