import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import BackButton from '../components/BackButton';
import BottomButton from '../components/BottomButton';

const Withdraw = () => {
  const [accountlist, setAccountlist] = useState([
    {
      id: 1,
      aname: 'Personal Account',
      anum: '****-****-****-1546',
      active: true,
    },
    {
      id: 2,
      aname: 'Business Account',
      anum: '****-****-****-3645',
      active: false,
    },
    {
      id: 3,
      aname: 'Family Account',
      anum: '****-****-****-9523',
      active: false,
    },
  ]);

  const accountrender = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={item.active ? style.accactive : style.account}>
          <View>
            <View style={style.accicon}>
                <Image style={style.icon} source={require('../assets/transfer.png')} />
            </View>
          </View>
          <View>
            <Text style={style.accname}>{item.aname}</Text>
            <Text style={style.accnum}>{item.anum}</Text>
          </View>
          <View>
            <View
              style={item.active ? style.switchoon : style.switchoff}></View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={style.container}>
      <BackButton label={'Withdraw'} />
      <View style={style.top}>
        <View>
          <Text style={style.amount}>620.00</Text>
          <Text>Your Balance Rs 8.500.000</Text>
        </View>
      </View>
      <View>
        <Text style={style.choose}>Choose a Bank Account</Text>
      </View>
      <View style={style.acontainer}>
        <FlatList data={accountlist} renderItem={accountrender} />
      </View>
      <BottomButton label={'CONTINUE'} />
    </View>
  );
};

export default Withdraw;
const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F3F3F8',
  },
  top: {
    width: '100%',
    height: '30%',
    marginTop: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amount: {
    textAlign: 'center',
    fontSize: 50,
    color: '#2C2C63',
    fontWeight: '400',
  },
  balance: {
    color: '#082431',
    fontSize: 13,
    fontWeight: '400',
    textAlign: 'center',
  },
  choose: {
    textAlign: 'center',
    color: '#082431',
    fontSize: 16,
    fontWeight: '600',
  },
  acontainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  account: {
    width: 315,
    height: 74,
    marginVertical: 5,
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accactive: {
    width: 315,
    height: 74,
    borderColor: '#08A0F7',
    borderWidth: 1,
    marginVertical: 5,
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accname: {
    color: '#2C2C63',
    fontSize: 16,
  },
  accnum: {
    fontSize: 12,
    color: '#082431',
    fontWeight: '400',
    opacity:0.5
  },
  switchoff: {
    width: 34,
    height: 34,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#08A0F7',
  },
  switchoon: {
    width: 34,
    height: 34,
    backgroundColor: '#08A0F7',
    borderRadius: 50,
  },
  accicon:{
    width:34,
    height:34,
    backgroundColor:'#FFBF47',
    borderRadius:10,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  icon:{
    width:16,
    height:16
  }
});
