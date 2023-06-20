import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import styles from './styles'
import randomImage from '../../helpers/randomImage'
import { banner } from '../../helpers/assetImage'
import { homeData } from '../../data/homeData'

const HomeScreen = () => {
    return (
        <ScreenWrapper style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.name}>Expensify</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.text}>Logout</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.imgWrapper}>
                <Image source={banner} style={styles.img} />
            </View>
            <View style={styles.row}>
                <Text style={styles.title}>Recent Trips</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.text}>Add Trip</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.list}>
                <FlatList
                    data={homeData}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{
                        justifyContent: 'space-between'
                    }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.itemWrapper}>
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
