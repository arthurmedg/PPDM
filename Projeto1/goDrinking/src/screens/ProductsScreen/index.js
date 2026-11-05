import { Image, ScrollView, TextInput, View } from "react-native"
import logo from '../../assets/images/logo.png'
import filterIcon from '../../assets/images/filterIcon.png'
import {styles } from "./style"

export const ProductsScreen = () =>{
    return(
        <ScrollView contentContainerStyle={styles.containerProductsScreen}>

            <Image source={logo}/>            

            <View>
                <TextInput style={styles.input}/>
                <Image source={filterIcon}/>
            </View>

        </ScrollView>
    )
}