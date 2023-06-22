import { Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import styles from './styles'
import { welcome } from '../../helpers/assetImage'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
    const navigation = useNavigation()

    return (
        <ScreenWrapper style={styles.container}>
            <Image style={styles.img} source={welcome} />
            <Text style={styles.title}>Expensify</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.btn}>
                <Text style={styles.text}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.btn}>
                <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>
        </ScreenWrapper>
    )
}

export default WelcomeScreen