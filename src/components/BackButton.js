import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const BackButton = (props) => {
    return (
        <View>
            <Image style={style.icon} source={require('../assets/back.png')} />
            <Text style={style.text}>{props.label}</Text>
        </View>
    )
}

export default BackButton

const style = StyleSheet.create({
    text:{
        fontSize:18,
        fontWeight:'400',
        textAlign:'center',
        marginTop:15
    },
    icon:{
        width:27,
        height:27,
        position:'absolute',
        top:13,
        marginLeft:10
    }
})