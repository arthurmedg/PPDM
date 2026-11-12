import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StartScreen } from "../screens/StartScreen"
import { HomeScreen } from "../screens/HomeScreen"
import { ProductsScreen } from "../screens/ProductsScreen"
import { DetailsProduct } from "../screens/DetailsProduct"

export const AppRoutes = () => {
    
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="start" component={StartScreen}/>
                <Stack.Screen name="home" component={HomeScreen}/>
                <Stack.Screen name="products" component={ProductsScreen}/>
                <Stack.Screen name="details" component={DetailsProduct}/>
                
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}