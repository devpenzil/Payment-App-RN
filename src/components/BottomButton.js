import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const BottomButton = (props) => {
  return (
    <View style={style.container}>
      <TouchableOpacity >
        <View style={style.button}>
        <Text style={style.text}>{props.label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BottomButton;
const style = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%'
  },
  button:{
      backgroundColor:'#525298',
      width:315,
      height:64,
      borderRadius:34,
      marginBottom:10,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
  },
  text:{
      color:'#fff',
      fontSize:15,
      fontWeight:'600',
      letterSpacing:2
  }
});
