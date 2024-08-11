import {StyleSheet} from 'react-native';
import {wp} from '../../configs/config';

export const pillStyles = () =>
  StyleSheet.create({
    cardWrapper: {
      height: 80,
      borderRadius: 10,
      width: '100%',
      padding: 10,
      flexDirection: 'row',
      gap: wp(10),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
  });
