import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import ScreenWrapper from '../../components/ScreenWrapper'
import BackButton from '../../components/BackButton'
import styles from './styles'
import { signUp } from '../../helpers/assetImage'

const SignUpScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    const handleSubmit = () => {
        if (email && password) {
            navigation.goBack()
            navigation.navigate('Home')
        } else {

        }
    }

    return (
        <ScreenWrapper style={styles.container}>
            <View style={styles.content}>
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
            </View>
            <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
                <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
        </ScreenWrapper>
    )
}

export default SignUpScreen