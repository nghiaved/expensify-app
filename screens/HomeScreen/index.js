import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import ScreenWrapper from '../../components/ScreenWrapper'
import styles from './styles'
import randomImage from '../../helpers/randomImage'
import { banner } from '../../helpers/assetImage'
import { homeData } from '../../data'
import EmptyList from '../../components/EmptyList'
import { signOut } from 'firebase/auth'
import { auth, tripsRef } from '../../config/firebase'
import { useSelector } from 'react-redux'
import { getDocs, query, where } from 'firebase/firestore'

const HomeScreen = () => {
    const navigation = useNavigation()

    const { user } = useSelector(state => state.user)
    const [trips, setTrips] = useState([])

    const isFocused = useIsFocused()

    const fetchTrips = async () => {
        const q = query(tripsRef, where('userId', '==', user.uid))
        const querySnapshot = await getDocs(q)
        let data = []
        querySnapshot.forEach(doc => {
            data.push({ ...doc.data(), id: doc.id })
        })
        setTrips(data);
    }

    useEffect(() => {
        if (isFocused)
            fetchTrips()
    }, [isFocused])

    const handleLogOut = async () => {
        await signOut(auth)
    }

    return (
        <ScreenWrapper style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.name}>Expensify</Text>
                <TouchableOpacity onPress={handleLogOut} style={styles.btn}>
                    <Text style={styles.text}>Logout</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.imgWrapper}>
                <Image source={banner} style={styles.img} />
            </View>
            <View style={styles.row}>
                <Text style={styles.title}>Recent Trips</Text>
                <TouchableOpacity onPress={() => navigation.navigate('AddTrip')} style={styles.btn}>
                    <Text style={styles.text}>Add Trip</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.list}>
                <FlatList
                    data={trips}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={<EmptyList message="You haven't recorded any trips yet" />}
                    columnWrapperStyle={{
                        justifyContent: 'space-between'
                    }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('TripExpenses', { ...item })} style={styles.itemWrapper}>
                                <View>
                                    <Image style={styles.itemImg} source={randomImage()} />
                                    <Text style={styles.itemTitle}>{item.place}</Text>
                                    <Text style={styles.itemDesc}>{item.country}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </ScreenWrapper>
    )
}

export default HomeScreen
