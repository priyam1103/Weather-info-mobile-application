import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { colors } from "../utils/index"
import {FontAwesome5,MaterialCommunityIcons} from "@expo/vector-icons"
export default function WeatherDetails({ currentWeather }) {
    const {main:{feels_like,humidity,pressure},wind:{speed} } = currentWeather;
    return (
        <View style={styles.WeatherDetails}>
            <View style={styles.WeatherDetailsRow}> 
                <View style={{ ...styles.WeatherDetailsBox, borderRightWidth: 1, borderRightColor: colors.BORDER_COLOR }}>
                    <View style={styles.WeatherDetailsRow}>
                        <FontAwesome5 name="temperature-low" size={25} color={colors.PRIMARY_COLOR} />
                        <View style={styles.WeatherDetailsItem}>
                        <Text>Feels Like:</Text>
                            <Text style={styles.textSecondary}>{feels_like}°</Text>
                            </View>
                    </View>
                    </View>
                <View style={{ ...styles.WeatherDetailsBox, borderRightWidth: 1, borderRightColor: colors.BORDER_COLOR }}>
                <View style={styles.WeatherDetailsRow}>
                        <MaterialCommunityIcons name="water" size={30} color={colors.PRIMARY_COLOR} />
                        <View style={styles.WeatherDetailsItem}>
                        <Text>Humidty:</Text>
                            <Text style={styles.textSecondary}>{humidity}%</Text>
                            </View>
                </View>
            </View>
            </View>
            <View style={{...styles.WeatherDetailsRow,borderTopWidth:1,borderTopColor:colors.BORDER_COLOR}}> 
                <View style={{ ...styles.WeatherDetailsBox, borderRightWidth: 1, borderRightColor: colors.BORDER_COLOR }}>
                    <View style={styles.WeatherDetailsRow}>
                        <MaterialCommunityIcons name="weather-windy" size={30} color={colors.PRIMARY_COLOR} />
                        <View style={styles.WeatherDetailsItem}>
                        <Text>Wind Speed:</Text>
                            <Text style={styles.textSecondary}>{speed}</Text>
                            </View>
                    </View>
                    </View>
                <View style={{ ...styles.WeatherDetailsBox, borderRightWidth: 1, borderRightColor: colors.BORDER_COLOR }}>
                <View style={styles.WeatherDetailsRow}>
                        <MaterialCommunityIcons name="speedometer" size={30} color={colors.PRIMARY_COLOR} />
                        <View style={styles.WeatherDetailsItem}>
                        <Text>Pressure:</Text>
                            <Text style={styles.textSecondary}>{pressure}</Text>
                            </View>
                </View>
            </View>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    WeatherDetails: {
        marginTop: 'auto',
        margin:15,
        borderWidth: 1,
        borderColor: colors.BORDER_COLOR,
        borderRadius: 10
    },
    WeatherDetailsRow: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent:'space-between'
    },
    WeatherDetailsBox: {
        flex: 1,
        padding:20
    },
    WeatherDetailsItem: {
        alignItems: 'flex-end',
        justifyContent:'center'
    },
    textSecondary: {
        fontSize: 20,
        color: colors.SECONDARY_COLOR,
        fontWeight: '700',
        margin:7
    }
})