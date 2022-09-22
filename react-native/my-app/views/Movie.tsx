import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { RootStackParamList } from "../services/types";
import Style from '../styles/default';
import { api_url, api_key, img_path } from "../services/env";
import Footer from "../components/Footer";

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
        fetch(api_url + "/movie/" + props.route.params.id + api_key)
        .then((res) => res.json())
        .then((json) => setMovie(json));
        return function() {
            console.log("...Done");
        }
    },[]);
  
    return (
        <View style={ Style.container }>
            <View style={ Style.movie }>
                {
                    movie.poster_path == "" 
                    ?
                    <Text>LOADING...</Text>
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