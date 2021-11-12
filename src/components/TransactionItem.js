import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const TransactionItem = props => {
  const style = StyleSheet.create({
    container: {
      width: '100%',
      height: 45,
      marginVertical: 10,
      display: 'flex',
      flexDirection: 'row',
    },
    line: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 280,
    },
    icon: {
      width: 40,
      height: 40,
      backgroundColor: props.color,
      borderRadius: 12,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    head: {
      fontSize: 13,
      fontWeight: '800',
    },
  });
  return (
    <TouchableOpacity>
        <View style={style.container}>
      <View style={style.icon}>
        <Image source={require('../assets/transfer.png')} />
      </View>
      <View>
        <View style={style.line}>
          <Text style={style.head}>{props.label}</Text>
          <Text style={style.head}>{props.amount}</Text>
        </View>
        <View style={style.line}>
          <Text>{props.date}</Text>
          <Text>{props.location}</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

export default TransactionItem;
