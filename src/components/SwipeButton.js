import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SwipeButton from 'rn-swipe-button';
const SwipeButtons = props => {
  const [swipestatus, setSwipestatus] = useState(props.label);
  return (
    <View style={style.container}>
      <SwipeButton
        disabled={props.disabled}
        swipeSuccessThreshold={70}
        height={64}
        width={315}
        title={swipestatus}
        titleColor="#fff"
        railBackgroundColor='#525298'
        onSwipeSuccess={() => {
          setSwipestatus('Success');
        }}
        onSwipeFail={() => {
          setSwipestatus('Swipe again');
        }}
        railFillBackgroundColor='#525298'
        enableReverseSwipe={false}
        thumbIconBackgroundColor='#fff'
        
      />
    </View>
  );
};

export default SwipeButtons;
const style = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
  },
});
