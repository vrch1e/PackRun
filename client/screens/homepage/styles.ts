import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mapview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    topdash: {
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        paddingBottom: 10,
    },
    dashtext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        fontFamily: 'Roboto',
    },
    startbtn: {
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ rotate: '45deg' }],
        backgroundColor: 'rgba(236, 97, 35, 0.88)',
        borderRadius: 16,
        marginBottom: 44,
    },
    startbtntext: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 'bold',
    },
    bottomdash: {
        width: '100%',
        height: 180,
        backgroundColor: '#f8f8f8',
    }
});

export default styles;