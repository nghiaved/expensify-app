import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import ScreenWrapper from '../../components/ScreenWrapper'
import BackButton from '../../components/BackButton'
import styles from './styles'
import { banner } from '../../helpers/assetImage'
import { expenseData } from '../../data'
import EmptyList from '../../components/EmptyList'
import ExpenseCard from '../../components/ExpenseCard'
import { expensesRef } from '../../config/firebase'
import { getDocs, query, where } from 'firebase/firestore'

const TripExpensesScreen = (props) => {
    const { id, place, country } = props.route.params

    const navigation = useNavigation()
    const [expenses, setExpenses] = useState([])

    const isFocused = useIsFocused()

    const fetchExpenses = async () => {
        const q = query(expensesRef, where('tripId', '==', id))
        const querySnapshot = await getDocs(q)
        let data = []
        querySnapshot.forEach(doc => {
            data.push({ ...doc.data(), id: doc.id })
        })
        setExpenses(data);
    }

    useEffect(() => {
        if (isFocused)
            fetchExpenses()
    }, [isFocused])

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
                <TouchableOpacity onPress={() => navigation.navigate('AddExpense', { id, place, country })} style={styles.btn}>
                    <Text style={styles.text}>Add Expense</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.list}>
                <FlatList
                    data={expenses}
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