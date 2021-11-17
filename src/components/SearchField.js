import React from 'react'
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'

const SearchField = () => {
    return (
        <View style={style.container}>
            <View style={style.searchbox}>
                <TextInput style={style.textbox} placeholder={'Search'} />
               <TouchableOpacity>
               <Image style={style.icon} source={require('../assets/back.png')} />
               </TouchableOpacity>
            </View>
        </View>
    )
}

export default SearchField

const style = StyleSheet.create({
    container:{
        width:'100%',
        marginTop:20,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20
    },
    searchbox:{
        borderWidth:1,
        width:'100%',
        borderRadius:10,
        borderColor:'#E7E7F6',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10
    },
    icon:{
        width:20,
        height:20,
        opacity:0.5
    },
    textbox:{
        width:280
    }
})
