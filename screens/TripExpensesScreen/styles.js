import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    header: {
        flexDirection: 'row'
    },
    titleWrapper: {
        flex: 1,
        textAlign: 'center'
    },
    headerTitle: {
        fontWeight: 700,
        fontSize: 24,
    },
    headerSubTitle: {
        fontSize: 16,
    },
    imgWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 260,
        height: 260,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
    },
    title: {
        fontWeight: 700,
        fontSize: 24,
    },
    btn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    text: {
        fontWeight: 700,
    },
    list: {
        flex: 1,
    },
})

export default styles