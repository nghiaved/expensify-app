import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d0d0d0',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    name: {
        fontWeight: 700,
        fontSize: 30,
        textShadowColor: '#999',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
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
    imgWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8abcf1',
        marginHorizontal: 20,
        borderRadius: 10,
    },
    img: {
        width: 200,
        height: 200,
    },
    list: {
        flex: 1,
        marginHorizontal: 10,
    },
    itemWrapper: {
        flex: 0.5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 20,
        marginHorizontal: 10,
        marginBottom: 20,
    },
    itemImg: {
        width: 120,
        height: 120,
        marginBottom: 20,
    },
    itemTitle: {
        fontWeight: 700,
        fontSize: 16,
    },
    itemDesc: {
        fontSize: 16,
    }
})

export default styles