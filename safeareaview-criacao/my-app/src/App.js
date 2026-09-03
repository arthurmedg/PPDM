import { Text, View, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import illustration from "./assets/AnakinSkywalker.webp"

export default function App() {
  return (
    <SafeAreaView>

      <View>
        <Text>Anakin Skywalker</Text>
        <Image source={illustration}/>
        <Text>Anakin Skywalker foi um dos Jedi e Sith mais poderosos da história galáctica</Text>
      </View>


    </SafeAreaView>

  );
}