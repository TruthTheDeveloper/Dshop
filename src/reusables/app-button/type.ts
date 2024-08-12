import {ReactNode} from 'react';
import {TextStyle, ViewStyle} from 'react-native/types';

export type AppButtonTypes = {
  isCentered?: boolean;
  children?: ReactNode;
  onPress?: () => void ;
  disabled?: boolean;
  style?: ViewStyle;
  text?: string;
  type?: buttonTypes;
  textColor?:string;
  fontSize?: number;
  textStyle?: TextStyle | Array<TextStyle>;
};

export type buttonTypes = 'outlined' | 'normal';
