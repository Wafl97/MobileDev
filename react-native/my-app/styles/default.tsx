import { StyleSheet } from "react-native";

const main_color = "#0f0fff";
const dark_grey_alfa = "#000000c0";
const backgroundColor = "#f0f0ff";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        color: "#0a0a32",
    },
    button: {
        backgroundColor: main_color,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1em',
        margin: '0.25em',
        color: "#fff"
    },
    title: {
        fontSize: 32,
    },
    stat: {
        fontSize: 20,
        color: "#fff"
    },
    details: {
        flex: 1,
        fontSize: 16,
        margin: "1em",
        borderTopColor: main_color,
        borderTopWidth: 2,
    },
    image_large: {
        justifyContent: "center",
        height: 500,
        width: 300,
        margin: 5
    },
    image_small: {
        justifyContent: "center",
        height: 120,
        width: 120,
        margin: 5
    },
    list_title: {
        color: "white",
        fontSize: 16,
        lineHeight: 20,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: dark_grey_alfa
    },
    movie: {
        flexDirection: "row",
        backgroundColor: "#000000c0",
        width: "100%",
        justifyContent: "center",
        padding: 5
    },
    footer: {
        backgroundColor: main_color,
        width: "100%",
        height: "5em",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 16
    }
});

export default styles;