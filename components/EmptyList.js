import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { empty } from '../helpers/assetImage'

const EmptyList = ({ message }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={empty} />
            <Text style={styles.text}>{message || 'Data not found'}</Text>
        </View>
    )
}

export default EmptyList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 40,
    },
    img: {
        width: 160,
        height: 160,
        marginBottom: 20,
    },
    text: {
        fontWeight: 700
    }
})