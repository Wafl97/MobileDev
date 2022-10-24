import { NativeStackScreenProps } from "@react-navigation/native-stack";
import MovieList from "../components/MovieList";
import React, { useEffect, useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { RootStackParamList } from "../services/types";
import Style from '../styles/default';
import Footer from "../components/Footer";
<<<<<<< HEAD
import { api_key, api_url, img_path } from "../misc/misc";
import { Swiper, SwiperSlide } from "swiper/react";
=======
import { api_key, api_url } from "../services/env";
import { fetchFromAPI } from "../services/fetchFromAPI";
>>>>>>> 6672a36b783e1edf341ed72a6c2a8a4c08f1b4fa

type ScreenProps = NativeStackScreenProps<RootStackParamList, "Movies">;

const MoviesScreen: React.FC<ScreenProps> = (props) => {

    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState();

    useEffect(() => {
        console.log("Seaching...");
        search == "" ? fetchTrending() : fetchSearch();
        
        return function() {
            console.log("...Done");
        }
    }, [search])

    async function fetchTrending() {       
        const movies = await fetchFromAPI(`${api_url}/trending/movie/week${api_key}`)
        setMovies(movies.results)
    }

    async function fetchSearch() {
        const movies = await fetchFromAPI(`${api_url}/search/movie${api_key}&query=${search}`)
        setMovies(movies.results)
    }
  
    return (
<<<<<<< HEAD
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
=======
        <View style={ Style.container }>
            <Text style={ Style.title }>Movies</Text>
            <TextInput 
                style={ Style.search_field }
                placeholder="Seach for a movie" 
                onChangeText={ (text) => setSearch(text) }
            />
            <MovieList DATA={ movies } navigation={ props.navigation } />
            <Footer navigationCallBack={ () => props.navigation.navigate("About") } />
        </View>
>>>>>>> 6672a36b783e1edf341ed72a6c2a8a4c08f1b4fa
    )
}

export default MoviesScreen;