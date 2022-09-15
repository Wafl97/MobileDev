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
        fontSize: 24,
    },
    details: {
        flex: 1,
        fontSize: 16,
        margin: "1em",
        borderTopColor: "#0a0a32",
        borderTopWidth: 2,
    }
});

export default styles;