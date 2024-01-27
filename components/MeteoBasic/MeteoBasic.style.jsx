import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    clock:{
        alignItems:"flex-end",
    },
    weather_label:{
        alignSelf: "flex-end",
        transform: [{rotate: "-90deg"}],
        fontSize: 20,
    },
    city: {
        fontSize: 24,

    },
    image:{
        height: 90,
        width: 90,
    },
    temp_box:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"baseline",
    },
    temp:{
        fontSize: 150,
    }
})