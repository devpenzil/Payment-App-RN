import React from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import BackButton from '../components/BackButton';
import ContactBar from '../components/ContactBar';
import SearchField from '../components/SearchField';
import { rcontacts } from '../data/RecentContacts';
import { allcontacts } from '../data/AllContacts';
const Contacts = () => {
    const contactrender = ({item}) => {
        return(
            <ContactBar cname={item.cname} num={item.num} />
        )
    }
  return (
    <ScrollView>
      <BackButton label={'Contacts'} />
      <SearchField />
      <View style={style.commonbox}>
        <Text style={style.head}>Recent Contacts</Text>
        <FlatList data={rcontacts} renderItem={contactrender} />
      </View>
      <View style={style.commonbox}>
        <Text style={style.head}>All Contacts</Text>
        <FlatList data={allcontacts} renderItem={contactrender} />
      </View>
    </ScrollView>
  );
};

export default Contacts;
const style = StyleSheet.create({
    commonbox:{
        width:'100%',
        paddingHorizontal:20,
        marginTop:20
    },
    head:{
        color:'#082431',
        opacity:0.5,
        fontSize:14,
        fontWeight:'400'
    }
})
