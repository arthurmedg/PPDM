import { Image, View, Text } from "react-native"
import  logo  from "../../assets/images/logo.png"
import { styles } from "./style"
import {useFonts} from "expo-font"
import { OurOffers } from "../../components/OurOffers"

export const HomeScreen = () => {
    return(
        <View style={styles.containerHomeScreen}>

            <Image style={styles.logoHome} source={logo}/>

            <OurOffers/>
            
        </View>

    )
}