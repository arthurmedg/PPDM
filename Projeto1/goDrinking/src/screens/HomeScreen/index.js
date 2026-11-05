import { Image, View, Text } from "react-native"
import  logo  from "../../assets/images/logo.png"
import { styles } from "./style"
import {useFonts} from "expo-font"
import { OurOffers } from "../../components/OurOffers"
import { AvailableSizes } from "../../components/AvailableSizes"
import { OurHighlights } from "../../components/OurHighlights"

export const HomeScreen = () => {
    return(
        <View style={styles.containerHomeScreen}>

            <Image style={styles.logoHome} source={logo}/>

            <OurOffers/>
            
            <AvailableSizes/>

            <OurHighlights/>

        </View>

    )
}