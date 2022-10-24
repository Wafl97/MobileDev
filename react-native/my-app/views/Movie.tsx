import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { RootStackParamList } from "../services/types";
import Style from '../styles/default';
import { api_url, api_key, img_path } from "../services/env";
import Footer from "../components/Footer";
import { fetchFromAPI } from "../services/fetchFromAPI";

type ScreenProps = NativeStackScreenProps<RootStackParamList, "Movie">;

interface Movie {
    title: string,
    backdrop_path: string,
    poster_path: string,
    overview: string,
    runtime: number
}

const MovieScreen: React.FC<ScreenProps> = (props) => {

    const [movie, setMovie] = useState<Movie>({ title: "", backdrop_path: "", poster_path: "", overview: "", runtime: 0 });

    useEffect(() => {
        console.log("Getting movie...");
        props.navigation.setOptions({ title: props.route.params.title });
        fetchMovie();
        
        return function() {
            console.log("...Done");
        }
    },[]);

    async function fetchMovie() {
        const movie = await fetchFromAPI(`${api_url}/movie/${props.route.params.id}${api_key}`)        
        setMovie(movie)
    }
  
    return (
        <View style={ Style.container }>
            <View style={ Style.movie }>
                {
                    movie.poster_path == "" 
                    ?
                    <ActivityIndicator />
                    :
                    <Image style={ Style.image_large } source={{ uri: img_path + movie.poster_path }} />
                }
                <Text style={ Style.stat }>Runtime: { movie.runtime }</Text>
            </View>
            <Text style={ Style.title }>Summary</Text>
            <Text style={ Style.details }>{ movie.overview }</Text>
            <Footer navigationCallBack={ () => props.navigation.navigate("About") } />
        </View>
    )
}

export default MovieScreen;