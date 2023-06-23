import { Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import ScreenWrapper from '../../components/ScreenWrapper'
import BackButton from '../../components/BackButton'
import styles from './styles'
import { signUp } from '../../helpers/assetImage'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../components/Loading'
import { setUserLoading } from '../../redux/slices/user'

const SignUpScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { userLoading } = useSelector(state => state.user)

    const navigation = useNavigation()

    const dispatch = useDispatch()

    const handleSubmit = async () => {
        if (email && password) {
            // navigation.goBack()
            // navigation.navigate('Home')
            try {
                dispatch(setUserLoading(true))
                await createUserWithEmailAndPassword(auth, email, password)
                dispatch(setUserLoading(false))
            } catch (error) {
                dispatch(setUserLoading(false))
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
                    <Text style={styles.headerTitle}>Sign Up</Text>
                </View>
                <View style={styles.imgWrapper}>
                    <Image style={styles.img} source={signUp} />
                </View>
                <Text style={styles.name}>Email</Text>
                <TextInput value={email} onChangeText={text => setEmail(text)} style={styles.input} />
                <Text style={styles.name}>Password</Text>
                <TextInput value={password} secureTextEntry onChangeText={text => setPassword(text)} style={styles.input} />
            </ScrollView>
            {userLoading ?
                <Loading /> :
                <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
                    <Text style={styles.btnText}>Sign Up</Text>
                </TouchableOpacity>
            }
        </ScreenWrapper>
    )
}

export default SignUpScreen