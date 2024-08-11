import React from 'react';
import {View} from 'react-native';
import AppImage from '../app-Image';
import AppText from '../app-text';
import {fs} from '../../configs/config';

const Banner = () => {
  return (
    <View
      style={{
        height: 150,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
      }}>
      <AppImage
        mode="contain"
        extraStyles={{
          height: '100%',
          width: '100%',
        }}
        uri="https://cdn.pixabay.com/photo/2022/05/23/08/12/woman-7215527_1280.png"
      />
      <View
        style={{
          padding: 10,
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          alignItems: 'center',
        }}>
        <AppText
          color="white"
          text="Comfort is good"
          styles={{fontSize: fs(16)}}
        />
      </View>
    </View>
  );
};

export default Banner;
