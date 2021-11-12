import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const ItemIcon = (props) => {
  const colorcode = props.color
  const style = StyleSheet.create({
    box: {
      width: 48,
      height: 48,
      borderRadius: 20,
      backgroundColor: colorcode,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    text: {
      marginTop: 5,
      color: '#818197',
      fontSize: 13,
      fontWeight: '500',
      textAlign:'center'
    },
  });
  return (
    <>
      <View>
        <TouchableOpacity>
          <View style={style.box}>
            <Image source={require(`../assets/transfer.png`)} />
          </View>
          <Text style={style.text}>{props.label}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ItemIcon;

