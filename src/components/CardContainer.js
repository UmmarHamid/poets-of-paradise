import React from 'react'
import { StyleSheet, View } from 'react-native'

const CardContainer = ({ children, props, style }) => {
    return (
        <View style={{ ...styles.card, ...style }} >
            {children}
        </View >
    )
}

export default CardContainer

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 16

    }
})
