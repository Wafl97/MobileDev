import { StyleSheet } from "react-native";

const main_color = "#0f0fff";
const dark_grey_alfa = "#000000c0";
const secondary_color = "#f0f0ff";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: secondary_color,
        alignItems: 'center',
        justifyContent: 'center',
        color: "#0a0a32",
    },
    button: {
        backgroundColor: main_color,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        margin: '0.25em',
        color: secondary_color
    },
    title: {
        fontSize: 32,
    },
    stat: {
        fontSize: 20,
        color: secondary_color
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
        height: 400,
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
        color: secondary_color,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: dark_grey_alfa
    },
    movie: {
        flexDirection: "row",
        backgroundColor: "#0000ff80",
        width: "100%",
        justifyContent: "center",
        padding: 5
    },
    footer: {
        backgroundColor: main_color,
        width: "100%",
        height: "2.5em",
        justifyContent: "center",
        alignItems: "center",
    },
    footer_text: {
        fontSize: 16,
        color: secondary_color
    },
    header: {
        alignItems: "center",
        backgroundColor: main_color
    },
    search_field: {
        borderColor: main_color,
        borderWidth: 2,
        width: 380,
        height: 50,
        borderRadius: 5
    },
    missing_img: {
        backgroundColor: main_color,
        width: 120,
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        margin: 5
    }
});

export default styles;
export { main_color, dark_grey_alfa, secondary_color };