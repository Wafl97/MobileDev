import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import NavButton from "../components/NavButton";
import { RootStackParamList } from "../misc/types";
import Style from '../styles/default';

type ScreenProps = NativeStackScreenProps<RootStackParamList, "Movie">;

const MovieScreen: React.FC<ScreenProps> = (props) => {
  
    return (
        <View style={ Style.container }>
            <Text style={ Style.title }>{ props.route.params.title }</Text>
            <NavButton 
                title="Back to Home" 
                navTo={ () => props.navigation.navigate("Home") } 
            />
            <NavButton 
                title="Back to Movies" 
                navTo={ () => props.navigation.navigate("Movies", { query: props.route.params.title, rtn: true }) } 
            />
            <Text style={ Style.title }>Summary</Text>
            <Text style={ Style.details }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis molestiae soluta reiciendis. Quod quae repellat doloribus quas sit molestiae aspernatur fugit exercitationem mollitia explicabo pariatur impedit, tenetur suscipit placeat temporibus.</Text>
        </View>
    )
}

export default MovieScreen;