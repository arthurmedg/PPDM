import { View, Image, Text } from "react-native"
import { styles } from "./style"

export const CardSize = ({imagem, amount, measure}) => {
    return(
        <View style={styles.cardSize}>
            <Image source={imagem} style={styles.productImage}/>
            
            <Text style={styles.textAmout}>{amount}<Text style={styles.textMeasure}>{measure}</Text></Text>

        </View>
    )
}