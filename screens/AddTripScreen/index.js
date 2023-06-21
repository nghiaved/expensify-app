import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import ScreenWrapper from '../../components/ScreenWrapper'
import BackButton from '../../components/BackButton'
import styles from './styles'
import { addTrip } from '../../helpers/assetImage'

const AddTripScreen = () => {
    const [place, setPlace] = useState('')
    const [country, setCountry] = useState('')

    const navigation = useNavigation()

    const handleAddTrip = () => {
        if (place && country) {
            navigation.navigate('Home')
        } else {

        }
    }

    return (
        <ScreenWrapper style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <BackButton />
                    <Text style={styles.headerTitle}>Add Trip</Text>
                </View>
                <View style={styles.imgWrapper}>
                    <Image style={styles.img} source={addTrip} />
                </View>
                <Text style={styles.name}>Where On Earth?</Text>
                <TextInput value={place} onChangeText={text => setPlace(text)} style={styles.input} />
                <Text style={styles.name}>Which Country?</Text>
                <TextInput value={country} onChangeText={text => setCountry(text)} style={styles.input} />
            </View>
            <TouchableOpacity onPress={handleAddTrip} style={styles.btn}>
                <Text style={styles.btnText}>Add Trip</Text>
            </TouchableOpacity>
        </ScreenWrapper>
    )
}

export default AddTripScreen
