import { ScrollView, View, Text } from "react-native"
import { CardSize } from "../CardSize"
import { styles } from "./style"
import canImage from "../../assets/images/can-image-269.png"
import bottleImage from "../../assets/images/bottle-image-500.png"

export const AvailableSizes = () => {
    return(
        <View style={styles.containerAvailableSizes}>
            <Text style={styles.textTitle}>Tamanhos <Text style={styles.textHighlight}>Disponíveis</Text></Text>
            <ScrollView horizontal contentContainerStyle={styles.scrollView}>
                <CardSize imagem={canImage} amount="269" measure="ml"/>
                <CardSize imagem={canImage} amount="350" measure="ml"/>
                <CardSize imagem={canImage} amount="429" measure="ml"/>
                <CardSize imagem={canImage} amount="609" measure="ml"/>
                <CardSize imagem={bottleImage} amount="1,5" measure="L"/>
                <CardSize imagem={bottleImage} amount="2,5" measure="L"/>
            </ScrollView>
        </View>
    )
}
