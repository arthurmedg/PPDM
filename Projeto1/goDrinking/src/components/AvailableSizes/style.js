import { ScrollView, StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const styles = StyleSheet.create({
    containerAvailableSizes:{
        gap: 10
    },

    textTitle:{
        fontSize: 25,
        fontWeight: "700",
        fontFamily: fonts.fontTitle,
        color: colors.colorWhite
    },

    textHighlight:{
        color:colors.colorHotDrink
    },

    scrollView:{
        gap: 10
    }
})