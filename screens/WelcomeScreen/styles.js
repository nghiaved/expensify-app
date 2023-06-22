import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 300,
        height: 300,
    },
    title: {
        fontSize: 30,
        fontWeight: 700,
        marginTop: 40,
        marginBottom: 20,
    },
    btn: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        alignSelf: 'stretch',
        paddingVertical: 10,
        marginTop: 20,
    },
    text: {
        textAlign: 'center',
        fontWeight: 700,
        color: '#fff',
        fontSize: 20,
    }
})

export default styles