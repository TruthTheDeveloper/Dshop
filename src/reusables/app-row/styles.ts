import {StyleSheet} from 'react-native';
import {wpt} from '../../configs/config';
import {AlignexportTypes, justifyContentType} from './type';

export const appRowStyles = ({
  alignItems,
  columnGap,
  justifyContent = 'space-between',
}: {
  alignItems?: AlignexportTypes;
  columnGap: number;
  justifyContent?: justifyContentType;
}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent,
      columnGap: wpt(columnGap),
      alignItems,
    },
  });
