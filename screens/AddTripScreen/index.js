import { Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import ScreenWrapper from '../../components/ScreenWrapper'
import BackButton from '../../components/BackButton'
import styles from './styles'
import { addTrip } from '../../helpers/assetImage'
import { useSelector } from 'react-redux'
import Loading from '../../components/Loading'
import { tripsRef } from '../../config/firebase'
import { addDoc } from 'firebase/firestore'

const AddTripScreen = () => {
    const [place, setPlace] = useState('')
    const [country, setCountry] = useState('')
    const [loading, setLoading] = useState(false)
    const { user } = useSelector(state => state.user)

    const navigation = useNavigation()

    const handleAddTrip = async () => {
        if (place && country) {
            try {
                setLoading(true)
                let doc = await addDoc(tripsRef, {
                    place,
                    country,
                    userId: user.uid
                })
                setLoading(false)
                if (doc && doc.id) {
                    navigation.goBack()
                }
            } catch (error) {
                setLoading(false)
                console.log(error);
            }
        } else {
            console.log('Empty inputs');
        }
    }

    return (
        <ScreenWrapper style={styles.container}>
            <ScrollView style={styles.content}>
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
            </ScrollView>
            {loading ?
                <Loading /> :
                <TouchableOpacity onPress={handleAddTrip} style={styles.btn}>
                    <Text style={styles.btnText}>Add Trip</Text>
                </TouchableOpacity>
            }
        </ScreenWrapper>
    )
}

export default AddTripScreen
