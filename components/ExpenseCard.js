import { StyleSheet, View, Text } from 'react-native'
import { categoryBG } from '../constants/colors'
import React from 'react'

const ExpenseCard = ({ item }) => {
    return (
        <View style={[styles.container, { backgroundColor: categoryBG[item.category] }]}>
            <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.category}</Text>
            </View>
            <View>
                <Text>${item.amount}</Text>
            </View>
        </View>
    )
}

export default ExpenseCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    title: {
        fontWeight: 700,
    }
})