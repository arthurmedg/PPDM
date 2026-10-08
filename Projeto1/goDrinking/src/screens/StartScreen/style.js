import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const styles = StyleSheet.create({
    containerStartScreen:{
        backgroundColor: colors.colorDarkPurple
    },

    textWelcome:{
        fontFamily: fonts.fontBody,
        fontSize: 20,
        color: colors.colorGray
    }
})