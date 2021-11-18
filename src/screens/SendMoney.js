import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import SwipeButtons from '../components/SwipeButton'
import BackButton from '../components/BackButton'
const SendMoney = () => {
    const [amount, setAmount] = useState('')
    const clicked = (l) => {
        setAmount(amount+l)
    }
    return (
        <View style={style.container}>
            <BackButton label={'Send Money'} />
            <View style={style.benef}>
                <View>
                    <Image style={style.userimg} source={require('../assets/user.png')} />
                </View>
                <View>
                <Text style={style.uname}>Samantha</Text>
                <Text style={style.accnum}>Bank - 0987 3422 8756</Text>
                </View>
            </View>
            <View style={style.amount}>
                <Text style={style.amounttext}>{amount ? "Rs." : ''}{amount}</Text>
            </View>
            <View>
                <View style={style.keyrow}>
                    <View style={style.keybutton}>
                       <TouchableOpacity onPress={()=>clicked(1)}>
                       <Text style={style.keytext}>1</Text>
                       </TouchableOpacity>
                    </View>
                    <View style={style.keybutton}>
                       <TouchableOpacity onPress={()=>clicked(2)}>
                       <Text style={style.keytext}>2</Text>
                       </TouchableOpacity>
                    </View>
                    <View style={style.keybutton}>
                       <TouchableOpacity onPress={()=>clicked(3)}>
                       <Text style={style.keytext}>3</Text>
                       </TouchableOpacity>
                    </View>
                </View>
                <View style={style.keyrow}>
                <View style={style.keybutton}>
                       <TouchableOpacity onPress={()=>clicked(4)}>
                       <Text style={style.keytext}>4</Text>
                       </TouchableOpacity>
                    </View>
                    <View style={style.keybutton}>
                       <TouchableOpacity onPress={()=>clicked(5)}>
                       <Text style={style.keytext}>5</Text>
                       </TouchableOpacity>
                    </View>
                    <View style={style.keybutton}>
                       <TouchableOpacity onPress={()=>clicked(6)}>
                       <Text style={style.keytext}>6</Text>
                       </TouchableOpacity>
                    </View>
                </View>
                <View style={style.keyrow}>
                <View style={style.keybutton}>
                       <TouchableOpacity onPress={()=>clicked(7)}>
                       <Text style={style.keytext}>7</Text>
                       </TouchableOpacity>
                    </View>
                    <View style={style.keybutton}>
                       <TouchableOpacity onPress={()=>clicked(8)}>
                       <Text style={style.keytext}>8</Text>
                       </TouchableOpacity>
                    </View>
                    <View style={style.keybutton}>
                       <TouchableOpacity onPress={()=>clicked(9)}>
                       <Text style={style.keytext}>9</Text>
                       </TouchableOpacity>
                    </View>
                </View>
                <View style={style.keyrow}>
                <View style={style.keybutton}>
                       <TouchableOpacity onPress={()=>clicked('.')}>
                       <Text style={style.keytext}>.</Text>
                       </TouchableOpacity>
                    </View>
                    <View style={style.keybutton}>
                       <TouchableOpacity onPress={()=>clicked(0)}>
                       <Text style={style.keytext}>0</Text>
                       </TouchableOpacity>
                    </View>
                    <View style={style.keybutton}>
                       <TouchableOpacity onPress={()=>clicked('+')}>
                       <Text style={style.keytext}>+</Text>
                       </TouchableOpacity>
                    </View>
                </View>
            </View>
            <SwipeButtons label={'Swipe to send'} disabled={amount ? false:true} />
        </View>
    )
}

export default SendMoney
const style = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%'
    },
    keyrow:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    keybutton:{
        width:'33%',
        height:80,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    keytext:{
        color:'#9494AD',
        fontSize:25
    },
    amount:{
        marginVertical:30,
    },
    amounttext:{
        textAlign:'center',
        color:'#525298',
        fontSize:50,
        fontWeight:'600'
    },
    benef:{
        alignSelf:'center',
        marginTop:20,
        backgroundColor:'#F1F1F9',
        width:315,
        height:80,
        borderRadius:20,
        padding:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    userimg:{
        marginRight:10
    },
    uname:{
        color:'#273240',
        fontSize:13,
        fontWeight:'600'
    },
    accnum:{
        fontSize:12,
        opacity:0.5,
        color:'#2C3A4B'
    }
})