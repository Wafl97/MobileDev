import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import NavButton from "../components/NavButton";
import { RootStackParamList } from "../misc/types";
import Style from '../styles/default';
import { api_key, api_url, img_path } from "../misc/misc";

interface MovieType {
    title: string,
    overview: string,
    img_path: string
}

type ScreenProps = NativeStackScreenProps<RootStackParamList, "Movie">;

const MovieScreen: React.FC<ScreenProps> = (props) => {

    const [movie, setMovie] = useState<MovieType>({title: "", overview: "", img_path: ""});

    useEffect(() => {
        console.log("Getting movie...");
        fetch(api_url + "/movie/" + props.route.params.id + api_key)
        .then((res) => (res.json()))
        .then((json) => (setMovie(json)));


        return function() {
            console.log("...Done")
        }
    },[])
  
    return (
        <View style={ Style.container }>
            <Text style={ Style.title }>{ movie.title }</Text>
            <NavButton 
                title="Back to Home" 
                navTo={ () => props.navigation.navigate("Home") } 
            />
            <NavButton 
                title="Back to Movies" 
                navTo={ () => props.navigation.navigate("Movies", { query: props.route.params.title, rtn: true }) } 
            />
            <Text style={ Style.title }>Summary</Text>
            <Text style={ Style.details }>{ movie.overview }</Text>
        </View>
    )
}

export default MovieScreen;