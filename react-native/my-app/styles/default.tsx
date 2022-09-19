import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        color: "#0a0a32",
    },
    button: {
        backgroundColor: 'dodgerblue',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1em',
        margin: '0.25em'
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
        borderTopColor: "#0a0a32",
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
        height: 150,
        width: 150,
        margin: 5
    },
    list_title: {
        color: "white",
        fontSize: 16,
        lineHeight: 20,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    },
    movie: {
        flexDirection: "row",
        backgroundColor: "#000000c0",
        width: "100%",
        justifyContent: "center",
        padding: 5
    }
});

export default styles;