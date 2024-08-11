import {StyleSheet} from 'react-native';
import {wp} from '../../configs/config';

export const pillStyles = () =>
  StyleSheet.create({
    container: {
      paddingVertical: wp(6),
      paddingHorizontal: wp(12),
      backgroundColor: 'white',
      alignSelf: 'flex-start',
      borderRadius: wp(30),
      borderWidth: 0.2,
      borderColor: 'gray',
    },
  });
