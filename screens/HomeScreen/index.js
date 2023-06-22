import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ScreenWrapper from '../../components/ScreenWrapper'
import styles from './styles'
import randomImage from '../../helpers/randomImage'
import { banner } from '../../helpers/assetImage'
import { homeData } from '../../data'
import EmptyList from '../../components/EmptyList'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase'

const HomeScreen = () => {
    const navigation = useNavigation()

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
                    data={homeData}
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
