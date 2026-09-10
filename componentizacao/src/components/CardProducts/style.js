// -------------
// Estilização usando styleSheet
// -------------

// import { StyleSheet } from "react-native";


// export const styles = StyleSheet.create({

//     containerCard: {
//         backgroundColor: "#000",
//         padding: 20,
//         width: 200
//     },

//     textTitle: {
//         color: "#fff"
//     },

//     btnCard: {
//         backgroundColor: "purple",
//         paddingVertical: 10,
//         paddingHorizontal: 25
//     }

// })


// |    |
// |    |
// v    v


// -------------
// Estilização usando styled components
// -------------

import styled from "styled-components/native"

export const ContainerCard = styled.View`
    background-color: #000;
`

export const Texto = styled.Text`
    font: normal 18px
`