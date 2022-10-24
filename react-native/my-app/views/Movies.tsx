import { NativeStackScreenProps } from "@react-navigation/native-stack";
import MovieList from "../components/MovieList";
import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import NavButton from "../components/NavButton";
import { RootStackParamList } from "../misc/types";
import Style from '../styles/default';
import Footer from "../components/Footer";
import { api_key, api_url, img_path } from "../misc/misc";
import { Swiper, SwiperSlide } from "swiper/react";

type ScreenProps = NativeStackScreenProps<RootStackParamList, "Movies">;

const MoviesScreen: React.FC<ScreenProps> = (props) => {

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
    }, []);
  
    return (
        <Swiper 
            spaceBetween={50}
            slidesPerView={1}>
            <SwiperSlide>
                <View style={ Style.container }>
                    <Text style={ Style.title }>Movies</Text>
                    <NavButton title="Back to Home" navTo={ () => props.navigation.navigate("Home") } />
                    <Text style={ Style.title }>Trending Movies</Text>
                    <MovieList DATA={ movies } navigation={ props.navigation } />
                    <Footer />
                </View>
            </SwiperSlide>
            <SwiperSlide>
                    <Text>SLIDE 2</Text>
            </SwiperSlide>
        </Swiper>
    )
}

export default MoviesScreen;