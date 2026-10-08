import { Pressable, Text } from "react-native"
import { styles } from "./style"

export const ButtonOutline = ({title}) => {
    return(
        <Pressable style={styles.btnOutline}>
            <Text style={styles.txtOutline}>{title}</Text>
        </Pressable>
    )
}