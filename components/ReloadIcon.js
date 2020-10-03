import React from 'react'
import { View, Text,Platform ,StyleSheet} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import {colors} from "../utils/index"

const ReloadIcon = ({load}) => {
    const reloadIcon = Platform.OS==="ios"?'ios-refresh':'md-refresh'
    return (
        <View style={style.reloadIcon}>
            <Ionicons onPress={load} name={reloadIcon} size={24} color={colors.PRIMARY_COLOR}/>
        </View>
    )
}
const style = StyleSheet.create({
    reloadIcon: {
        position: "absolute",
        top: 40,
        right:30
    }
})

export default ReloadIcon

