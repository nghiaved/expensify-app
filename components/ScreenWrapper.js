import { Platform, StatusBar, View } from 'react-native'
import React from 'react'

const ScreenWrapper = ({ children, style }) => {
    let statusBarHeight = StatusBar.currentHeight
        ? StatusBar.currentHeight
        : Platform.OS == 'ios' ? 30 : 0

    return (
        <View style={{ paddingTop: statusBarHeight, ...style }}>
            {children}
        </View>
    )
}

export default ScreenWrapper
