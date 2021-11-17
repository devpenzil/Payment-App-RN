import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ContactBar = (props) => {
    return (
        <View style={style.container}>
            <View>
                <Image style={style.image} source={require('../assets/user.png')} />
            </View>
            <View>
                <Text style={style.name}>{props.cname}</Text>
                <Text style={style.num}>{props.num}</Text>
            </View>
        </View>
    )
}

export default ContactBar
const style = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        marginVertical:10
    },
    image:{
        marginRight:20
    },
    name:{
        fontSize:15,
        fontWeight:'600',
        color:'#273240'
    },
    num:{
        color:'#2C3A4B',
        fontSize:12,
        opacity:0.5
    }
})
