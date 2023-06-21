import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import ScreenWrapper from '../../components/ScreenWrapper'
import BackButton from '../../components/BackButton'
import styles from './styles'
import { addExpense } from '../../helpers/assetImage'
import { categoriesData } from '../../data'

const AddExpenseScreen = () => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')

    const navigation = useNavigation()

    const handleAddExpense = () => {
        if (title && amount && category) {
            navigation.goBack()
        } else {

        }
    }

    return (
        <ScreenWrapper style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <BackButton />
                    <Text style={styles.headerTitle}>Add Expense</Text>
                </View>
                <View style={styles.imgWrapper}>
                    <Image style={styles.img} source={addExpense} />
                </View>
                <Text style={styles.name}>For What?</Text>
                <TextInput value={title} onChangeText={text => setTitle(text)} style={styles.input} />
                <Text style={styles.name}>How Much?</Text>
                <TextInput value={amount} onChangeText={text => setAmount(text)} style={styles.input} />
                <Text style={styles.name}>Category</Text>
                <View style={styles.category}>
                    {categoriesData.map((cat, index) => {
                        let bgColor = '#fff'
                        if (cat.value == category) {
                            bgColor = '#d5d5d5'
                        }

                        return (
                            <TouchableOpacity style={[styles.categoryItem, { backgroundColor: bgColor }]} key={index} onPress={() => setCategory(cat.value)}>
                                <Text>{cat.title}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
            <TouchableOpacity onPress={handleAddExpense} style={styles.btn}>
                <Text style={styles.btnText}>Add Expense</Text>
            </TouchableOpacity>
        </ScreenWrapper>
    )
}

export default AddExpenseScreen
