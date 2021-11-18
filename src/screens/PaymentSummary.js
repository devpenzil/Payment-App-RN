import React from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import BackButton from '../components/BackButton';
import SwipeButtons from '../components/SwipeButton';

const PaymentSummary = () => {
  return (
    <View style={style.container}>
      <BackButton label={'Payment Summary'} />
      <View style={style.subcon}>
        <View>
          <View style={style.greenbox}></View>
          <View style={style.box1}>
            <View style={style.box1con}>
              <Text style={style.simplepackage}>Simple Package</Text>
              <Text style={style.desc}>
                14 GB Internet + 2 GB Streaming, Active Period 30 days
              </Text>
            </View>
          </View>
          <View style={style.dot}></View>
          <View style={style.box2}>
            <Text style={style.simplepackage}>Thomas Wise</Text>
            <Text style={style.desc}>0821 - 7654 - 3210</Text>
            <View style={style.promo}>
                <TextInput placeholder={'Promo code'} />
                <Text style={style.apply}>Apply</Text>
            </View>
          </View>
          <View style={style.box3}>
            <Text style={style.total}>Total</Text>
            <Text style={style.amount}>Rs. 50,000</Text>
          </View>
        </View>
      </View>
      <SwipeButtons label={'Swipe to pay'} disabled={false} />
    </View>
  );
};

export default PaymentSummary;
const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F3F3F8',
  },
  box1: {
    backgroundColor: '#fff',
    width: 315,
    height: 200,
    borderRadius: 20,
    justifyContent: 'center',
    position: 'relative',
  },
  box2: {
    backgroundColor: '#fff',
    width: 315,
    height: 200,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
  },
  box3: {
    backgroundColor: '#E2E2F0',
    width: 315,
    height: 80,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  subcon: {
    width: '100%',
    height: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 315,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#D5D5E4',
  },
  greenbox: {
    backgroundColor: '#22B07D',
    width: 60,
    height: 60,
    // position: 'absolute',
    marginBottom: -30,
    borderRadius: 20,
    alignSelf: 'center',
    zIndex: 50,
  },
  box1con: {
    width: 225,
    alignSelf: 'center',
  },
  simplepackage: {
    color: '#2C2C63',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  desc: {
    color: '#2C3A4B',
    fontSize: 13,
    opacity: 0.8,
    textAlign: 'center',
    marginTop: 10,
  },
  total: {
    color: '#3F3F65',
    fontSize: 16,
  },
  amount: {
    fontSize: 22,
    color: '#3F3F65',
    fontWeight: '600',
  },
  promo: {
    borderColor: '#E7E7F6',
    width: 275,
    height: 50,
    alignSelf: 'center',
    marginTop: 20,
    borderWidth:1,
    borderRadius:15,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  apply:{
      fontSize:13,
      color:'#32A7E2',
      fontWeight:'600'
  }
});
