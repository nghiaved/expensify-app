import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    content: {
        flex: 1,
    },
    header: {
        flexDirection: 'row'
    },
    headerTitle: {
        fontWeight: 700,
        fontSize: 30,
        flex: 1,
        textAlign: 'center'
    },
    imgWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 40,
    },
    img: {
        width: 260,
        height: 260,
    },
    name: {
        fontWeight: 700,
        fontSize: 20,
        marginBottom: 10,
    },
    input: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    btn: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 10,
    },
    btnText: {
        fontWeight: 700,
        color: '#fff',
        fontSize: 16,
    }
})

export default styles