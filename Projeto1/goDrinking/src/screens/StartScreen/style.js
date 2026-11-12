import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const styles = StyleSheet.create({
    containerStartScreen:{
        flex: 1,
        backgroundColor: colors.colorDarkPurple,
        justifyContent: "center",
        alignItems: "center",
        gap: 40 
    },

    textWelcome:{
        fontFamily: fonts.fontBody,
        fontSize: 20,
        color: colors.colorGray,
        textAlign: "center"
    },

    teste:{
        color: "#fff"
    }
})
