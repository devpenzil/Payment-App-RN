import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Bottombar = () => {
  return (
    <View style={style.container}>
      <TouchableOpacity>
        <View>
          <Image
            style={[style.icon, style.active]}
            source={require('../assets/home-outline.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <Image
            style={style.icon}
            source={require('../assets/gift-outline.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <Image
            style={style.icon}
            source={require('../assets/pie-chart-outline.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <Image
            style={style.icon}
            source={require('../assets/settings-2-outline.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Bottombar;
const style = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    opacity: 0.2,
  },
  active: {
    opacity: 1,
    width: 26,
    height: 26,
  },
});
