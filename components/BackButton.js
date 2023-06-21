import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { colors } from '../constants/colors'

const BackButton = ({ style }) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.btn, { ...style }]}>
            <ChevronLeftIcon size="30" color={colors.primary} />
        </TouchableOpacity>
    )
}

export default BackButton

const styles = StyleSheet.create({
    btn: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})