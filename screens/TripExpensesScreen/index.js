import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ScreenWrapper from '../../components/ScreenWrapper'
import BackButton from '../../components/BackButton'
import styles from './styles'
import { banner } from '../../helpers/assetImage'
import { expenseData } from '../../data'
import EmptyList from '../../components/EmptyList'
import ExpenseCard from '../../components/ExpenseCard'

const TripExpensesScreen = (props) => {
    const { id, place, country } = props.route.params

    const navigation = useNavigation()

    return (
        <ScreenWrapper style={styles.container}>
            <View style={styles.header}>
                <BackButton />
                <View style={styles.titleWrapper}>
                    <Text style={styles.headerTitle}>{place}</Text>
                    <Text style={styles.headerSubTitle}>{country}</Text>
                </View>
            </View><View style={styles.imgWrapper}>
                <Image source={banner} style={styles.img} />
            </View>
            <View style={styles.row}>
                <Text style={styles.title}>Expenses</Text>
                <TouchableOpacity onPress={() => navigation.navigate('AddExpense')} style={styles.btn}>
                    <Text style={styles.text}>Add Expense</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.list}>
                <FlatList
                    data={expenseData}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={<EmptyList message="You haven't recorded any expense yet" />}
                    renderItem={({ item }) => {
                        return <ExpenseCard item={item} />
                    }}
                />
            </View>
        </ScreenWrapper>
    )
}

export default TripExpensesScreen