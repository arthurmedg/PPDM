import { View, Image, Text } from "react-native"
import { styles } from "./style"
import imageProduct from "../../assets/images/product1.png"
import OptionImage from "../../assets/images/OptionImage.png"
import { ButtonPrimary } from "../../components/ButtonPrimary"


export const DetailsProduct = () => {
    return(
        <View style={styles.containerDetailsProduct}>
            <View style={styles.featuredProducts}>
                <Image source={imageProduct}/>

                <View style={styles.imagesProduct}>
                    <Image source={OptionImage}/>
                    <Image source={OptionImage}/>
                    <Image source={OptionImage}/>
                    <Image source={OptionImage}/>
                    <Image source={OptionImage}/>
                </View>
            </View>


            <View style={styles.DetailsProduct}>
                <Text style={styles.volumeProduct}>269ml</Text>

                <View>
                    <View>
                        <Text style={styles.textTitle}>TNT Energy</Text>
                        <Text style={styles.textHighlight}>Açaí com Guaraná</Text>
                    </View>

                    <Text style={styles.textDescription}>Combina o sabor marcante do açaí com o toque do guaraná em uma bebida energética refrescante. Ideal para quem bus...</Text>
                </View>

                <ButtonPrimary title={"Comprar"}/>
            </View>

        </View>     
    )
}