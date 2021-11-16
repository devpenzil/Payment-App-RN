import React from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import Bottombar from '../components/Bottombar'
import ItemIcon from '../components/ItemIcon'
import TransactionItem from '../components/TransactionItem'

const Home = () => {
    const trrender = ({item}) => {
        return(
            <TransactionItem label={item.label} 
            amount = {item.amount}
            date = {item.date}
            location = {item.location}
            color = {item.color} />
        )
    }
    const transaction = [
        {
            label:'Grocery',
            amount:'326.800',
            date:'Nov 17',
            location:'Mini market Anurag',
            color:'#32A7E2'
        },
        {
            label:'Entertainment',
            amount:'326.800',
            date:'Nov 17',
            location:'Football game',
            color:'#B548C6'
        },
        {
            label:'Equipments',
            amount:'326.800',
            date:'Nov 17',
            location:'DSLR camera',
            color:'#FF8700'
        },
        {
            label:'Office Items',
            amount:'326.800',
            date:'Nov 17',
            location:'Stationary',
            color:'#22B07D'
        },
        {
            label:'Entertainment',
            amount:'326.800',
            date:'Nov 17',
            location:'Football game',
            color:'#B548C6'
        },
        {
            label:'Equipments',
            amount:'326.800',
            date:'Nov 17',
            location:'DSLR camera',
            color:'#FF8700'
        },
        {
            label:'Grocery',
            amount:'326.800',
            date:'Nov 17',
            location:'Mini market Anurag',
            color:'#32A7E2'
        },
    ]
    return (
        <View style={style.container}>
            <View style={style.top}>
                <Text style={style.balance}>Your Balance</Text>
                <Text style={style.amount}>Rs. 8,25,000</Text>
                <View style={style.iconset}>
                    <ItemIcon label={'Transfer'} color={'#32A7E2'} />
                    <ItemIcon label={'Top-up'} color={'#B548C6'} />
                    <ItemIcon label={'Bill'} color={'#FF8700'} />
                    <ItemIcon label={'More'} color={'#22B07D'} />
                </View>
            </View>
            <ScrollView style={style.bottom}>
                <FlatList data={transaction}  renderItem={trrender} />
            </ScrollView>
            <Bottombar />
        </View>
    )
}

export default Home

const style = StyleSheet.create({
    container:{
        backgroundColor: '#F3F3F8',
        width:'100%',
        height:'100%'
    },
    top:{
        height:'40%',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    bottom:{
        height:'60%',
        width:'100%',
        backgroundColor:'#ffffff',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        paddingHorizontal:30,
        paddingVertical:20
    },
    balance:{
        color:'#082431',
        fontSize:14,
        fontWeight:'400',
        lineHeight:14
    },
    amount:{
        color:'#2C2C63',
        fontSize:36,
        fontWeight:'400',
        lineHeight:40,
        marginTop:10
    },
    iconset:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        width:'100%',
        marginTop:30
    },
})